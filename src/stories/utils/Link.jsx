import React from "react"
import { linkTo } from "@storybook/addon-links"

const Link = ({ label, kind, className }) => {
  return (
    <button onClick={linkTo(kind)} className={className}>
      {label}
    </button>
  )
}

export default Link
