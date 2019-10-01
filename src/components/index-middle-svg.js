import React from "react"
import { css } from "@emotion/core"
import SvgTriangle from "./svg-triangle"

const t7Folio = css`
  position: absolute;
  top: 1260px;
  left: -80px;
  width: 140px;
  height: 140px;
  fill: #442b5b;
  z-index: 11;

  @media (max-width: 768px) {
    display: none;
  }
`

const t2Folio = css`
  position: absolute;
  z-index: 10;
  width: 140px;
  height: 140px;
  fill: #f56682;
  transform: rotate(35deg);
  animation: t2-keys 6s infinite alternate linear;

  @media (max-width: 768px) {
    display: none;
  }

  @keyframes t2-keys {
    from {
      top: 1310px;
      left: -80px;
    }
    to {
      top: 1310px;
      left: -140px;
    }
  }
`

const IndexMiddleSvg = () => (
  <>
    <SvgTriangle css={t7Folio} />
    <SvgTriangle css={t2Folio} />
  </>
)

export default IndexMiddleSvg
