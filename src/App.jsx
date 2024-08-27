import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MainLayout from './layout/MainLayout';

function App() {

  return (
    <ChakraProvider>
      {/*<NavBar/>*/}
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos a mi mundo"/>
      </MainLayout>        
    </ChakraProvider>
  );
}

export default App
