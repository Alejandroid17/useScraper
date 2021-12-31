import React from "react"

const PropertyBadge = ({ label }) => {
  return label ? (
    <code className="bg-slate-100 py-1 px-2 text-sm rounded leading-none flex items-center text-blue-500">
      {label}
    </code>
  ) : null
}

export default PropertyBadge
