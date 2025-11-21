# Screen Replacement System - Complete Instructions Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Quick Start - Running Screen Replacement](#quick-start---running-screen-replacement)
4. [Training Custom Model](#training-custom-model)
5. [Advanced Usage](#advanced-usage)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

---

## Prerequisites

### System Requirements
- **Python**: 3.7 or higher
- **RAM**: 4GB minimum (8GB recommended)
- **GPU**: Optional but recommended for YOLOv8 training and inference
- **Storage**: ~500MB for models and dependencies
- **Operating System**: Windows, macOS, or Linux

### Required Knowledge
- Basic Python knowledge
- Command line/terminal usage
- Basic understanding of video files

---

## Installation

### Step 1: Install Python Dependencies

Open your terminal/command prompt and navigate to the project directory:

```bash
cd /path/to/visual-automation
```

Install required packages:

```bash
# Install core dependencies
pip install opencv-python numpy

# Install YOLOv8 for detection (optional but recommended)
pip install ultralytics

# If you have CUDA GPU, install PyTorch with CUDA support for faster processing
# Visit https://pytorch.org/get-started/locally/ for CUDA installation
```

### Step 2: Verify Installation

Test that everything is installed correctly:

```bash
python -c "import cv2; import numpy; print('✅ OpenCV and NumPy installed')"
python -c "from ultralytics import YOLO; print('✅ YOLOv8 installed')"
```

### Step 3: Prepare Video Files

Place your videos in the `src/visuals/screen_replacement/` directory:

- **Source video**: Video containing the screen to replace (e.g., `sample4.mp4`)
- **Replacement video**: Video content to place on the screen (e.g., `Replaced1.mp4`)

**Note**: The replacement video will be looped if it's shorter than the source video.

---

## Quick Start - Running Screen Replacement

### Method 1: Using the Default Script (Easiest)

The simplest way to run screen replacement:

```bash
cd src/visuals/screen_replacement
python process_screen_replacement.py
```

This will:
- Use `sample4.mp4` as source video
- Use `Replaced1.mp4` as replacement video
- Generate output videos with both YOLOv8 and OpenCV methods
- Save outputs as `output_screen_replaced_yolo.mp4` and `output_screen_replaced_opencv.mp4`

### Method 2: Using Python Module

From the project root directory:

```bash
python -m src.visuals.screen_replacement.process_screen_replacement
```

### Method 3: Custom Python Script

Create your own script:

```python
from src.visuals.screen_replacement.screen_replacement import ScreenReplacementProcessor

# Initialize processor
processor = ScreenReplacementProcessor(
    source_video_path="path/to/your/source_video.mp4",
    replacement_video_path="path/to/your/replacement_video.mp4",
    output_path="path/to/output.mp4",
    detection_method="both",  # "yolo", "opencv", or "both"
    confidence_threshold=0.3,
    device_class_id=63,  # 63=laptop, 67=cell phone
)

# Process video
output_path = processor.process()
print(f"✅ Output saved to: {output_path}")
```

### Configuration Options

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `source_video_path` | Input video with screen | Required | Path to .mp4 file |
| `replacement_video_path` | Video to place on screen | Required | Path to .mp4 file |
| `output_path` | Output video path | Required | Path to save output |
| `detection_method` | Detection algorithm | "both" | "yolo", "opencv", "both" |
| `confidence_threshold` | Detection confidence | 0.3 | 0.0-1.0 (lower = more detections) |
| `device_class_id` | Device type | 67 | 63=laptop, 67=phone, 77=mouse |
| `smoothing_window` | Temporal smoothing | 5 | Number of frames (3-10) |
| `custom_model_path` | Custom YOLOv8 model | None | Path to .pt file |

### Understanding Output Files

When using `detection_method="both"`:
- **`output_screen_replaced_yolo.mp4`**: Uses YOLOv8-seg detection (more accurate, slower)
- **`output_screen_replaced_opencv.mp4`**: Uses OpenCV detection (faster, less accurate)

Compare both outputs to choose the best result.

---

## Blender Planar Replacement Workflows

You can now drive Blender’s planar tracker in three different ways. All commands below assume the project root is `/Users/arun/Documents/Repos/visual-automation` (adjust if needed).

### 1. OpenCV Detection → Blender Plane Track
1. Export tracking JSON without rendering the diagnostic video:
   ```bash
   cd /Users/arun/Documents/Repos/visual-automation
   python -m src.visuals.screen_replacement.process_screen_replacement \
     --source src/visuals/screen_replacement/sample4.mp4 \
     --replacement src/visuals/screen_replacement/Replaced2.mp4 \
     --output src/visuals/screen_replacement/output_screen_replaced_opencv.mp4 \
     --method opencv \
     --tracking-output src/visuals/screen_replacement/tracking_opencv.json \
     --no-video
   ```
2. Let Blender build a `PlaneTrack` and render the final comp:
   ```bash
   blender --background \
     --python blender/scripts/apply_planar_track_from_json.py -- \
     --source src/visuals/screen_replacement/sample4.mp4 \
     --replacement src/visuals/screen_replacement/Replaced2.mp4 \
     --tracking src/visuals/screen_replacement/tracking_opencv.json \
     --output src/visuals/screen_replacement/output_planar_opencv.mp4 \
     --feather 10 --dilate -3 --hold-missing
   ```

### 2. YOLO Detection → Blender Plane Track
Same workflow as above, just switch `--method` and JSON filename:
```bash
python -m src.visuals.screen_replacement.process_screen_replacement \
  --source src/visuals/screen_replacement/sample4.mp4 \
  --replacement src/visuals/screen_replacement/Replaced2.mp4 \
  --output src/visuals/screen_replacement/output_screen_replaced_yolo.mp4 \
  --method yolo \
  --tracking-output src/visuals/screen_replacement/tracking_yolo.json \
  --no-video

blender --background \
  --python blender/scripts/apply_planar_track_from_json.py -- \
  --source src/visuals/screen_replacement/sample4.mp4 \
  --replacement src/visuals/screen_replacement/Replaced2.mp4 \
  --tracking src/visuals/screen_replacement/tracking_yolo.json \
  --output src/visuals/screen_replacement/output_planar_yolo.mp4 \
  --feather 10 --dilate -3 --hold-missing
```

### 3. Fully In-Blender (Detection + Tracking + Compositing)
`blender/scripts/blender_full_screen_replace.py` wraps the entire pipeline. Blender loads the videos, runs the Python detector inside its runtime, converts the JSON to a plane track, and renders.
```bash
blender --background \
  --python blender/scripts/blender_full_screen_replace.py -- \
  --source src/visuals/screen_replacement/sample4.mp4 \
  --replacement src/visuals/screen_replacement/Replaced2.mp4 \
  --output src/visuals/screen_replacement/output_planar_blender.mp4 \
  --method opencv \
  --tracking-json src/visuals/screen_replacement/tracking_blender_opencv.json \
  --feather 10 --dilate -3 --hold-missing
```

All three approaches use the same smoothing, padding, and negative dilation so the replacement video is feathered inside the bezel with no spillover. Pick the detector that works best for your footage, or run all three and compare.

---

## Training Custom Model

Training a custom model improves detection accuracy for your specific screen types.

### Step 1: Prepare Training Data

#### Option A: Using Existing Template Data

If you already have data in `template/` folder:

```bash
cd src/visuals/screen_replacement
ls template/train/    # Should contain .jpg images
ls template/valid/    # Should contain .jpg images
```

#### Option B: Creating New Training Data

1. **Collect Images**:
   - Take 100-500 images of screens (laptops, phones, tablets)
   - Include various angles, lighting conditions, and screen types
   - Save images as `.jpg` or `.png`

2. **Organize Structure**:
   ```
   template/
   ├── train/
   │   ├── image1.jpg
   │   ├── image2.jpg
   │   └── _annotations.csv
   └── valid/
       ├── image1.jpg
       ├── image2.jpg
       └── _annotations.csv
   ```

3. **Create Annotations CSV**:
   
   Create `_annotations.csv` in both `train/` and `valid/` folders:
   
   ```csv
   filename,width,height,class,xmin,ymin,xmax,ymax
   image1.jpg,1920,1080,0,100,200,800,600
   image2.jpg,1920,1080,0,150,180,900,650
   ```
   
   **CSV Format Explanation**:
   - `filename`: Image filename
   - `width`, `height`: Image dimensions
   - `class`: Class ID (0 = screen, 1 = laptop - both map to screen)
   - `xmin`, `ymin`, `xmax`, `ymax`: Bounding box coordinates
   
   **How to Get Coordinates**:
   - Use annotation tools like LabelImg, CVAT, or Roboflow
   - Or manually measure pixel coordinates in image editing software

### Step 2: Run Training Script

```bash
cd src/visuals/screen_replacement

python train_custom_model.py \
    --template_dir template \
    --epochs 100 \
    --img_size 640 \
    --project_name screen_detection
```

**Parameters**:
- `--template_dir`: Path to template folder (default: `template`)
- `--epochs`: Number of training epochs (default: 100, recommended: 50-200)
- `--img_size`: Image size for training (default: 640, options: 320, 640, 1280)
- `--project_name`: Project name for saving results (default: `screen_detection`)

### Step 3: Monitor Training

Training will display progress:
- Loss values (should decrease)
- Validation metrics
- Training time per epoch

**Expected Output**:
```
Training YOLOv8-seg model...
Epoch 1/100: loss=0.5...
Epoch 2/100: loss=0.4...
...
✅ Training complete!
Best model saved to: runs/segment/screen_detection/weights/best.pt
```

### Step 4: Training Time

- **CPU**: ~2-4 hours for 100 epochs
- **GPU (CUDA)**: ~15-30 minutes for 100 epochs
- **Recommended**: Use GPU if available

### Step 5: Use Custom Model

The custom model is **automatically detected** if it exists in:
```
runs/segment/screen_detection/weights/best.pt
```

No additional configuration needed! The system will:
1. First try to load custom model
2. Fall back to pretrained model if not found

**Or specify explicitly**:
```python
processor = ScreenReplacementProcessor(
    ...,
    custom_model_path="runs/segment/screen_detection/weights/best.pt"
)
```

### Training Tips

1. **More Data = Better Results**: Aim for 200+ training images
2. **Diverse Images**: Include different angles, lighting, screen types
3. **Validation Split**: Use 80% train, 20% validation
4. **Epochs**: Start with 50-100, increase if underfitting
5. **Image Size**: 640 is good balance of speed/accuracy
6. **GPU**: Use GPU for faster training (10-20x speedup)

---

## Advanced Usage

### Using Only YOLOv8 Detection

```python
processor = ScreenReplacementProcessor(
    source_video_path="input.mp4",
    replacement_video_path="replacement.mp4",
    output_path="output.mp4",
    detection_method="yolo",  # Only YOLOv8
)
```

### Using Only OpenCV Detection

```python
processor = ScreenReplacementProcessor(
    source_video_path="input.mp4",
    replacement_video_path="replacement.mp4",
    output_path="output.mp4",
    detection_method="opencv",  # Only OpenCV (faster, no GPU needed)
)
```

### Adjusting Detection Sensitivity

Lower confidence threshold for better detection in difficult scenes:

```python
processor = ScreenReplacementProcessor(
    ...,
    confidence_threshold=0.2,  # Lower = more detections (may include false positives)
)
```

Higher threshold for fewer false positives:

```python
processor = ScreenReplacementProcessor(
    ...,
    confidence_threshold=0.5,  # Higher = fewer but more confident detections
)
```

### Adjusting Temporal Smoothing

More smoothing for stable tracking:

```python
processor = ScreenReplacementProcessor(
    ...,
    smoothing_window=10,  # More frames = smoother but slower to adapt
)
```

Less smoothing for faster adaptation:

```python
processor = ScreenReplacementProcessor(
    ...,
    smoothing_window=3,  # Fewer frames = faster adaptation but more jitter
)
```

### Processing Specific Device Types

```python
# For laptops
processor = ScreenReplacementProcessor(
    ...,
    device_class_id=63,  # Laptop
)

# For cell phones
processor = ScreenReplacementProcessor(
    ...,
    device_class_id=67,  # Cell phone
)

# For tablets (if in your model)
processor = ScreenReplacementProcessor(
    ...,
    device_class_id=67,  # Often same as phone
)
```

---

## Troubleshooting

### Problem: "No replacement visible in output"

**Symptoms**: Output video shows original screen, no replacement content

**Solutions**:
1. **Check detection is working**:
   ```python
   # Enable debug logging
   import logging
   logging.basicConfig(level=logging.DEBUG)
   ```

2. **Verify replacement video is readable**:
   ```python
   import cv2
   cap = cv2.VideoCapture("replacement_video.mp4")
   ret, frame = cap.read()
   print(f"Video readable: {ret}, Frame shape: {frame.shape if ret else None}")
   ```

3. **Lower confidence threshold**:
   ```python
   confidence_threshold=0.2  # Try lower values
   ```

4. **Check if corners are detected**:
   - Look for "Successfully extracted 4 corners" in logs
   - If not, try different `device_class_id`

### Problem: "Corners extending outside screen"

**Symptoms**: Replacement content extends into bezel or outside display

**Solutions**:
1. **Corner refinement should handle this automatically**
2. **Check mask includes only screen area**:
   - Lower confidence threshold
   - Try different detection method
3. **Verify image enhancement is working**:
   - Check logs for "Refined corners to ensure they're within screen boundaries"

### Problem: "Jittery or unstable tracking"

**Symptoms**: Replacement jumps or shakes between frames

**Solutions**:
1. **Increase smoothing window**:
   ```python
   smoothing_window=10  # Increase from default 5
   ```

2. **Check optical flow is working**:
   - Ensure video has consistent frame rate
   - Check for large camera movements

3. **Use YOLOv8 method** (more stable than OpenCV):
   ```python
   detection_method="yolo"
   ```

### Problem: "Poor detection quality"

**Symptoms**: Screen not detected or wrong region detected

**Solutions**:
1. **Lower confidence threshold**:
   ```python
   confidence_threshold=0.2
   ```

2. **Try different device class ID**:
   ```python
   device_class_id=63  # Try laptop instead of phone
   # or
   device_class_id=67  # Try phone instead of laptop
   ```

3. **Train custom model**:
   - Use your specific screen types
   - Include similar lighting conditions

4. **Switch detection method**:
   ```python
   detection_method="opencv"  # If YOLO fails
   # or
   detection_method="yolo"    # If OpenCV fails
   ```

### Problem: "Slow processing"

**Symptoms**: Processing takes too long

**Solutions**:
1. **Use GPU for YOLOv8**:
   - Install CUDA-enabled PyTorch
   - Processing will be 5-10x faster

2. **Use OpenCV method** (faster):
   ```python
   detection_method="opencv"
   ```

3. **Reduce video resolution**:
   - Downscale input video before processing
   - Process at 720p instead of 1080p

4. **Process fewer frames**:
   - Skip frames if not needed
   - Process every 2nd or 3rd frame

### Problem: "YOLOv8 model not found"

**Symptoms**: Error loading YOLOv8 model

**Solutions**:
1. **Install ultralytics**:
   ```bash
   pip install ultralytics
   ```

2. **Check model path**:
   ```python
   # Verify custom model exists
   from pathlib import Path
   model_path = Path("runs/segment/screen_detection/weights/best.pt")
   print(f"Model exists: {model_path.exists()}")
   ```

3. **Use OpenCV fallback**:
   ```python
   detection_method="opencv"  # Doesn't require YOLOv8
   ```

### Problem: "Training fails or takes too long"

**Solutions**:
1. **Use GPU** (10-20x faster):
   - Install CUDA-enabled PyTorch
   - Training will be much faster

2. **Reduce epochs**:
   ```bash
   --epochs 50  # Instead of 100
   ```

3. **Reduce image size**:
   ```bash
   --img_size 320  # Instead of 640
   ```

4. **Check data format**:
   - Verify CSV format is correct
   - Ensure images are readable
   - Check train/valid split

---

## Best Practices

### For Best Results

1. **Video Quality**:
   - Use high-resolution source videos (1080p or higher)
   - Ensure good lighting in source video
   - Avoid extreme camera movements

2. **Replacement Video**:
   - Match aspect ratio to typical screen (16:9 for laptops)
   - Use high-quality replacement content
   - Longer replacement videos loop automatically

3. **Detection**:
   - Train custom model for your specific screen types
   - Use YOLOv8 method for best accuracy
   - Adjust confidence threshold based on results

4. **Performance**:
   - Use GPU for YOLOv8 (much faster)
   - Use OpenCV for quick processing without GPU
   - Process in batches for multiple videos

### Workflow Recommendations

1. **First Time Setup**:
   ```
   1. Install dependencies
   2. Test with default videos
   3. Train custom model (if needed)
   4. Run full processing
   ```

2. **For New Screen Types**:
   ```
   1. Collect training images
   2. Annotate screens
   3. Train custom model
   4. Test on sample video
   5. Adjust parameters if needed
   ```

3. **Production Processing**:
   ```
   1. Use trained custom model
   2. Use YOLOv8 method
   3. Process with GPU
   4. Compare YOLO vs OpenCV outputs
   5. Choose best result
   ```

### File Organization

Recommended structure:
```
screen_replacement/
├── input_videos/
│   ├── source1.mp4
│   └── source2.mp4
├── replacement_videos/
│   ├── replacement1.mp4
│   └── replacement2.mp4
├── output_videos/
│   ├── output1_yolo.mp4
│   └── output1_opencv.mp4
├── template/
│   ├── train/
│   └── valid/
└── runs/
    └── segment/
        └── screen_detection/
            └── weights/
                └── best.pt
```

---

## Quick Reference

### Common Commands

```bash
# Run screen replacement
python -m src.visuals.screen_replacement.process_screen_replacement

# Train custom model
python train_custom_model.py --template_dir template --epochs 100

# Check if model exists
ls runs/segment/screen_detection/weights/best.pt
```

### Configuration Examples

**Quick Processing (OpenCV only)**:
```python
detection_method="opencv"
```

**Best Quality (YOLOv8 with custom model)**:
```python
detection_method="yolo",
custom_model_path="runs/segment/screen_detection/weights/best.pt"
```

**Compare Both Methods**:
```python
detection_method="both"  # Generates 2 output files
```

---

## Additional Resources

- **Technical Documentation**: See `TECHNICAL_DOCUMENTATION.md` for detailed technical information
- **Training Guide**: See `README_TRAINING.md` for advanced training instructions
- **YOLOv8 Documentation**: https://docs.ultralytics.com/
- **OpenCV Documentation**: https://docs.opencv.org/

---

## Getting Help

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Review logs for error messages
3. Verify all dependencies are installed
4. Test with default videos first
5. Check video file formats and codecs

---

**Last Updated**: November 2024  
**Version**: 1.0

