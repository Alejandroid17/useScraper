import React from "react"

const ValueBadge = ({ value }) => {
  return (
    <span className="bg-slate-400 text-white py-1 px-2 mx-1 text-sm rounded leading-none flex items-center">
      {String(value)}
    </span>
  )
}

export default ValueBadge
