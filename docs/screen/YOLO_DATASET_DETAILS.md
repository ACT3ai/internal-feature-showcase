---
id: YOLO_DATASET_DETAILS
title: YOLO Dataset Details
---

# YOLO Dataset Details

This document provides information about the datasets used for training and improving the YOLO models, specifically focusing on the COCONut dataset.

## COCONut Dataset

**COCONut: Crafting the Future of Segmentation Datasets with Exquisite Annotations in the Era of Big Data**

The COCONut dataset is a large-scale, human-verified dataset for segmentation, designed to modernize COCO segmentation with high-quality annotations. It serves as a robust foundation for training advanced segmentation models like YOLOv8-seg.

### Key Features

*   **Large-Scale:** 1st large-scale human-verified dataset for segmentation.
*   **High-Quality Annotations:** "Exquisite annotations" intended to improve model precision.
*   **Modern Standards:** Built to address the needs of the "Big Data" era in computer vision.

### Resources & Links

*   **Dataset Download (Kaggle):** [https://www.kaggle.com/datasets/xueqingdeng/coconut](https://www.kaggle.com/datasets/xueqingdeng/coconut)
*   **Official Repository (GitHub):** [https://github.com/bytedance/coconut_cvpr2024?tab=readme-ov-file](https://github.com/bytedance/coconut_cvpr2024?tab=readme-ov-file)
*   **HuggingFace:** [https://huggingface.co/datasets/xdeng77/coconut_s](https://huggingface.co/datasets/xdeng77/coconut_s) (and other splits like `coconut_b`, `coconut_val`)

### Dataset Splits

The dataset is available in several splits to cater to different training needs:

| Splits             | #images | #masks | Description                                      |
| ------------------ | ------- | ------ | ------------------------------------------------ |
| **COCONut-S**      | 118K    | 1.54M  | Standard split, comparable to COCO train2017.    |
| **COCONut-B**      | 242K    | 2.78M  | Bigger split, includes unlabeled2017 images.     |
| **COCONut-L**      | 358K    | 4.75M  | Large split.                                     |
| **COCONut-XL**     | 488K    | 6.43M  | Extra Large split.                               |
| **COCONut-val**    | 25K     | 437K   | Validation set.                                  |
| **relabeled-COCO-val** | 5K | 67K   | Re-labeled COCO validation set.                  |

### Usage for Screen Detection

This dataset can be instrumental in:
1.  **Pre-training:** Improving the base capabilities of the YOLO model before fine-tuning on specific screen data.
2.  **Robustness:** Providing a diverse set of object segments to help the model distinguish screens from other rectangular objects or complex backgrounds.
3.  **Generalization:** Enhancing the model's ability to handle various lighting and occlusion scenarios found in high-quality segmentation datasets.

---
*Note: Always ensure compliance with the dataset's license (Apache-2.0 for the repository, COCO terms for images) when using for research or commercial purposes.*

