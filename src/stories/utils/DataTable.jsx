import React from "react"
import DefaultConfig from "../../config"
import PropertyBadge from "./PropertyBadge"
import ValueBadge from "./ValueBadge"
import ValueTypeBadge from "./ValueTypeBadge"

const DataTable = ({ data, config = DefaultConfig }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Tag
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Query
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Attribute
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
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <PropertyBadge label={key} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <PropertyBadge label={config.selectors[key]["query"]} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <PropertyBadge label={config.selectors[key]["attr"]} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <ValueTypeBadge value={value} />
                {Array.isArray(value) ? (
                  value.map((value, index) => (
                    <ValueBadge key={index} value={value} />
                  ))
                ) : (
                  <ValueBadge value={value} />
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
