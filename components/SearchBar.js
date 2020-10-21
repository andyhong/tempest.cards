import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/core'


const SearchBar = (props) => {

  const updateQuery = (e) => {
    props.onChange(e)
  }

  const resetFilters = (e) => {
    props.onClick(e)
  }

  return (
    <Box w="full">
      <Flex
        px={6}
        py={4}
        mx={2}
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        borderRadius="1.5rem"
        boxShadow="lg"
      >
        <FormControl>
          <FormLabel
            htmlFor="search-bar"
            color="gray.500"
            fontWeight="medium"
            letterSpacing="tighter"
          >
            SEARCH BY NAME:
          </FormLabel>
          <Input
            type="text"
            id="search-bar"
            placeholder="pokemon"
            value={props.query}
            onChange={updateQuery} />
        </FormControl>
        <Button
          onClick={resetFilters}
          color="gray.500"
          fontWeight="medium"
          letterSpacing="tighter"
          mx={4}
        >RESET ALL FILTERS</Button>
      </Flex>
    </Box>
  )
}

export default SearchBar
