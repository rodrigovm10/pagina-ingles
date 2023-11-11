import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

export function Uses(){

  return (
    <Box>
      <Heading
        mt='2rem'
        as='h3'
        fontFamily={` 'Dosis', 'Ubuntu'`}
        fontSize='2rem'
        color='#1E392A'>
        Uses
      </Heading>
      <OrderedList>
        <ListItem opacity={0.7}>{"We use the passive voice when we don't know who performed the action."}</ListItem>
        <ListItem opacity={0.7}>{"We use the passive voice when we want to give more importance to what happened than to who performed the action, or when we don't want to specify who performed the action."} </ListItem>
      </OrderedList>
    </Box>
  )
}