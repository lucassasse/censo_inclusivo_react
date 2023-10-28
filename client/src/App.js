import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
	ChakraProvider,
	theme,
} from '@chakra-ui/react';

import { LoginForm } from './pages/LoginForm/LoginForm';
import { SideBarModelo } from './pages/SideBar/SideBarModelo';
import { Home } from './pages/Home/Home';
import { RecuperarSenha } from './pages/RecuperarSenha/RecuperarSenha';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/cadastro" element={<SideBarModelo />} />
					<Route path="/home" element={<Home />} />
					<Route path="/recuperarsenha" element={<RecuperarSenha />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
