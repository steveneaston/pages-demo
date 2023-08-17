import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: 'en-GB',
    title: 'Amiqus Developers',
    description: 'Integrate your service or app with Amiqus.',
    cleanUrls: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: 'https://developers.amiqus.co/assets/images/logos/amiqus-full.png',
      siteTitle: false,

      search: {
        provider: 'local',
        options: {
          detailedView: true
        }
      },

      nav: [
        {
          text: 'Amiqus API',
          items: [
            { text: 'Reference', link: 'https://developers.amiqus.co/aqid/api-reference.html' },
            { text: 'Guides', link: '/guides/getting-started' },
            { text: 'Changelog', link: '/' },
          ]
        }
      ],

      sidebar: {
        '/guides/': [
          {
            text: 'Amiqus API',
            items: [
              {
                text: 'Introduction',
                // collapsed: true,
                // link: '/guides/getting-started',
                items: [
                  { text: 'Getting Started', link: '/guides/getting-started'},
                  { text: 'Integrations', link: '/guides/integrations'},
                  {
                    text: 'Authentication',
                    link: '/guides/authentication',
                    collapsed: true,
                    items: [
                      { text: 'OAuth 2.0', link: '/guides/auth/oauth'},
                      { text: 'Personal Access Token', link: '/guides/auth/personal-access-token'},
                    ]
                  },
                ]
              },
              {
                text: 'Concepts',
                // collapsed: true,
                items: [
                  { text: 'Rate Limits', link: '/guides/concepts/rate-limits' },
                  { text: 'Pagination', link: '/guides/concepts/pagination' },
                  { text: 'Status Codes', link: '/guides/concepts/status-codes' },
                  { text: 'Expandable Properties', link: '/guides/concepts/expandable-properties' },
                ]
              },
            ]
          },
          {
            text: 'SDK API',
            collapsed: true,
            link: '/guides/sdk/',
            items: [
              { text: 'Introduction', link: '/guides/sdk/' },
            ]
          }
        ]
      },

      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      }
    },
    mermaid: {
      // Mermaid.js config
    },
    mermaidPlugin: {
      class: 'mermaid'
    }
  })
  )
