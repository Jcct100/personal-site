import React from "react"
import Layout from "../components/layout"
import BlogItem from "../components/BlogItem"
import EventItem from "../components/EventItem"
import PortfolioItem from "../components/PortfolioItem"
import styled from "styled-components"
import SiteInfo from "../components/Siteinfo"
import Logo from "../images/logo.gif"
import Footer from "../components/footer"
import Form from "../components/form"

const ImageCover = styled.div`
  background-color: #363636;
`
const LogoWrapper = styled.img`
  position: absolute;
  height: 300px;
  width: 300px;
  top: 30%;
  left: 51%;
  transform: translate(-50%, -50%);
`
const Header = styled.div`
  height: 200px;
  background-color: #fc2f2f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`

export default ({ pageContext }) => (
  <>
    <SiteInfo />
    <ImageCover>
      <img src={pageContext.featured_media.source_url} alt="Thumbnail" />
      <LogoWrapper src={Logo} />
    </ImageCover>

    <Form />

    <div>
      <div>
        <Header>
          <h2>VOICE TECHNOLOGY -The next big thing!!</h2>
        </Header>
        <Layout>
          <BlogItem />
        </Layout>
      </div>

      <div>
        <Header>
          <h2>UPCOMING EVENTS - Learn from the best!!</h2>
        </Header>
        <Layout>
          <EventItem />
        </Layout>
      </div>

      <div>
        <Header>
          <h2>
            If you want to own your tech company, <br /> forget an MBA and learn
            to code!!
          </h2>
        </Header>
        <Layout>
          <PortfolioItem />
        </Layout>
      </div>

      <Layout>
        <form method="POST" action="https://formspree.io/james@voice4good.com">
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Test Message" />
          <button type="submit">Send Test</button>
        </form>
      </Layout>

      <div>
        <Header>
          <h2>Stay in touch with me</h2>
        </Header>
        <Footer />
      </div>
    </div>
  </>
)
