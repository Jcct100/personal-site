import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({ pageContext }) => {
  var imageSrc = ""
  if (pageContext.featured_media === null) {
    imageSrc = ""
  } else {
    imageSrc = pageContext.featured_media.source_url
  }
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <FeaturedImage src={imageSrc} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}
