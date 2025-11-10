import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'charlie-kirk',
    'Topics',
    'Topic-Analyses',
    'Topics3/overview',
    {
      type: 'category',
      label: 'Investigation Sections',
      items: [
        {
          type: 'category',
          label: 'Core Analysis',
          items: [
            'analysis_documentation/overview',
            'timeline_events/overview',
            'key_individuals/overview',
          ],
        },
        {
          type: 'category',
          label: 'Technical Analysis',
          items: [
            'aircraft_flight_analysis/overview',
            'technology_surveillance/overview',
            'social_media_analysis/overview',
          ],
        },
        {
          type: 'category',
          label: 'Institutional Analysis',
          items: [
            'government_organizations/overview',
            'legal_investigation/overview',
            'security_law_enforcement/overview',
          ],
        },
        {
          type: 'category',
          label: 'Context & Response',
          items: [
            'political_context/overview',
            'media_response/overview',
            'campus_university/overview',
          ],
        },
        {
          type: 'category',
          label: 'Theories & Groups',
          items: [
            'conspiracy_theories/overview',
            'organizations_groups/overview',
          ],
        },
        {
          type: 'category',
          label: 'Locations & Other',
          items: [
            'property_locations/overview',
            'other_topics/overview',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
