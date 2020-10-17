import { useState } from 'react'
import { Box, Heading, Flex } from '@chakra-ui/core'

import Table from '../components/Table'
import CategoryFilter from '../components/CategoryFilter'
import TrackingStat from '../components/TrackingStat'
import getCards from '../utils/cards'

const Home = ({ cards }) => {

  const [selectedCategories, setSelectedCategories] = useState([])

  const other = ["other_sports", "non_sport"]
  const categories = {
    baseball: "⚾",
    basketball: "🏀",
    football: "🏈",
    hockey: "🏒",
    other: "🃏",
    gaming: "🎮",
  }

  const formattedCards = cards
    .map(card => {
      return other.includes(card.category)
        ? { ...card, category: "other" }
        : { ...card }
    })
    .map(card => {
      return {
        ...card,
        name: `${categories[card.category]} ${card.name}`,
        date: new Date(card.release_date)
      }
    })
    .filter(card => card.date >= Date.now())
    .sort((a, b) => a.date - b.date)

  const columns = Object.keys(categories).sort()

  const search = (rows) => {
    return selectedCategories.length === 0
      ? rows
      : rows.filter(row => selectedCategories.includes(row.category))
  }

  const updateFilter = (e) => {
    setSelectedCategories(e)
  }

  return (
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
        >
          Card Release Calendar
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          my={[2, 4]}
        >
          <CategoryFilter
            categories={categories}
            columns={columns}
            onChange={updateFilter} />
          <TrackingStat cards={formattedCards.length}/>
        </Flex>
        <Table
          data={search(formattedCards)}
          categories={selectedCategories}
        />
      </Box>
  )
}

export async function getStaticProps(context) {
  const cards = await getCards()
  return {
    props: {
      cards,
    },
    revalidate: 3600,
  }
}

export default Home
