import React from "react"

const Th = ({ children }) => (
  <th
    scope="col"
    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
  >
    {children}
  </th>
)

export default Th
