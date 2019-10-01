import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-start;
  color: #442b5b;
`

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  display: flex;
  flex-wrap: nowrap;
`

const Title = styled.span`
  font-size: 1.625rem;
  font-family: "Source Serif Pro", serif;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  letter-spacing: 0.5px;
`

const titleStyle = css`
  text-decoration: none;
  color: #442b5b;
`

const linkStyle = css`
  color: #442b5b;
  text-decoration: none;
  transition: all 0.35s;
  letter-spacing: 1px;
  &:hover,
  &:focus,
  &:active {
    color: #f56682;
  }
`

const NavBarLink = styled.ul`
  flex-direction: row;
  font-size: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  font-family: "Source Sans Pro", sans-serif;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const Li = styled.li`
  padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <Container>
        <Title>
          <Link to="/" css={titleStyle}>
            {siteTitle}
          </Link>
        </Title>
        <NavBarLink>
          <Li>
            <Link
              css={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
              to="/"
            >
              Work
            </Link>
          </Li>
          <Li>
            <Link
              css={linkStyle}
              activeStyle={{ textDecoration: "underline" }}
              to="/about/"
            >
              About
            </Link>
          </Li>
        </NavBarLink>
      </Container>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
