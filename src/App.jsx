import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Principal } from './components/Principal'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box fontFamily={`'Dosis', 'JetBrains Mono', 'Ubuntu'`}>
      <Header />
      <Principal />
      <Footer />
    </Box>
  )
}

export default App
