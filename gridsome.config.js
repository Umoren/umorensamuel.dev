// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  siteName: 'Umoren Samuel',
  siteDescription: 'Frontend and Software Engineering Blog by Umoren Samuel.',
  siteUrl: 'https://umorensamuel.codes',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },
  
  icon: {
    // favicon: '~/src/favicon.png',
    favicon: './src/assets/images/favicon-16x16.png'
    // touchicon: '~/src/my-touchicon.png'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Umoren Samuel',
          description: 'A blog on frontend development, JAMstack and software engineering. Written by Umoren Samuel, Front-end Developer',
          feed_url: 'https://umorensamuel.codes/rss.xml',
          site_url: 'https://umorensamuel.codes'
        },
        feedItemOptions: node => ({
          title: node.title,
          date: node.date,
          url: 'https://umorensamuel.codes/' + node.slug,
          description: node.description
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-138246929-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about-me': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
   
  //   {
  //     use: 'gridsome-plugin-pwa',
  //     options: {
  //         title: 'Umoren Samuel Codes',
  //         startUrl: '/',
  //         display: 'standalone',
  //         statusBarStyle: 'default',
  //         disableServiceWorker: false,
  //         cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
  //         shortName: 'Umoren Samuel',
  //         themeColor: '#666600',
  //         backgroundColor: '#000000',
  //         icon: '', // must be provided like 'src/favicon.png'
  //         msTileImage: '',
  //         msTileColor: '#666600'
  //     }
  // },
  {
    use: "gridsome-plugin-service-worker",
    options: {
      networkFirst: {
        routes: [
          "/",
          /\.(js|css|png|jpg|jpeg)$/, // means "every JS, CSS, and PNG images"
        ],
      },
      precachedRoutes: ["/"],
      cacheOnly: {
        cacheName: "co-v1",
        routes: ["/"],
      },
    },
  },
  {
    use: "gridsome-plugin-manifest",
    options: {
        background_color: "#000000",
        icon_path: "./src/assets/images/manifest.png",
        name: "Umoren Samuel Codes",
        short_name: "Umoren Samuel",
        theme_color: "#000000",
        lang: "en",
    },
},

    
 ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}

