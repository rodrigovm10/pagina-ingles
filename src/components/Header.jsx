import { Box, Flex, Text, IconButton, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export function Header() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Box
      bg='#1E392A'
      p={8}
      borderBottomLeftRadius={30}
      borderBottomRightRadius={30}>
      <Flex
        justify='space-between'
        align='center'>
        {isLargerThan768 ? (
          <>
            <Text
              fontSize='2rem'
              color='white'>
              Passive voice
            </Text>
          </>
        ) : (
          <IconButton
            icon={<HamburgerIcon />}
            variant='outline'
            colorScheme='white'
          />
        )}
      </Flex>
    </Box>
  )
}
