import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/core'

const TrackingStat = ({ cards }) => {
  return (
    <Stat
      px={4}
      py={2}
      backgroundColor="white"
      borderRadius="1.5rem"
      boxShadow="lg"
      overflow="hidden"
      textAlign="center"
      mx={2}
      >
      <StatLabel
        mt={1}
        color="gray.500"
        fontWeight="medium"
        letterSpacing="tighter"
      >
        CURRENTLY TRACKING
      </StatLabel>
      <StatNumber letterSpacing="tight" fontWeight="bold">{ cards }</StatNumber>
      <StatHelpText letterSpacing="tight">SETS</StatHelpText>
    </Stat>
  )
}

export default TrackingStat
