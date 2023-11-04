import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { LoginForm } from './pages/LoginForm/LoginForm';
import { SideBarModelo } from './pages/SideBar/SideBarModelo';
import { Home } from './pages/Home/Home';
import { RecuperarSenha } from './pages/RecuperarSenha/RecuperarSenha';
import { PublicRoute, ProtectedRoute } from './components/Routes';
import { AuthenticationProvider } from './contexts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthenticationProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute routeToRedirect="/home" />}>
              <Route path="/" element={<LoginForm />} />
              <Route path="/cadastro" element={<SideBarModelo />} />
              <Route path="/recuperarsenha" element={<RecuperarSenha />} />
            </Route>

            <Route element={<ProtectedRoute routeToRedirect="/" />}>
              <Route path="/home" element={<Home />} />
            </Route>

            <Route path="*" element={<p>Página não encontrada!</p>} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </ChakraProvider>
  );
}

export default App;
