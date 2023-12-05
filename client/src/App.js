import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Home } from './pages/Home/Home';
import { Estatisticas } from './pages/Estatisticas/Estatisticas';
import { RecuperarSenha } from './pages/RecuperarSenha/RecuperarSenha';
import { Graficos } from './pages/Graficos/Graficos';
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
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/recuperarsenha" element={<RecuperarSenha />} />
            </Route>

            <Route element={<ProtectedRoute routeToRedirect="/" />}>
              <Route path="/home" element={<Home />} />
              <Route path="/estatisticas" element={<Estatisticas />} />
              <Route path="/graficos" element={<Graficos />} />
            </Route>

            <Route path="*" element={<p>Página não encontrada!</p>} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </ChakraProvider>
  );
}

export default App;
