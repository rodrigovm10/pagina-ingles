import { Box, Select, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { TENSES } from '../constants/examples'
import { CardGrammar } from './CardGrammar'

export function SelectStructure() {
  const [structure, setStructure] = useState('Object + verb to be + past participle + (OPTIONAL) preposition by + subject')
  const handleSelect = e => {
    setStructure(e.target.value)
  }

  return (
    <Box>
      <Text
        opacity={0.7}
        mb='0.2rem'>
        Select the tense to examine its structure.
      </Text>
      <Select
        variant='flushed'
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
