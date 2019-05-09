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

const EventItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpEvent {
            edges {
              node {
                slug
                id
                title
                content
                excerpt
              }
            }
          }
        }
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpEvent.edges.map(eventItem => {
            {
              /* var imageSrc = ""
            if (portfolioItem.node.featured_media === null) {
              imageSrc = ""
            } else {
              imageSrc = portfolioItem.node.featured_media.source_url
            } */
            }
            return (
              <PortfolioItem key={eventItem.node.id}>
                <h2
                  dangerouslySetInnerHTML={{ __html: eventItem.node.title }}
                />
                {/* <PortfolioImage src={imageSrc} alt="Thumbnail" /> */}
                <div
                // dangerouslySetInnerHTML={{
                //   __html: portfolioItem.node.excerpt,
                // }}
                />
                <Link to={`/event/${eventItem.node.slug}`}> Read more</Link>
              </PortfolioItem>
            )
          })}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default EventItems
