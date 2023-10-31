import React, { useState } from 'react';
import {
	Button,
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	Flex,
	Image,
	ButtonGroup,
	Alert,
	AlertIcon,
	AlertDescription,
	Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import imgLogo from './logo.png';
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
		<Flex >

			<Flex flexDirection='column' width='50vw' height='100vh'>
				<Center mt='15vh'>
					<Heading size='xl' color='#0969DA'>CEI - CENSO INCLUSIVO</Heading>
				</Center>

				<Center mt='3vh'>
					<Image
						src={imgLogo}
						alt='Logo da aplicação Censo Inclusivo'
					/>
				</Center>

				<Center mt='5vh'>
					<Text fontSize='2xl' w='30vw'>
						Cadastre-se e ajude a construir uma Jaraguá do Sul mais inclusiva!
					</Text>
				</Center>

				<Center mt='5vh'>
					<ButtonGroup spacing='2'>
						<Button variant='solid' bg='#0969DA' color='white' size='lg' _hover={{ bg: '#0754AD' }} as={ReactRouterLink} to='/cadastro'>
							CADASTRAR
						</Button>
					</ButtonGroup>
				</Center>
			</Flex>

			<Flex flexDirection='column' bg='#D9D9D9' width='50vw' height='100vh'>
				<Center mt='25vh'>
					<Heading size='xl' color='#0969DA'>ACESSE SUA CONTA</Heading>
				</Center>
				<Center>
					<Flex mt='5vh' flexDirection='column' w='20vw'>
						<FormControl>
							<FormLabel>CPF do usuário</FormLabel>
							<Input type='email' placeholder='000.000.000-00' bg='white' onChange={handleEmailChange} />
						</FormControl>

						<FormControl mt='3vh'>
							<FormLabel>Senha</FormLabel>
							<Input type='email' placeholder='********' bg='white' onChange={handlePasswordChange} />
						</FormControl>
					</Flex>
				</Center>

				{error && (
					<Center mt='2vh' >
						<Alert status="error" w='20vw'>
							<AlertIcon />
							<AlertDescription>
								Email ou senha incorretos
							</AlertDescription>
						</Alert>
					</Center>
				)}

				<Center mt='5vh'>
					<ButtonGroup spacing='2'>
						<Button variant='solid' bg='#0969DA' color='white' size='lg' _hover={{ bg: '#0754AD' }} as={ReactRouterLink} onClick={handleLogin} >
							ENTRAR
						</Button>
					</ButtonGroup>
				</Center>

				<Center mt='1vh'>
					<Text>
						<ChakraLink as={ReactRouterLink} color='#0969DA' to='/recuperarSenha' href='#'>
							Esqueci minha senha
						</ChakraLink>
					</Text>
				</Center>
			</Flex>

		</Flex >
	);
}
