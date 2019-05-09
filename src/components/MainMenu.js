import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import "./menu.css"
// import SiteInfo from "./Siteinfo"

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      // <div>
      <nav>
        {/* <SiteInfo /> */}
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="lines line-1" />
          <span className="lines line-2" />
          <span className="lines line-3" />
        </label>
        <a href="/home" className="menu-item item-1">
          Home
        </a>
        <a href="/contact-me" className="menu-item item-2">
          Connect
        </a>
        <a href="/events" className="menu-item item-3">
          Events
        </a>
        <a href="/blog" className="menu-item item-4">
          Blog
        </a>
        <a href="/projects" className="menu-item item-5">
          Projects
        </a>
        <a href="/about-me" className="menu-item item-6">
          My Story
        </a>
        {/* {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          (item, index) => (
            <a
              href={item.object_slug}
              key={item.title}
              className={`menu-item item-${index}`}
            >
              {item.title}
            </a>
          )
        )} */}
      </nav>
      // </div>
    )}
  />
)

export default MainMenu

/* <Link to={item.object_slug} key={item.title}>
              {item.title}
            </Link> */
