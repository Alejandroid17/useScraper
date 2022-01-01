import React from "react"

const PropertyBadge = ({ label }) => {
  label = typeof label === "object" ? JSON.stringify(label) : label

  return label ? (
    <code className="flex items-center px-2 py-1 text-sm leading-none text-blue-500 rounded bg-slate-100">
      {label}
    </code>
  ) : null
}

export default PropertyBadge
