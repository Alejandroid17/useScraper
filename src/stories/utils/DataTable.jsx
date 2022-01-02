import React from "react"
import DefaultConfig from "../../config"
import PropertyBadge from "./PropertyBadge"
import ValueBadge from "./ValueBadge"
import ValueTypeBadge from "./ValueTypeBadge"
import { Table, Th, Td, Tr, Tbody, Thead } from "./Table"

const DataTable = ({ data, config = DefaultConfig }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Key</Th>
          <Th>Query</Th>
          <Th>Attr</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(data).map(([key, value]) => (
          <Tr key={key}>
            <Td className="px-6 py-4 whitespace-nowrap">
              <PropertyBadge label={key} />
            </Td>
            <Td className="px-6 py-4 whitespace-nowrap">
              <PropertyBadge label={config.selectors[key]["query"]} />
            </Td>
            <Td className="px-6 py-4 whitespace-nowrap">
              <PropertyBadge label={config.selectors[key]["attr"]} />
            </Td>
            <Td className="px-6 py-4 whitespace-nowrap">
              <ValueTypeBadge value={value} />
              {Array.isArray(value) ? (
                value.map((value, index) => (
                  <ValueBadge key={index} value={value} />
                ))
              ) : (
                <ValueBadge value={value} />
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DataTable
