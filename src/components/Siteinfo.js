import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  height: 80px;
  background-color: #ffcd38;
  display: flex;
  align-items: center;
`

const Header = styled.h1`
  margin: 0 0 0 1rem;
`

const SiteInfo = () => {
  return (
    <HeaderWrapper>
      <Header>JAMES TANG</Header>
    </HeaderWrapper>
  )
}

export default SiteInfo
