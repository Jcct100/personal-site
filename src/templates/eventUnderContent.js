import React from "react"
import Layout from "../components/layout"
import EventItem from "../components/EventItem"

export default ({ pageContext }) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <EventItem />
  </Layout>
)
