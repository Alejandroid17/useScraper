import React from "react"
import PropertyBadge from "./PropertyBadge"
import { Table, Th, Td, Tr, Tbody, Thead } from "./Table"

const PropertyTable = ({ args }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Argument</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(args).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <PropertyBadge label={key} />
            </Td>
            <Td>
              <PropertyBadge label={value} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default PropertyTable
