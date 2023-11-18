import { useState } from 'react'

export function useStructure() {
  const [structure, setStructure] = useState('Object + verb to be + past participle + (OPTIONAL) preposition by + subject')
  const handleSelect = e => {
    setStructure(e.target.value)
  }

  return { structure, handleSelect }
}
