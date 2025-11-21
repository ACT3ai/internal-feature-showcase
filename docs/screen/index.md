---
id: index
title: Screen
---

# Screen

This section documents the **Screen Replacement System**, a comprehensive solution for automatically detecting, tracking, and replacing device screens in videos with custom content.

## Overview

Our screen replacement workflow is designed to be robust and versatile, employing multiple approaches to handle various complexities, from simple screen swaps to complex perspective tracking in challenging lighting conditions.

The system utilizes a combination of computer vision techniques and machine learning models to achieve high-accuracy results:

### Key Technologies & Approaches

*   **OpenCV & Computer Vision:**
    *   Utilizes traditional computer vision algorithms for edge detection, contour finding, and corner extraction.
    *   Ideal for scenarios where screens have high contrast boundaries and simple geometries.
    *   Fast processing for real-time or near real-time applications.

*   **YOLO (You Only Look Once) Object Detection:**
    *   Leverages deep learning models (YOLOv8-seg) to robustly identify screen regions even in cluttered scenes.
    *   Provides instance segmentation masks that precisely delineate the screen area, excluding bezels and other distractions.
    *   Significantly reduces false positives compared to purely rule-based vision methods.

*   **Custom Model Training:**
    *   We train custom YOLO models on specific datasets (e.g., our template data) to specialize in detecting screens of particular devices or in unique environments.
    *   This "domain adaptation" allows the system to handle edge cases like reflections, odd angles, or partial occlusions where generic models might fail.
    *   [Read more about how custom models help](Documentation/HOW_CUSTOM_MODEL_HELPS).

*   **Blender Integration:**
    *   For the highest quality compositing, tracking data (from OpenCV or YOLO) can be exported to Blender.
    *   Blender's planar tracker and compositing nodes allow for photorealistic rendering, handling reflections, shadows, and perfect perspective matching.
    *   This workflow bridges the gap between automated detection and professional VFX pipelines.

## Demo Archive

Browse Screen demos organized by creation date:

- [November 20, 2025](Daily_Update/nov_20_2025/november-20-2025) - Initial Screen feature walkthrough

## Detailed Documentation

- [Screen Replacement System Overview](Documentation/README.md)
- [Complete Instructions Guide](Documentation/INSTRUCTIONS)
- [Training Guide](Documentation/README_TRAINING)
- [YOLO Dataset Details](Documentation/YOLO_DATASET_DETAILS)
- [How Custom Trained Model Improves Screen Detection](Documentation/HOW_CUSTOM_MODEL_HELPS)
