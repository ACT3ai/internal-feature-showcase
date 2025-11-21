---
title: Screen Replacement System Overview
---

# Screen Replacement System

Automatically detect and replace screen content in videos with accurate perspective transformation.

## Quick Start

### Installation

```bash
pip install opencv-python numpy ultralytics
```

### Basic Usage

```bash
# Run with default settings
python -m src.visuals.screen_replacement.process_screen_replacement
```

The CLI now accepts `--method`, `--tracking-output`, `--no-video`, and other switches so you can export tracking JSON or toggle between YOLO / OpenCV detection without editing code.

### Blender Planar Tracker

To have Blender perform the final composite with its Plane Track Deform node:

1. Export tracking JSON (OpenCV or YOLO):
   ```bash
   python -m src.visuals.screen_replacement.process_screen_replacement \
     --source src/visuals/screen_replacement/sample4.mp4 \
     --replacement src/visuals/screen_replacement/Replaced2.mp4 \
     --output src/visuals/screen_replacement/output_diagnostic.mp4 \
     --method opencv \
     --tracking-output src/visuals/screen_replacement/tracking_opencv.json \
     --no-video
   ```
2. Render inside Blender using the new helper script:
   ```bash
   blender --background \
     --python blender/scripts/apply_planar_track_from_json.py -- \
     --source src/visuals/screen_replacement/sample4.mp4 \
     --replacement src/visuals/screen_replacement/Replaced2.mp4 \
     --tracking src/visuals/screen_replacement/tracking_opencv.json \
     --output src/visuals/screen_replacement/output_planar_opencv.mp4
   ```

Alternatively, run everything inside Blender via `blender/scripts/blender_full_screen_replace.py` which generates tracking data, creates the plane track, and renders in one go.

### Python API

```python
from src.visuals.screen_replacement.screen_replacement import ScreenReplacementProcessor

processor = ScreenReplacementProcessor(
    source_video_path="sample4.mp4",
    replacement_video_path="Replaced1.mp4",
    output_path="output.mp4",
    detection_method="both",  # "yolo", "opencv", or "both"
)

output_path = processor.process()
```

## Features

- ✅ **Dual Detection**: YOLOv8-seg and OpenCV methods
- ✅ **Image Enhancement**: Automatic sharpening and contrast enhancement
- ✅ **Accurate Perspective**: Precise corner detection and homography
- ✅ **Temporal Smoothing**: Stable tracking across frames
- ✅ **Seamless Blending**: Natural-looking replacements

## Detection Methods

| Method | Training Data | Speed | Accuracy | Use Case |
|--------|---------------|-------|----------|----------|
| **YOLOv8-seg** | ✅ Uses template data | Medium | High | Best quality |
| **OpenCV** | ❌ No training (rule-based) | Fast | Medium | Quick processing |
| **Both** | ✅ YOLO uses template | Slow | High | Compare results |

**Note**: 
- YOLOv8-seg uses custom trained model from template data (if available)
- OpenCV is rule-based and doesn't require training data

## Configuration

```python
processor = ScreenReplacementProcessor(
    source_video_path="input.mp4",
    replacement_video_path="replacement.mp4",
    output_path="output.mp4",
    device_class_id=67,          # 63=laptop, 67=phone
    confidence_threshold=0.3,    # Detection threshold
    smoothing_window=5,          # Temporal smoothing
    detection_method="both",     # Detection method
    custom_model_path=None,       # Custom YOLOv8 model
)
```

## Custom Model Training

Train a custom YOLOv8-seg model for better accuracy:

```bash
python train_custom_model.py \
    --template_dir template \
    --epochs 100 \
    --img_size 640
```

See `README_TRAINING.md` for details.

## Output Files

When using `detection_method="both"`, two output files are generated:
- `output_screen_replaced_yolo.mp4` - YOLOv8-seg method
- `output_screen_replaced_opencv.mp4` - OpenCV method

## Troubleshooting

### No replacement visible
- Check debug logs for corner detection
- Verify replacement video is readable
- Ensure homography validation passes

### Corners outside screen
- Corner refinement should handle this automatically
- Check mask includes only screen area

### Jittery tracking
- Increase `smoothing_window` parameter
- Check optical flow is working

## Documentation

- **[Training Guide](README_TRAINING.md)** - Custom model training
- **[Instructions](INSTRUCTIONS.md)** - End-to-end workflows (including Blender planar-tracking approaches)

## Requirements

- Python 3.7+
- OpenCV 4.5+
- NumPy 1.19+
- Ultralytics (for YOLOv8)
- 4GB+ RAM (8GB recommended)

## License

See main project repository for license information.
