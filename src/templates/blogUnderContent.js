import React from "react"
import Layout from "../components/layout"
import BlogItem from "../components/BlogItem"

export default ({ pageContext }) => (
  <>
    <div>
      <img src={pageContext.featured_media.source_url} alt="Thumbnail" />
    </div>
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <BlogItem />
    </Layout>
  </>
)
