import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundText = styled.section`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 160px;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.75rem;
  width: 50%;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundText>
      <h1> Page Not Found</h1>
    </NotFoundText>
  </Layout>
)

export default NotFoundPage
