# Screen Replacement with Custom Model Training

This guide explains how to train a custom YOLOv8-seg model using your template data and use it for improved screen detection.

## Features

1. **Dual Detection Methods**: Support for both YOLOv8-seg and OpenCV detection
2. **Separate Outputs**: Generate separate output videos for each detection method
3. **Custom Model Training**: Train YOLOv8-seg on your screen dataset for better accuracy
4. **Automatic Model Detection**: Automatically uses custom trained model if available

## Training a Custom Model

### Step 1: Prepare Your Dataset

Your dataset should be in the following structure:
```
template/
├── train/
│   ├── _annotations.csv
│   └── *.jpg (training images)
└── valid/
    ├── _annotations.csv
    └── *.jpg (validation images)
```

The `_annotations.csv` file should have the format:
```csv
filename,width,height,class,xmin,ymin,xmax,ymax
image1.jpg,1920,1080,0,100,200,800,600
```

### Step 2: Train the Model

Run the training script:

```bash
cd src/visuals/screen_replacement
python train_custom_model.py --template_dir template --epochs 100 --batch 16
```

Options:
- `--template_dir`: Path to template directory (default: "template")
- `--epochs`: Number of training epochs (default: 100)
- `--imgsz`: Image size for training (default: 640)
- `--batch`: Batch size (default: 16)
- `--model`: Base model to use (default: "yolov8n-seg.pt")

The script will:
1. Convert CSV annotations to YOLO format
2. Prepare the dataset structure
3. Train the model
4. Save the best model to `runs/segment/screen_detection/weights/best.pt`

### Step 3: Use the Trained Model

The screen replacement processor will automatically detect and use the trained model if it exists in:
- `runs/segment/screen_detection/weights/best.pt`

Or you can specify a custom path:
```python
processor = ScreenReplacementProcessor(
    ...,
    custom_model_path="path/to/your/model.pt"
)
```

## Using Both Detection Methods

### Generate Separate Outputs

To generate separate output videos for YOLOv8 and OpenCV methods:

```python
processor = ScreenReplacementProcessor(
    source_video_path="sample4.mp4",
    replacement_video_path="Replaced1.mp4",
    output_path="output_screen_replaced.mp4",
    detection_method="both",  # Generate separate outputs
    ...
)
```

This will create:
- `output_screen_replaced_yolo.mp4` - Using YOLOv8-seg detection
- `output_screen_replaced_opencv.mp4` - Using OpenCV detection

### Single Method

To use only one method:

```python
# YOLOv8 only
processor = ScreenReplacementProcessor(
    ...,
    detection_method="yolo"
)

# OpenCV only
processor = ScreenReplacementProcessor(
    ...,
    detection_method="opencv"
)
```

## Example Usage

### Basic Usage (Both Methods)

```python
from visuals.screen_replacement.screen_replacement import ScreenReplacementProcessor

processor = ScreenReplacementProcessor(
    source_video_path="sample4.mp4",
    replacement_video_path="Replaced1.mp4",
    output_path="output.mp4",
    detection_method="both",
    confidence_threshold=0.3,
    smoothing_window=5
)

output_path = processor.process()
```

### With Custom Model

```python
processor = ScreenReplacementProcessor(
    source_video_path="sample4.mp4",
    replacement_video_path="Replaced1.mp4",
    output_path="output.mp4",
    detection_method="both",
    custom_model_path="runs/segment/screen_detection/weights/best.pt"
)

output_path = processor.process()
```

## Training Tips

1. **More Epochs**: For better accuracy, train for 200-300 epochs
2. **Larger Model**: Use `yolov8s-seg.pt` or `yolov8m-seg.pt` for better accuracy (slower)
3. **Image Size**: Increase `--imgsz` to 1280 for higher resolution detection
4. **Batch Size**: Adjust based on your GPU memory (larger = faster training)

## Output Comparison

When using `detection_method="both"`, you can compare:
- **YOLOv8 output**: Better for complex scenes, trained on your data
- **OpenCV output**: Faster, works without GPU, good for simple cases

Choose the method that works best for your specific use case!

