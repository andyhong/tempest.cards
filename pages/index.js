import { useState } from 'react'
import { Box, Heading, Flex, Link } from '@chakra-ui/core'

import Table from '../components/Table'
import CategoryFilter from '../components/CategoryFilter'
import TrackingStat from '../components/TrackingStat'
import getCards from '../utils/cards'
import SearchBar from '../components/SearchBar'

const Home = ({ data, columns }) => {

  const [selectedCategories, setSelectedCategories] = useState([])
  const [ cards, setCards ] = useState(data)
  const [ query, setQuery ] = useState("")

  const search = (rows) => {
    return selectedCategories.length === 0
      ? rows
      : rows.filter(row => selectedCategories.includes(row.category))
  }

  const filter = (rows) => {
    return query.length === 0
      ? rows
      : rows.filter((row) => row.name.toLowerCase().includes(query.toLowerCase()))
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setQuery("")
  }

  const updateFilter = (e) => {
    setSelectedCategories(e)
  }

  const updateQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Box
        maxWidth="960px"
        px={4}
        py={12}
        display="flex"
        flexDirection="column"
        mx="auto"
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          fontWeight="900"
          letterSpacing="tighter"
          my={4}
        >
          Card Release Calendar
        </Heading>
        <SearchBar
          query={query}
          onChange={updateQuery}
          onClick={resetFilters} />
        <Flex
          direction={["column", "column", "row"]}
          my={[0, 0, 4]}
          w="full"
        >
          <CategoryFilter
            selectedCategories={selectedCategories}
            columns={columns}
            onChange={updateFilter} />
          <TrackingStat cards={cards.length}/>
        </Flex>
        <Table
          data={search(filter(cards))}
          categories={selectedCategories}
          query={query}
        />
      </Box>
      <Flex
        as="footer"
        borderTop="1px solid"
        borderTopColor="gray.200"
        height="6rem"
        direction="column"
        justify="center"
        textAlign="center"
        fontWeight="medium"
      >
        <Link
          href="https://github.com/andyhong"
          isExternal
        >
          —ah
        </Link>
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const { cards, columns } = await getCards()
  return {
    props: {
      data: cards,
      columns
    },
    revalidate: 3600,
  }
}

export default Home
