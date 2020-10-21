import { Box, Text, CheckboxGroup, Checkbox } from '@chakra-ui/core'

const CategoryFilter = (props) => {

  const categories = {
    baseball: "⚾",
    basketball: "🏀",
    football: "🏈",
    hockey: "🏒",
    other: "🃏",
    gaming: "🎮",
  }

  const updateFilter = (e) => {
    props.onChange(e)
  }

  return (
    <Box
      px={6}
      py={4}
      display="flex"
      flexDirection="column"
      backgroundColor="white"
      borderRadius="1.5rem"
      boxShadow="lg"
      overflow="hidden"
      justifyContent="center"
      mx={2}
      my={[4, 4, 0]}
    >
      <Text
        mb={1}
        textAlign="left"
        color="gray.500"
        fontWeight="medium"
        letterSpacing="tighter"
      >
        FILTER BY CATEGORY:
      </Text>
      <CheckboxGroup
        isInline
        spacing={[4, 4, 6]}
        variantColor="teal"
        defaultValue={[]}
        value={props.selectedCategories}
        onChange={updateFilter}
      >
        {props.columns && props.columns.map(column => (
          <Checkbox
            key={column}
            value={column}
          >
            {categories[column]}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Box>

  )
}

export default CategoryFilter
