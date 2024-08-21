import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/Navbar/NavBar"

function App() {

  return (
    <ChakraProvider>
      <NavBar/>
    </ChakraProvider>
  );
}

export default App
