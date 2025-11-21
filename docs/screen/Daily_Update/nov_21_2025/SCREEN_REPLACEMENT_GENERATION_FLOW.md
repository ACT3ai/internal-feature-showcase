# Screen Replacement Generation Job Flow

## System Architecture Flow

![Screen Replacement Generation Flow](./screen_replacement_flow.svg)


## Component Details

### 1. Master Worker (Startup)
- **Location**: `src/master/worker.ts`
- **Action**: Reads `masterWorkflowMap` from `constant.ts`
- **Creates**: Worker for `screenReplacementGenerationScheduler`
- **Starts**: Cron workflow that runs every minute

### 2. Master Scheduler Workflow
- **File**: `src/master/workflows/screenreplacementgenerationscheduler.ts`
- **Function**: `screenReplacementGenerationScheduler()`
- **Schedule**: Runs every 1 minute (cron: `*/1 * * * *`)
- **Task Queue**: `master_screen_replacement_generation`
- **Activities Used**:
  - `fetchJobs`: Queries database for PENDING jobs
  - `sendJobStatusChangedEvent`: Updates job status events
  - `updateJobStatusAct`: Updates job status in database

### 3. Workflow Scheduler Helper
- **File**: `src/shared/workflows/createworkflowscheduler.ts`
- **Function**: `createWorkflowScheduler()`
- **Behavior**: Processes jobs **sequentially** (not concurrently)
- **For Each Job**:
  1. Updates status to `INQUEUE`
  2. Executes child workflow using `executeChild`
  3. Child workflow runs independently (ParentClosePolicy: ABANDON)

### 4. Slave Workflow
- **File**: `src/slave/workflows/screenreplacementgeneration.ts`
- **Function**: `screenReplacementGeneration()`
- **Task Queue**: `screen_replacement_generation`
- **Parameters**: `jobId`, `workerId`, `identifier`
- **Action**: Proxies to activity `processScreenReplacementGeneration`

### 5. Slave Activity
- **File**: `src/slave/activities/processscreenreplacementgeneration.ts`
- **Function**: `processScreenReplacementGeneration()`
- **Timeouts**:
  - `startToCloseTimeout`: 2 days
  - `scheduleToCloseTimeout`: 2 days
  - `heartbeatTimeout`: 20 seconds
- **Steps**:
  1. Initialize logger
  2. Get Temporal context (workflowId, runId)
  3. Create heartbeat watcher (monitors for terminations)
  4. Update job status to `PROGRESS`
  5. Run command: `poetry run invoke generate-screen-replacement --id {identifier} --jobId {jobId}`
  6. Monitor execution (race between command and heartbeat)
  7. On success: Update completion time, send COMPLETED event
  8. On error: Update error status, throw error

### 6. Status Flow
```
PENDING → INQUEUE → PROGRESS → COMPLETED
                          ↓
                       ERROR
```

## Key Features

1. **Cron-based Scheduling**: Master scheduler runs every minute to check for new jobs
2. **Sequential Processing**: Jobs are processed one at a time (unlike VEO_3_GENERATION which is concurrent)
3. **Heartbeat Monitoring**: Activity can be terminated mid-execution
4. **Status Tracking**: Job status is updated at each stage
5. **Error Handling**: Comprehensive error handling with status updates
6. **Independent Execution**: Child workflows run independently (parent doesn't wait)

## Database Interactions

- **Fetch Jobs**: Query for `status = 'PENDING'` AND `type = 'SCREEN_REPLACEMENT_GENERATION'`
- **Update Status**: Update job status at each stage
- **Update Times**: Store `startedTime` and `completedTime` with execution duration
- **Error Logging**: Store error messages in job record

## Temporal Namespace

- **Namespace**: `screen_replacement_generation` (lowercase)
- **Master Task Queue**: `master_screen_replacement_generation`
- **Slave Task Queue**: `screen_replacement_generation`
- **Workflow ID Pattern**: `screen_replacement_generation({jobId})`

