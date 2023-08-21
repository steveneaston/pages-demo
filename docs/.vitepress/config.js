import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: 'en-GB',
    title: 'Amiqus Developers',
    description: 'Integrate your service or app with Amiqus.',
    // cleanUrls: true,
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
            { text: 'Reference', link: 'pathname:///aqid/api-reference.html' },
            { text: 'Guides', link: '/guides/getting-started' },
            { text: 'Changelog', link: '/aqid/changelog' },
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
        text: 'Last updated',
        formatOptions: {
          dateStyle: 'medium',
          timeStyle: 'short'
        }
      },

      notFound: {
        quote: '',
        linkLabel: 'go to home', // Aria label
        linkText: 'Back home'
      }
    },
    head: [
      [
        'link',
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
      [
        'link',
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      [
        'link',
        { href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@0;1&family=Source+Sans+3:ital,wght@0,400;0,600;1,400;1,600&display=swap', rel: 'stylesheet' }
      ]
    ],
    mermaid: {
      // Mermaid.js config
    },
    mermaidPlugin: {
      class: 'mermaid'
    }
  })
  )
