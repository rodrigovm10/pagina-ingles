import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'
import { titles, examples } from '../constants/examples'

export function TableExamples() {
  return (
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
            {titles.map((title, i) => (
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
          {examples.map(example => (
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
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  )
}
