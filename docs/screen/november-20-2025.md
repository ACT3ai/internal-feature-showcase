
id: november-20-2025
title: Screen Feature - November 20, 2025

# Screen Feature – November 20, 2025

This page documents the Screen feature status and demos for November 20, 2025, focusing on comparing different tracking and compositing workflows.

## Overview

I tested five different approaches to screen replacement to evaluate stability, accuracy, and visual quality. The comparisons highlight the differences between using OpenCV, YOLO, and Blender for various stages of the pipeline (tracking vs. compositing), as well as fixes for specific artifacts like "white frames."

## Demo Comparisons

Below are the results from five distinct workflows:

### 1. OpenCV Tracking → Blender Compositing
*   **Workflow:** Used OpenCV for screen detection and corner tracking, then exported the data to Blender for the final planar track and composite.
*   **Observation:** Leverages the speed of OpenCV with the high-quality rendering of Blender.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/OfCZxlLpH1A" title="OpenCV Tracking to Blender" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### 2. YOLO Tracking → Blender Compositing
*   **Workflow:** Used a custom YOLOv8 model for robust screen segmentation and tracking, then exported the data to Blender for compositing.
*   **Observation:** Combines the robust detection of YOLO (handling occlusions better) with Blender's compositing power.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/cI-u3k_EQ2w" title="YOLO Tracking to Blender" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### 3. Full Blender Workflow (Tracking & Compositing)
*   **Workflow:** Performed the entire pipeline inside Blender, using its internal planar tracking capabilities or Python scripting for both detection and composition.
*   **Observation:** **Not Recommended.** The tracking stability and output quality were significantly worse compared to OpenCV and YOLO approaches. Despite multiple attempts to fix the tracking logic via code, the results remained suboptimal.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/o8R5I8jPusY" title="Full Blender Workflow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### 4. YOLO Standalone (Default Model) - Issue & Fix
*   **Workflow:** Used the YOLOv8-seg model directly for both tracking and replacement (no Blender).
*   **Observation:** The first video shows occasional "white frame" glitches/flickering in the raw output. The second video demonstrates the same workflow after a code fix resolved these rendering artifacts, resulting in a clean, stable output.

**Before (With Glitches):**
<iframe width="100%" height="400" src="https://www.youtube.com/embed/jWvakzLtFrk" title="YOLO Standalone Fixed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**After (Fixed):**
<iframe width="100%" height="400" src="https://www.youtube.com/embed/N4ephuSxOmk" title="YOLO Standalone with Issues" frameborder="0" allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Remaining Work

We need to include the following changes into the pipeline so the QA team can test them with different videos. After their feedback, we can iterate further.

### Phase 1

1.  **Job Scheduler:** Implement a job scheduler to run the screen-replacement process using real shot data.
2.  **Dynamic Data:** Integrate the necessary APIs to fetch valid dynamic data.
3.  **QA Deployment:** Deploy these changes to production for QA testing.

### Phase 2 (After Phase 1 Deployment)

1.  **New Screen Types:** Add support for additional screen types, such as VFS-style screens.
2.  **Advanced Obstacle Handling:** Improve handling of obstacles interacting with the screen — for example, human hands moving around the device or a person briefly blocking the screen while ensuring the replaced video stays accurately attached to the device.

## Notes

*   **Tracking Accuracy:** YOLO generally provides more stable masks than OpenCV, especially when screen boundaries are ambiguous.
*   **Compositing Quality:** Blender workflows consistently offer superior lighting and perspective integration compared to the raw OpenCV/Python composite.
*   **Artifacts:** The "white frame" issue in the standalone script was identified and fixed, ensuring consistent output for the pure Python pipeline.
