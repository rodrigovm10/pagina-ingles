import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    miEsquema: {
      verdesito: 'rgba(60, 196, 124, 0.1)'
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
