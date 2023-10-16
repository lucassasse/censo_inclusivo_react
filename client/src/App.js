import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { LoginForm } from './pages/LoginForm/LoginForm';
import { SideBarModelo } from './pages/SideBar/SideBarModelo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<SideBarModelo />} />
          <Route path="*" element={<h1>Página Inexistente!</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
