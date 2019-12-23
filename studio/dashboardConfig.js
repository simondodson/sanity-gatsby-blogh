export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e004d62ee2d9fb9e10fcdc0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogh-studio',
                  apiId: '87769949-0f0c-4b0c-922e-6e26f8c7cd19'
                },
                {
                  buildHookId: '5e004d62e91cbae6a2f913a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogh',
                  apiId: 'e63eeaef-8e09-4100-9bd4-0b25e400a802'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simondodson/sanity-gatsby-blogh',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
