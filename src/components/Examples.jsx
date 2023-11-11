import { Box, Text } from '@chakra-ui/react'
import { CardExample } from './CardExample'

export function Examples() {
  return (
    <Box>
      <Text
        fontWeight={700}
        fontSize='1.1rem'>
        Examples:
      </Text>
      <Text mb='0.7rem'>Active voice</Text>
      <CardExample
        textEn='Someone killed a civilian.'
        textEs='Alguien mató a un civil.'
      />
      <Text my='0.7rem'>Passive voice</Text>
      <CardExample
        textEn='A civilian was killed.'
        textEs='Un civil fue asesinado.'
      />
    </Box>
  )
}
