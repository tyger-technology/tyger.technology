import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexBottomSvg from "../components/index-bottom-svg"
import IndexMiddleSvg from "../components/index-middle-svg"
import IndexTopSvg from "../components/index-top-svg"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Info = styled.section`
  padding-bottom: 40px;
  padding-top: 160px;
  padding-left: 30px;
  padding-right: 15px;
  min-height: 100vh;
  line-height: 1.2;
  margin-top: 0;
  background-color: #50e3c2;
`

const InfoContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${mq[0]} {
    max-width: 83%;
  }
  ${mq[2]} {
    max-width: 50%;
  }

  h1 {
    font-family: "Source Serif Pro", serif;
    font-weight: 400;
    position: relative;
    z-index: 100;
    font-size: 1.75rem;
  }
  ${mq[0]} {
    h1 {
      font-size: 3rem;
    }
  }
  ${mq[3]} {
    h1 {
      font-size: 3.9375rem;
    }
  }
`

const Folio = styled.section`
  background-color: #f5f566;
  padding-left: 30px;
  padding-right: 15px;
  padding-top: 60px;
  padding-bottom: 60px;
  ${mq[1]} {
    padding-bottom: 140px;
  }

  h2 {
    line-height: 1.4;
    font-weight: 400;
    font-family: "Source Serif Pro", serif;
    font-size: 1.375rem;
  }
  ${mq[2]} {
    h2 {
      font-size: 1.75rem;
    }
  }
`

const FolioContainer = styled.div`
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
`

const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${mq[1]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
`

const Project = styled.div`
  margin: 1.5rem;
  p {
    font-size: 1.375rem;
    font-style: italic;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Info>
      <IndexTopSvg />
      <InfoContainer>
        <h1>
          Tyger Technology is a digital studio based in Tasmania. We specialize
          in creating unique and engaging websites, apps & digital experiences.
        </h1>
      </InfoContainer>
    </Info>
    <Folio>
      <IndexMiddleSvg />
      <FolioContainer>
        <Row>
          <Col>
            <Project>
              <Img fluid={data.file.childImageSharp.fluid} />
              <h2>Project — coming soon</h2>
              <p>Client — coming soon</p>
            </Project>
          </Col>
          <Col>
            <Project>
              <Img fluid={data.file.childImageSharp.fluid} />
              <h2>Project — coming soon</h2>
              <p>Client — coming soon</p>
            </Project>
          </Col>
        </Row>
        <Row>
          <Col>
            <Project>
              <Img fluid={data.file.childImageSharp.fluid} />
              <h2>Project — coming soon</h2>
              <p>Client — coming soon</p>
            </Project>
          </Col>
          <Col>
            <Project>
              <Img fluid={data.file.childImageSharp.fluid} />
              <h2>Project — coming soon</h2>
              <p>Client — coming soon</p>
            </Project>
          </Col>
        </Row>
      </FolioContainer>
    </Folio>
    <IndexBottomSvg />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
