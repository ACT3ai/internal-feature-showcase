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
        'ec2-servers-pricing',
        'act3-api',
      ],
    },
  ],
};

module.exports = sidebars;

