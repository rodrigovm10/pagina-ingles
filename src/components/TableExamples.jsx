import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Box, Text } from '@chakra-ui/react'
import { TITLES, EXAMPLES } from '../constants/examples'

export function TableExamples() {
  return (
    <Box>
      <Text
        fontWeight={700}
        fontSize='1.1rem'>
        Examples:
      </Text>
      <TableContainer
        border='2px solid #1E392A'
        borderRadius={10}>
        <Table
          variant='striped'
          size='sm'
          colorScheme='green'>
          <TableCaption color='#1E392A'>Passive voice examples</TableCaption>
          <Thead>
            <Tr>
              {TITLES.map((title, i) => (
                <Th
                  key={i}
                  fontFamily={` 'Dosis', 'Ubuntu'`}
                  color='#1E392A'>
                  {title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {EXAMPLES.map(example => (
              <Tr key={example.id}>
                <Td
                  fontFamily={` 'Dosis', 'Ubuntu'`}
                  fontWeight='700'>
                  {example.tense}
                </Td>
                <Td
                  fontFamily={` 'Dosis', 'Ubuntu'`}
                  fontWeight='700'>
                  {example.activeVoice}
                </Td>
                <Td
                  fontFamily={` 'Dosis', 'Ubuntu'`}
                  fontWeight='700'>
                  {example.passiveVoice}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
