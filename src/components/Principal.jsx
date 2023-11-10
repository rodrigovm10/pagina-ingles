import { Box, Card, CardBody, Text, Heading } from '@chakra-ui/react'
import { CardExample } from './CardExample'
import { CardGrammar } from './CardGrammar'
import { TableExamples } from './TableExamples'
import { CardHeader } from './CardHeader'

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
          <Text
            fontWeight={700}
            fontSize='1.1rem'>
            Examples:
          </Text>
          <Text mb='0.7rem'>Active voice</Text>
          <CardExample
            textEn='The chef cooked a delicious meal.'
            textEs='El chef cocinó una deliciosa comida.'
          />
          <Text my='0.7rem'>Passive voice</Text>
          <CardExample
            textEn='A delicious meal was cooked by the chef.'
            textEs='Una deliciosa comida fue cocinada por el chef.'
          />
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
          <CardGrammar>Object + verb to be + past participle + preposition by + subject</CardGrammar>
          <Text
            fontWeight={700}
            fontSize='1.1rem'>
            Examples:
          </Text>
          <TableExamples />
        </CardBody>
      </Card>
    </Box>
  )
}
