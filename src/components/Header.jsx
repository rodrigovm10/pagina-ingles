import { Box, Flex, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Box
      bg='#1E392A'
      p={8}
      borderBottomLeftRadius={30}
      borderBottomRightRadius={30}>
      <Flex>
        <Text>Hola</Text>
      </Flex>
    </Box>
  )
}
