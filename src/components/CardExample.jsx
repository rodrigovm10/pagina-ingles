import { Box, Text } from '@chakra-ui/react'

export function CardExample({ textEn, textEs }) {
  return (
    <Box
      border='2px solid #1E392A'
      bg='rgba(60, 196, 124, 0.1)'
      p='0.5rem 2rem 2rem'
      borderRadius={5}
      scale={0.5}
      // transition='transform 0.5s ease'
      // _hover={{
      //   transform: 'scale(0.9)'
      // }}
      cursor='default'>
      <Text
        opacity={0.9}
        color='#1E392A'
        cursor='inherit'
        fontWeight={700}
        fontSize='1.3rem'>
        {textEn}
      </Text>
      <Text
        color='#1E392A'
        fontSize='0.9rem'
        opacity={0.8}
        fontWeight={500}>
        ({textEs})
      </Text>
    </Box>
  )
}
