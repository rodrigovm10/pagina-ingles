import { Box, Heading, Text } from '@chakra-ui/react'
import { SelectStructure } from './SelectStructure'

export function GrammaticalRules() {
  return (
    <Box>
      <Heading
        mt='2rem'
        as='h3'
        fontFamily={` 'Dosis', 'Ubuntu'`}
        fontSize='2rem'
        color='#1E392A'>
        Grammatical Rules
      </Heading>
      <Text
        opacity={0.7}
        mb='0.2rem'>
        The grammatical structure of the passive voice is formed with the verb to be and the past participle of the verb.
      </Text>
      <SelectStructure />
    </Box>
  )
}
