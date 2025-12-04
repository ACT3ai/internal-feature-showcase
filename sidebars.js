/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you need.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Comfy Video Generation',
          link: {
            type: 'doc',
            id: 'comfy-video-generation/index',
          },
          items: [
            {
              type: 'doc',
              id: 'comfy-video-generation/november-17-2025',
              label: 'November 17, 2025',
            },
            {
              type: 'doc',
              id: 'comfy-video-generation/november-14-2025',
              label: 'November 14, 2025',
            },
            {
              type: 'doc',
              id: 'comfy-video-generation/november-12-2025',
              label: 'November 12, 2025',
            },
            {
              type: 'doc',
              id: 'comfy-video-generation/november-10-2025',
              label: 'November 10, 2025',
            },
          ],
        },
        {
          type: 'category',
          label: 'Screen',
          link: {
            type: 'doc',
            id: 'screen/index',
          },
          items: [
            {
              type: 'category',
              label: 'Documentation',
              items: [
                {
                  type: 'doc',
                  id: 'screen/Documentation/README',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'screen/Documentation/INSTRUCTIONS',
                  label: 'Instructions',
                },
                {
                  type: 'doc',
                  id: 'screen/Documentation/README_TRAINING',
                  label: 'Training Guide',
                },
                {
                  type: 'doc',
                  id: 'screen/Documentation/YOLO_DATASET_DETAILS',
                  label: 'YOLO Dataset Details',
                },
                {
                  type: 'doc',
                  id: 'screen/Documentation/HOW_CUSTOM_MODEL_HELPS',
                  label: 'How Custom Model Helps',
                },
              ],
            },
            {
              type: 'category',
              label: 'Daily Updates',
              items: [
                {
                  type: 'doc',
                  id: 'screen/Daily_Update/dec_04_2025/december-04-2025',
                  label: 'December 4, 2025',
                },
                {
                  type: 'doc',
                  id: 'screen/Daily_Update/nov_21_2025/SCREEN_REPLACEMENT_GENERATION_FLOW',
                  label: 'November 21, 2025',
                },
                {
                  type: 'doc',
                  id: 'screen/Daily_Update/nov_20_2025/november-20-2025',
                  label: 'November 20, 2025',
                },
              ],
            },
          ],
        },
        'ec2-servers-pricing',
        'act3-api',
      ],
    },
  ],
};

module.exports = sidebars;

