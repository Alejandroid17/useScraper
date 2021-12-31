import React from "react"

const LeftAccentBorderAlert = ({ title, children }) => {
  return (
    <div
      className="p-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{children}</p>
    </div>
  )
}

export default LeftAccentBorderAlert
