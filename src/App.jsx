import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MainLayout from './layout/MainLayout';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  // useEffect = hook que se ejecuta después de que el componente se renderiza. Sirve para controlar efectos secundarios en el ciclo de vida del componente
  // Se va a ejecutar SIEMPRE aunque sea una vez
  // 1 - useEffect Feo - useEffect sin control
  
  // useEffect(() => {
  //  console.log("Se renderizó el componente App");
  // });

  // 2 - useEffect ideal - useEffect controlado - useEffect con dependencias vacías

  useEffect( ()=> {
    console.log("Me rendericé por primera vez - useEffect controlado con dependencias vacías");
  }, []);

  // 3 - useEffect con dependencias - useEffect controlado
  useEffect(() => {
    console.log("Me rendericé por primera vez - useEffect controlado con dependencias")
  },[state]);

  return (
    <ChakraProvider>
      {/*<NavBar/>*/}
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos a mi mundo"/>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          {" "}
          Prueba de useEffect
        </button>
      </MainLayout>        
    </ChakraProvider>
  );
}

export default App
