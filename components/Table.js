import { useTable } from 'react-table'
import { useMemo } from 'react'
import { Box, Text } from '@chakra-ui/core'

import styles from '../styles/Table.module.css'

const Table = (props) => {

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <Text
            textAlign="left"
            px={6}
            py={4}
            color="gray.500"
            fontWeight="medium"
            letterSpacing="tighter"
          >
            SET NAME
          </Text>
        ),
        accessor: "name",
        Cell: row => <Text letterSpacing="tight">{row.value}</Text>
      },
      {
        Header: () => (
          <Text
            px={6}
            py={4}
            color="gray.500"
            fontWeight="medium"
            letterSpacing="tighter"
            textAlign="center"
          >
            RELEASE DATE
          </Text>
        ),
        accessor: "release_date",
        Cell: row => <Text textAlign="center" letterSpacing="tight">{row.value}</Text>
      },
    ],
    []
  )

  const data = useMemo(
    () => props.data,
    [props.categories]
  )

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="1.5rem"
      backgroundColor="white"
      boxShadow="lg"
      overflow="hidden"
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className={styles.tableHead} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr className={styles.row} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className={styles.cell} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
              })}
              </tr>
            )
        })}
        </tbody>
      </table>
    </Box>
  )

}

export default Table
