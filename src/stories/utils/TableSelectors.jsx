import React from "react"
import PropertyBadge from "./PropertyBadge"
import ValueBadge from "./ValueBadge"
import { Thead, Tbody, Tr, Th, Td, Table } from "./Table"

const TableSelectors = ({ selectors }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Key</Th>
          <Th>Query</Th>
          <Th>Default</Th>
          <Th>Attr</Th>
          <Th>All</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(selectors).map(([key, value]) => (
          <Tr key={key}>
            <Td>
              <PropertyBadge label={key} />
            </Td>
            <Td>
              <PropertyBadge label={value.query} />
            </Td>
            <Td>{value.default && <ValueBadge value={value.default} />}</Td>
            <Td>
              <PropertyBadge label={value.attr} />
            </Td>
            <Td>{value.all && <PropertyBadge label={String(value.all)} />}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TableSelectors
