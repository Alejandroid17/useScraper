import React from "react"
import PropertyBadge from "./PropertyBadge"

const PropertyTable = ({ args }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Argument
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Value
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {Object.entries(args).map(([key, value]) => (
          <tr key={key}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <PropertyBadge label={key} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <PropertyBadge label={value} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PropertyTable
