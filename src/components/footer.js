import React from "react"
import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const FooterSection = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: #442b5b;
  padding-left: 30px;
  padding-right: 15px;
  padding-bottom: 3rem;
  padding-top: 3rem;
`

const FooterContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${mq[0]} {
    max-width: 540px;
  }
  ${mq[1]} {
    max-width: 720px;
  }
  ${mq[2]} {
    max-width: 960px;
  }
  ${mq[3]} {
    max-width: 1140px;
  }
`

const FooterText = styled.div`
  color: #b8e986;
  z-index: 100;
  a {
    color: #b8e986;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
  div {
    z-index: 100;
    position: relative;
    font-family: "Source Serif Pro", serif;
    font-size: 1.375rem;
  }
  ${mq[0]} {
    div {
      font-size: 2rem;
    }
  }
  ${mq[3]} {
    div {
      font-size: 2.375rem;
    }
  }
`

const Footer = () => (
  <FooterSection>
    <FooterContainer>
      <FooterText>
        <div>We&apos;d love to hear from you:</div>
        <div>
          <a href="mailto:info@tyger.technology">info@tyger.technology</a>
        </div>
      </FooterText>
    </FooterContainer>
  </FooterSection>
)

export default Footer
