import { Box, Card, CardBody, Heading } from '@chakra-ui/react'
import { TableExamples } from './TableExamples'
import { CardHeader } from './CardHeader'
import { Exercices } from './Exercises'
import { Uses } from './Uses'
import { GrammaticalRules } from './GrammaticalRules'
import { Examples } from './Examples'

export function Principal() {
  return (
    <Box m='2rem 20vw 0'>
      <Heading
        as='h1'
        m='2rem'
        fontFamily={` 'Dosis', 'Ubuntu'`}>
        The Passive Voice
      </Heading>
      <Card
        boxShadow='dark-lg'
        borderRadius={10}
        p='2rem'>
        <CardHeader />
        <CardBody>
          <Examples />
          <GrammaticalRules />
          <TableExamples />
          <Uses />
          <Exercices />
        </CardBody>
      </Card>
    </Box>
  )
}
