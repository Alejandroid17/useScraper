import React from "react"
import DataTable from "./DataTable"
import PropertyBadge from "./PropertyBadge"
import ValueBadge from "./ValueBadge"
import { Table, Th, Td, Tr, Tbody, Thead } from "./Table"

const StateTable = ({ isLoading, data, error, args }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>State</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <PropertyBadge label={"isLoading"} />
          </Td>
          <Td>
            <ValueBadge value={isLoading.toString()} />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <PropertyBadge label={"error"} />
          </Td>
          <Td>
            <ValueBadge value={String(error)} />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <PropertyBadge label={"data"} />
          </Td>
          <Td>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <DataTable data={data} config={args.config} />
              </div>
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default StateTable
