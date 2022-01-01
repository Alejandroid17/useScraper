import React from "react"
import DataTable from "./DataTable"
import PropertyBadge from "./PropertyBadge"
import ValueBadge from "./ValueBadge"

const StateTable = ({ isLoading, data, error, args }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            State
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
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <PropertyBadge label={"isLoading"} />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <ValueBadge value={isLoading.toString()} />
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <PropertyBadge label={"error"} />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <ValueBadge value={String(error)} />
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <PropertyBadge label={"data"} />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <DataTable data={data} config={args.config} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default StateTable
