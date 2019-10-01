import React from "react"

const SvgTriangle = ({ className }) => (
  <svg
    width={140}
    height={140}
    viewBox="0 0 127 127"
    role="img"
    className={className}
  >
    <path
      fillRule="evenodd"
      transform="translate(0 -1)"
      d="M63.5 1L127 128 0 128z"
    />
  </svg>
)

export default SvgTriangle
