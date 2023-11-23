import { Flex, Text } from "@chakra-ui/react";

export function CardGrammar({ children }) {
  return (
    <Flex
      p="2rem"
      mb="1rem"
      border="2px solid #1E392A"
      bg="rgba(60, 196, 124, 0.1)"
      borderRadius={5}
      scale={0.5}
      alignItems="center"
      borderColor="1px solid red"
      // transition='transform 0.5s ease'
      // _hover={{
      //   transform: 'scale(0.9)'
      // }}
      cursor="default"
    >
      <Text
        cursor="inherit"
        opacity={0.9}
        color="#1E392A"
        fontWeight={700}
        fontSize="1.2rem"
      >
        {children}
      </Text>
    </Flex>
  );
}
