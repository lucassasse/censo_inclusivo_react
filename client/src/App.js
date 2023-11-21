import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { LoginForm } from './pages/LoginForm/LoginForm';
import { SideBarModelo } from './pages/SideBar/SideBarModelo';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { BemVindo } from './pages/BemVindo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<SideBarModelo />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/bemvindo" element={<BemVindo />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
