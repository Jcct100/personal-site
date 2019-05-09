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
const PortfolioImage = styled.img`
  max-width: 100%;
`

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => {
            var imageSrc = ""
            if (portfolioItem.node.featured_media === null) {
              imageSrc = ""
            } else {
              imageSrc = portfolioItem.node.featured_media.source_url
            }

            return (
              <PortfolioItem key={portfolioItem.node.id}>
                <h2>{portfolioItem.node.title}</h2>
                <PortfolioImage src={imageSrc} alt="Thumbnail" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: portfolioItem.node.excerpt,
                  }}
                />
                <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                  {" "}
                  Read more
                </Link>
              </PortfolioItem>
            )
          })}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default PortfolioItems
