import React from "react"

const ValueBadge = ({ value, className = "text-white bg-slate-400" }) => {
  value = typeof value === "object" ? JSON.stringify(value) : value

  return (
    <span
      className={`flex items-center px-2 py-1 mx-1 text-sm leading-none rounded ${className}`}
    >
      {String(value)}
    </span>
  )
}

export default ValueBadge
