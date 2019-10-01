import React from "react"
import { css } from "@emotion/core"
import SvgCircle from "./svg-circle"
import SvgTriangle from "./svg-triangle"

const t2 = css`
  position: absolute;
  top: 360px;
  left: -90px;
  width: 155px;
  height: 155px;
  z-index: 10;
  transform: rotate(30deg);
  fill: #f56682;
  @media (min-width: 575px) {
    left: -120px;
    width: 255px;
    height: 255px;
  }
`

const c1 = css`
  position: absolute;
  bottom: 30px;
  left: -70px;
  width: 120px;
  height: 120px;
  fill: #4a90e2;
  transform: rotate(40deg);
  z-index: 11;
`

const c3 = css`
  position: absolute;
  bottom: 70px;
  left: 10px;
  width: 60px;
  height: 60px;
  fill: #50e3c2;
  transform: rotate(40deg);
  z-index: 11;
`

const c5 = css`
  position: absolute;
  bottom: 260px;
  right: 5px;
  width: 80px;
  height: 80px;
  fill: #b8e986;
  z-index: 11;
  @media (min-width: 575px) {
    bottom: 190px;
    width: 120px;
    height: 120px;
  }
`

const t4 = css`
  position: absolute;
  transform: rotate(15deg);
  width: 80px;
  height: 80px;
  fill: #795;
  z-index: 10;
  animation: about-t2-keys-sm 5s infinite linear alternate;

  @media (min-width: 575px) {
    width: 110px;
    height: 110px;
    animation: 5s about-t4-keys infinite alternate linear;
  }

  @keyframes about-t4-keys {
    from {
      bottom: 220px;
      right: 20px;
    }
    to {
      bottom: 150px;
      right: 20px;
    }
  }

  @keyframes about-t2-keys-sm {
    from {
      bottom: 320px;
      right: 30px;
    }
    to {
      bottom: 270px;
      right: 30px;
    }
  }
`

const c2 = css`
  position: absolute;
  bottom: 100px;
  right: 40px;
  width: 30px;
  height: 30px;
  fill: #f56682;
  z-index: 12;
  animation: about-c2-keys-sm 5s infinite linear alternate;

  @media (min-width: 575px) {
    right: 65px;
    width: 40px;
    height: 40px;
    animation: 5s about-c2-keys infinite linear alternate;
  }

  @keyframes about-c2-keys {
    from {
      bottom: 220px;
      right: 65px;
    }

    to {
      bottom: 150px;
      right: 65px;
    }
  }

  @keyframes about-c2-keys-sm {
    from {
      bottom: 320px;
      right: 40px;
    }
    to {
      bottom: 270px;
      right: 40px;
    }
  }
`

const AboutSvg = () => (
  <>
    <SvgTriangle css={t2} />
    <SvgCircle css={c1} />
    <SvgCircle css={c3} />
    <SvgTriangle css={t4} />
    <SvgCircle css={c2} />
    <SvgCircle css={c5} />
  </>
)

export default AboutSvg
