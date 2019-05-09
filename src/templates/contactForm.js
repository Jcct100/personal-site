import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => (
  <Layout>
    <img src={pageContext.featured_media.source_url} alt="Thumbnail" />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <form method="POST" action="https://formspree.io/james@voice4good.com">
      <input type="email" name="email" placeholder="Your email" />
      <textarea name="message" placeholder="Test Message" />
      <button type="submit">Send Test</button>
    </form>
  </Layout>
)
