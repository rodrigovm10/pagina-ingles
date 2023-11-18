import { useState } from 'react'
import Swal from 'sweetalert2'
import { EXERCISES } from '../constants/examples'

export function useExercise() {
  const [responses, setResponses] = useState([
    { id: 1, response: 'passive' },
    { id: 2, response: 'passive' },
    { id: 3, response: 'active' },
    { id: 4, response: 'passive' },
    { id: 5, response: 'active' }
  ])

  const handleSelectResponses = (exerciseId, selectedResponse) => {
    setResponses(prevResponses => prevResponses.map(response => (response.id === exerciseId ? { ...response, response: selectedResponse } : response)))
  }

  const handleSubmit = () => {
    const answers = responses.map((response, i) => {
      if (response.id === EXERCISES[i].id) {
        if (response.response === EXERCISES[i].response) {
          return true
        } else return false
      }
    })
    callAlert(answers)
  }
  const exercisesResults = answers => {
    const answersCorrect = new Map()
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]) answersCorrect.set(i, answers[i])
    }
    return Array.from(answersCorrect)
  }

  const callAlert = answers => {
    const answersCorrect = exercisesResults(answers)
    const messages = ['No words...', 'Very bad :(', 'Bad :c', 'Well :|', 'Very well c:', 'Exccelent :)']
    Swal.fire({
      title: messages[answersCorrect.length],
      text: `${answersCorrect.length} / 5`,
      imageAlt: 'Custom image'
    })
  }

  return { handleSelectResponses, handleSubmit, responses }
}
