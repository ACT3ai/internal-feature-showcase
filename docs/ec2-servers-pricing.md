# EC2 Servers & Pricing

Infrastructure costs and server configuration overview.

## Overview

Our main application currently utilizes two dedicated EC2 instances to ensure robust performance and scalability. These instances are configured to handle our production and testing environments, respectively, providing the necessary computational resources for our application workloads.

## Server Configuration

We are using two EC2 instances for our main application with the following configurations:

### EC2 Instances Console View

<!-- EC2 Console Screenshot - Add the image file as static/img/ec2-instances.png if available -->

### Production Instance

**Name:** HeroE9-AppServerStackprod/Instance  
**Instance ID:** i-0f4684e4efbc281a6  
**Instance Type:** c5a.xlarge  
**State:** Running

This instance is dedicated to our production environment, handling live application traffic and critical operations. The c5a.xlarge instance type provides high-performance compute optimized for CPU-intensive workloads.

### Testing Instance

**Name:** HeroE9-AppServerStacktesting/Instance  
**Instance ID:** i-0c5c15ea27b905c45  
**Instance Type:** t3a.large  
**State:** Running

Used for development, testing, and staging, this instance allows us to validate new features and updates before deployment. The t3a.large instance type provides a balance of performance and cost-effectiveness for non-production workloads.

## Pricing Information

The following table provides a detailed breakdown of our EC2 instance costs:

| Instance Type | Instance Name | Monthly Cost (USD) | Notes |
|--------------|---------------|-------------------|-------|
| c5a.xlarge | Production Instance | $112.42 | High-performance compute for production workloads |
| t3a.large | Testing Instance | $54.90 | Cost-effective for development and testing |
| **Total** | Both Instances | **$167.32** | Combined monthly infrastructure cost |

### Cost Breakdown

- **Production Instance (c5a.xlarge):** $112.42/month
  - Optimized for CPU-intensive production workloads
  - Provides consistent performance for critical operations

- **Testing Instance (t3a.large):** $54.90/month
  - Burstable performance suitable for development environments
  - Cost-effective for non-production use cases

- **Total Monthly Cost:** $167.32/month

## Cost Optimization

We continuously monitor our EC2 usage and costs to ensure optimal resource allocation. The current setup balances performance requirements with cost efficiency:

- Production instance uses compute-optimized instances for consistent performance
- Testing instance uses burstable instances to reduce costs for intermittent workloads
- Regular review of instance sizes and utilization to identify optimization opportunities

