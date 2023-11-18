import { Box, Select, Text } from '@chakra-ui/react'
import { TENSES } from '../constants/examples'
import { CardGrammar } from './CardGrammar'
import { useStructure } from '../hooks/useStructure'

export function SelectStructure() {
  const { structure, handleSelect } = useStructure()
  return (
    <Box>
      <Text
        opacity={0.7}
        mb='0.2rem'>
        Select the tense to examine its structure.
      </Text>
      <Select
        // variant='flushed'
        border
        m='1rem 0'
        onChange={handleSelect}
        value={structure}>
        {TENSES.map(tense => (
          <option
            key={tense.id}
            value={tense.structure}>
            {tense.tense}
          </option>
        ))}
      </Select>
      <CardGrammar>{structure}</CardGrammar>
    </Box>
  )
}
