import React from "react"
import { css } from "@emotion/core"
import SvgCircle from "./svg-circle"
import SvgTriangle from "./svg-triangle"

const c2Footer = css`
  position: absolute;
  bottom: 70px;
  right: 40px;
  width: 110px;
  height: 110px;
  z-index: 12;
  fill: #f56682;
  @media (min-width: 576px) {
    width: 200px;
    height: 200px;
    bottom: 80px;
  }
`

const t3Footer = css`
  position: absolute;
  bottom: 50px;
  right: 40px;
  width: 110px;
  height: 110px;
  transform: rotate(40deg);
  z-index: 11;
  fill: #50e3c2;
  @media (min-width: 576px) {
    width: 200px;
    height: 200px;
    bottom: 60px;
  }
`

const c5Footer = css`
  position: absolute;
  transform: rotate(40deg);
  z-index: 11;
  width: 40px;
  height: 40px;
  fill: #b8e986;
  animation: 6s c5-2-keys infinite alternate linear;

  @keyframes c5-2-keys {
    from {
      bottom: 50px;
      left: 40px;
    }
    to {
      bottom: 180px;
      left: 40px;
    }
  }
`
const c1Footer = css`
  position: absolute;
  bottom: 50px;
  left: 75px;
  transform: rotate(40deg);
  width: 30px;
  height: 30px;
  fill: #4a90e2;
  z-index: 11;
  animation: 7s c7-keys infinite alternate linear;

  @keyframes c7-keys {
    from {
      bottom: 50px;
      left: 75px;
    }
    to {
      bottom: 250px;
      left: 75px;
    }
  }
`

const IndexBottomSvg = () => (
  <>
    <SvgCircle css={c2Footer} />
    <SvgTriangle css={t3Footer} />
    <SvgCircle css={c5Footer} />
    <SvgCircle css={c1Footer} />
  </>
)

export default IndexBottomSvg
