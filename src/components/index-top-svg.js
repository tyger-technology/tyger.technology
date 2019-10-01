import React from "react"
import { css } from "@emotion/core"
import SvgCircle from "./svg-circle"
import SvgTriangle from "./svg-triangle"

const c1 = css`
  top: 260px;
  left: -90px;
  width: 135px;
  height: 135px;
  fill: #4a90e2;
  position: absolute;
  z-index: 10;
  @media (min-width: 576px) {
    top: 240px;
    left: -140px;
    width: 270px;
    height: 270px;
  }
`

const t5 = css`
  position: absolute;
  z-index: 10;
  top: 360px;
  left: -30px;
  width: 75px;
  height: 75px;
  fill: #b8e986;
  @media (min-width: 576px) {
    left: -20px;
    width: 150px;
    height: 150px;
  }
`

const t1 = css`
  position: absolute;
  top: 510px;
  right: 90px;
  width: 80px;
  height: 80px;
  fill: #4a90e2;
  z-index: 11;
  animation: 6s t1-keys infinite alternate linear;

  @media (min-width: 576px) {
    top: 640px;
    right: 90px;
    width: 140px;
    height: 140px;
  }

  @media (max-width: 375px) and (max-height: 660px) {
    display: none;
  }

  @keyframes t1-keys {
    from {
      transform: rotate(15deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
`

const t6 = css`
  position: absolute;
  top: 400px;
  right: 100px;
  width: 200px;
  height: 200px;
  z-index: 10;
  transform: rotate(-45deg);
  fill: #f5f566;

  @media (min-width: 576px) {
    top: 500px;
    right: 100px;
    width: 300px;
    height: 300px;
  }

  @media (max-width: 375px) and (max-height: 660px) {
    display: none;
  }
`

const c5 = css`
  position: absolute;
  z-index: 11;
  top: 560px;
  right: 100px;
  width: 100px;
  height: 100px;
  fill: #b8e986;

  @media (min-width: 576px) {
    top: 740px;
    right: 100px;
    width: 140px;
    height: 140px;
  }

  @media (max-width: 375px) and (max-height: 660px) {
    display: none;
  }
`

const c2 = css`
  position: absolute;
  width: 90px;
  height: 90px;
  fill: #f56682;
  z-index: 12;
  animation: c2-keys-sm 6s infinite linear alternate;

  @media (min-width: 576px) {
    width: 120px;
    height: 120px;
    animation: c2-keys-xl 6s infinite linear alternate;
  }

  @media (max-width: 375px) and (max-height: 660px) {
    display: none;
  }

  @keyframes c2-keys-xl {
    from {
      top: 740px;
      right: 200px;
    }
    to {
      top: 700px;
      right: 200px;
    }
  }

  @keyframes c2-keys-sm {
    from {
      top: 560px;
      right: 180px;
    }
    to {
      top: 520px;
      right: 180px;
    }
  }
`

const IndexTopSvg = () => (
  <>
    <SvgCircle css={c1} />
    <SvgTriangle css={t5} />
    <SvgTriangle css={t1} />
    <SvgTriangle css={t6} />
    <SvgCircle css={c5} />
    <SvgCircle css={c2} />
  </>
)

export default IndexTopSvg
