import React from "react"

const ValueTypeBadge = ({ value }) => {
  const valueType =
    typeof value === "object"
      ? Array.isArray(value)
        ? "array"
        : typeof value
      : typeof value

  return (
    <span className="flex items-center px-2 py-1 mx-1 text-sm leading-none text-green-500 rounded bg-slate-100">
      {valueType}
    </span>
  )
}

export default ValueTypeBadge
