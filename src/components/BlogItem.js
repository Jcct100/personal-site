import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`
// const PortfolioImage = styled.img`
//   max-width: 100%;
// `

const BlogItems = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpBlog.edges.map(blogItem => {
            /* var imageSrc = ""
            if (portfolioItem.node.featured_media === null) {
              imageSrc = ""
            } else {
              imageSrc = portfolioItem.node.featured_media.source_url
            } */

            return (
              <PortfolioItem key={blogItem.node.id}>
                <h2 dangerouslySetInnerHTML={{ __html: blogItem.node.title }} />
                {/* <PortfolioImage src={imageSrc} alt="Thumbnail" /> */}
                <div
                // dangerouslySetInnerHTML={{
                //   __html: portfolioItem.node.excerpt,
                // }}
                />
                <Link to={`/blog/${blogItem.node.slug}`}> Read more</Link>
              </PortfolioItem>
            )
          })}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default BlogItems
