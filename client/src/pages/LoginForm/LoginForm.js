import React, { useState } from 'react';
import {
	VStack,
	FormControl,
	Input,
	FormLabel,
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react';
import AuthService from '../../services/AuthService';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleEmailChange = event => {
		setEmail(event.target.value);
		setError(false);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
		setError(false);
	};

	const handleLogin = async () => {
		try {
			const response = await AuthService.login(email, password);
			sessionStorage.setItem('token', response.token);
			window.location.href = '/home';
		} catch (error) {
			setError(true);
		}
	};

	return (
		<VStack spacing={3} width={300} margin="auto">
			<FormControl id="email">
				<FormLabel>E-mail</FormLabel>
				<Input
					type="email"
					placeholder="Informe o email"
					onChange={handleEmailChange}
				></Input>
			</FormControl>

			<FormControl id="password">
				<FormLabel>Senha</FormLabel>
				<Input
					placeholder="Informe a senha"
					type="password"
					onChange={handlePasswordChange}
				></Input>
			</FormControl>

			<Button colorScheme="blue" onClick={handleLogin}>
				Login
			</Button>
			{error && (
				<Alert status="error">
					<AlertIcon />
					<AlertTitle>ERRO!</AlertTitle>
					<AlertDescription>Erro ao tentar logar.</AlertDescription>
				</Alert>
			)}
		</VStack>
	);
}
