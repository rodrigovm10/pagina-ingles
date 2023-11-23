import { Link, Box, Text, SimpleGrid } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      bg='#000'
      color='white'
      p='9'
      mt={5}
      // borderTopLeftRadius={30}
      // borderTopRightRadius={30}
    >
      <SimpleGrid
        columns={[2, null, 3]}
        spacing='40px'
        align='center'
        justify='center'>
        <Box height='80px'>
          <Text
            fontSize='1.2rem'
            fontWeight={500}>
            Learn more
          </Text>
          <Text>
            <Link
              href='https://www.ef.com/wwes/recursos-aprender-ingles/gramatica-inglesa/voz-pasiva/'
              target='_blank'
              rel='noopener noreferrer'>
              Passive voice functions
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.ef.com/wwes/recursos-aprender-ingles/gramatica-inglesa/voz-pasiva/'
              target='_blank'
              rel='noopener noreferrer'>
              Passive voice
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/aprender/test-de-nivel'
              target='_blank'
              rel='noopener noreferrer'>
              Test nivel
            </Link>
          </Text>
        </Box>
        <Box height='80px'>
          <Text
            fontSize='1.2rem'
            fontWeight={500}>
            Practice
          </Text>
          <Text>
            <Link
              href='https://www.ego4u.com/en/cram-up/grammar/passive/exercises?06'
              target='_blank'
              rel='noopener noreferrer'>
              Exercises I
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/practicar/ejercicios/the-passive-voice'
              target='_blank'
              rel='noopener noreferrer'>
              Exercises II
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/recursos/juegos'
              target='_blank'
              rel='noopener noreferrer'>
              Exercises III
            </Link>
          </Text>
        </Box>
        <Box height='80px'>
          <Text
            fontSize='1.2rem'
            fontWeight={500}>
            Bibliography
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/aprender/cursos/nivel-avanzado/passive-voice/the-passive-voice'
              target='_blank'
              rel='noopener noreferrer'>
              Curso-inglés
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/recursos/vocabulario'
              target='_blank'
              rel='noopener noreferrer'>
              Vocabulario
            </Link>
          </Text>
          <Text>
            <Link
              href='https://www.curso-ingles.com/aprender/curso-completo'
              target='_blank'
              rel='noopener noreferrer'>
              Curso completo
            </Link>
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
