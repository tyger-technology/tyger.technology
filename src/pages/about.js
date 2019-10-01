import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSvg from "../components/about-svg"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const About = styled.section`
  padding-bottom: 40px;
  padding-top: 160px;
  padding-left: 30px;
  padding-right: 15px;
  background-color: #f5f566;
  min-height: calc(100vh - 300px);
`

const AboutContainer = styled.div`
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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
`

const AboutText = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${mq[1]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  p {
    line-height: 1.4;
    font-weight: 400;
    font-family: "Source Serif Pro", serif;
    margin-bottom: 3rem;
    margin-top: 3rem;
    position: relative;
    z-index: 100;
    font-size: 1.375rem;
  }
  ${mq[0]} {
    p {
      font-size: 2rem;
    }
  }
  ${mq[3]} {
    p {
      font-size: 2.375rem;
    }
  }
`

const ServicesText = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  ui {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  li {
    list-style: none;
    font-style: italic;
    font-size: 1.125rem;
  }
  h2 {
    line-height: 1.4;
    font-weight: 400;
    font-family: "Source Serif Pro", serif;
    font-size: 1.375rem;
  }
  ${mq[0]} {
    h2 {
      font-size: 2rem;
    }
  }
  ${mq[3]} {
    h2 {
      font-size: 2.375rem;
    }
  }
`

const AboutPage = ({ location }) => (
  <Layout>
    <SEO title="about" pathname={location.pathname} />
    <About>
      <AboutSvg />
      <AboutContainer>
        <Row>
          <AboutText>
            <p>
              With bakgrounds in both design and scientific and techincal
              programming, our team can provide solutions to a range of
              projects.
            </p>
            <p>
              We have experience working clients on experiences ranging from
              data vistualisation for biomedical applications to innovative
              websites for illustrators.
            </p>
          </AboutText>
          <ServicesText>
            <h2>Services</h2>
            <ul>
              <li>Website Development</li>
              <li>Mobile Apps</li>
              <li>Data Visulsation</li>
            </ul>
            <h2>Clients</h2>
            <ul>
              <li>coming soon...</li>
            </ul>
          </ServicesText>
        </Row>
      </AboutContainer>
    </About>
  </Layout>
)

export default AboutPage
