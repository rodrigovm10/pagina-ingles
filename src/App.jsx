import { Header } from './components/Header'
import { Principal } from './components/Principal'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box fontFamily={`'Dosis', 'JetBrains Mono', 'Ubuntu'`}>
      <Header />
      <Principal />
    </Box>
  )
}

export default App
