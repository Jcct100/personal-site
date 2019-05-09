import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import {
  faTwitch,
  faLinkedinIn,
  faFacebook,
  faGithub,
  faYoutube,
  faMediumM,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterWrapper = styled.div`
  height: 570px;
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const IconStyle = styled.div`
  height: 100px;
  width: 100px;
  background-color: #daddd0;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const FlexWrap = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Layout>
        <FlexWrap>
          <div>
            <IconStyle>
              <FontAwesomeIcon icon={faTwitch} />
            </IconStyle>
          </div>

          <IconStyle>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </IconStyle>
          <IconStyle>
            <FontAwesomeIcon icon={faFacebook} />
          </IconStyle>
          <IconStyle>
            <FontAwesomeIcon icon={faGithub} />
          </IconStyle>
        </FlexWrap>
        <FlexWrap>
          <IconStyle>
            <FontAwesomeIcon icon={faYoutube} />
          </IconStyle>
          <IconStyle>
            <FontAwesomeIcon icon={faMediumM} />
          </IconStyle>
          <IconStyle>
            <FontAwesomeIcon icon={faInstagram} />
          </IconStyle>
          <IconStyle>
            <FontAwesomeIcon icon={faTwitter} />
          </IconStyle>
        </FlexWrap>
      </Layout>
    </FooterWrapper>
  )
}

export default Footer
