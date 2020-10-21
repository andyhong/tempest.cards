import { useTable } from 'react-table'
import { useMemo } from 'react'
import { Box, Text, Flex } from '@chakra-ui/core'

import styles from '../styles/Table.module.css'

const Table = (props) => {

  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Cell: row => <Text letterSpacing="tight">{row.value}</Text>
      },
      {
        accessor: "release_date",
        Cell: row => <Text textAlign="center" letterSpacing="tight">{row.value}</Text>
      },
    ],
    []
  )

  const data = useMemo(
    () => props.data,
    [props.categories, props.query]
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
      <Flex
        align="center"
        letterSpacing="tighter"
        fontSize="sm"
        fontWeight="medium"
        color="gray.500"
        backgroundColor="gray.100"
      >
        <Text flexBasis="75%" px={6} py={4}>
          SET NAME
        </Text>
        <Text
          flex="1"
          textAlign="right"
          px={6}
          py={4}
        >
          RELEASE DATE
        </Text>
      </Flex>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr style={{ display: "none" }} {...headerGroup.getHeaderGroupProps()}>
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
