import { Box, Heading, Text, Flex, Select, Grid, Button } from '@chakra-ui/react'
import { EXERCISES } from '../constants/examples'
import { useExercise } from '../hooks/useExercise'

export function Exercices() {
  const { responses, handleSelectResponses, handleSubmit } = useExercise()
  return (
    <Box>
      <Heading
        mt='2rem'
        as='h3'
        fontFamily={` 'Dosis', 'Ubuntu'`}
        fontSize='2rem'
        color='#1E392A'>
        Exercise
      </Heading>
      <Text
        fontWeight={700}
        fontSize='1.1rem'>
        Identify active voice or passive voice
      </Text>
      <Grid gap='2rem'>
        {EXERCISES.map(exercise => (
          <Flex
            key={exercise.id}
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Text>{exercise.text}</Text>
            </Box>
            <Box>
              <Select
                value={responses.find(response => response.id === exercise.id)?.response}
                onChange={e => handleSelectResponses(exercise.id, e.target.value)}
                flex='1'
                ml='2'>
                <option value='passive'>Passive</option>
                <option value='active'>Active</option>
              </Select>
            </Box>
          </Flex>
        ))}
        <Button
          onClick={handleSubmit}
          bg='#1E392A'
          _hover={{ bg: '#2C4E3F' }}
          color='#fff'>
          Submit
        </Button>
      </Grid>
    </Box>
  )
}
