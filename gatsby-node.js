const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                title
                content
                template
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const portfolioUnderContentTemplate = path.resolve(
          "./src/templates/portfolioUnderContent.js"
        )
        const blogUnderContentTemplate = path.resolve(
          "./src/templates/blogUnderContent.js"
        )
        const eventUnderContentTemplate = path.resolve(
          "./src/templates/eventUnderContent.js"
        )
        const contactUnderContentTemplate = path.resolve(
          "./src/templates/contactForm.js"
        )
        const aboutUnderContentTemplate = path.resolve(
          "./src/templates/about.js"
        )
        const homePage = path.resolve("./src/templates/page.js")

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          var page
          switch (edge.node.template) {
            case "portfolio_under_content.php":
              page = portfolioUnderContentTemplate
              break
            case "blog_under_content.php":
              page = blogUnderContentTemplate
              break
            case "event_under_content.php":
              page = eventUnderContentTemplate
              break
            case "contact_under_content.php":
              page = contactUnderContentTemplate
              break
            case "about_under_content.php":
              page = aboutUnderContentTemplate
              break
            case "home_under_content.php":
              page = homePage
              break
            default:
              page = homePage
          }

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(page),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpPortfolio {
                edges {
                  node {
                    featured_media {
                      source_url
                    }
                    title
                    slug
                    content
                    excerpt
                    id
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/portfolio.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END POSTS ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpBlog {
                edges {
                  node {
                    id
                    title
                    content
                    excerpt
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const blogTemplate = path.resolve("./src/templates/blog.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpBlog.edges, edge => {
            createPage({
              path: `/blog/${edge.node.slug}/`,
              component: slash(blogTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END POSTS ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpEvent {
                edges {
                  node {
                    id
                    title
                    content
                    excerpt
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const eventTemplate = path.resolve("./src/templates/event.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpEvent.edges, edge => {
            createPage({
              path: `/event/${edge.node.slug}/`,
              component: slash(eventTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}
