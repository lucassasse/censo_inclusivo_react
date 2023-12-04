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
import { Link as ReactRouterLink } from 'react-router-dom';
import { useAuthentication } from '../../contexts';
import { useNavigate } from 'react-router-dom';
import imgLogo from './logo.png';

export function LoginForm() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const authentication = useAuthentication();
  const navigate = useNavigate();

  const handleCpfChange = () => {
    setError(false);
  };

  const handlePasswordChange = event => {
    setError(false);
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      await authentication.login(cpf, password);
      navigate.push('/home');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Flex>
      <Flex flexDirection="column" width="50vw" height="100vh">
        <Center>
          <Heading size="xl" color="#0969DA">
            CEI - CENSO INCLUSIVO
          </Heading>
        </Center>

        <Center mt="3vh">
          <Image src={imgLogo} alt="Logo da aplicação Censo Inclusivo" />
        </Center>

        <Center mt="5vh">
          <Text fontSize="2xl" w="30vw" textAlign="center">
            Cadastre-se e ajude a construir uma Jaraguá do Sul mais inclusiva!
          </Text>
        </Center>

        <Center mt="5vh">
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              bg="#0969DA"
              color="white"
              size="lg"
              _hover={{ bg: '#0754AD' }}
              as={ReactRouterLink}
              to="/cadastro"
            >
              CADASTRAR
            </Button>
          </ButtonGroup>
        </Center>
      </Flex>

      <Center width="50vw" height="100vh">
        <Flex
          flexDirection="column"
          bg="#D9D9D9"
          borderRadius="5px"
          padding="140px 40px"
        >
          <Center>
            <Heading size="xl" color="#0969DA">
              ACESSE SUA CONTA
            </Heading>
          </Center>
          <Center>
            <Flex mt="5vh" flexDirection="column" w="20vw">
              <FormControl>
                <FormLabel>CPF do usuário</FormLabel>
                <Input
                  className="chakra-input css-1wty6e9"
                  placeholder="Digite o seu CPF"
                  onChange={e => setCpf(e.target.value)}
                  onKeyUp={handleCpfChange}
                />
              </FormControl>

              <FormControl mt="3vh">
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  bg="white"
                  onChange={e => setPassword(e.target.value)}
                  onKeyUp={handlePasswordChange}
                />
              </FormControl>
            </Flex>
          </Center>

          {error && (
            <Center mt="2vh">
              <Alert status="error" w="20vw">
                <AlertIcon />
                <AlertDescription>CPF ou senha incorretos</AlertDescription>
              </Alert>
            </Center>
          )}

          <Center mt="5vh">
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                bg="#0969DA"
                color="white"
                size="lg"
                _hover={{ bg: '#0754AD' }}
                as={ReactRouterLink}
                onClick={handleLogin}
              >
                ENTRAR
              </Button>
            </ButtonGroup>
          </Center>

          <Center mt="1vh">
            <Text>
              <ChakraLink
                as={ReactRouterLink}
                color="#0969DA"
                to="/recuperarSenha"
                href="#"
              >
                Esqueci minha senha
              </ChakraLink>
            </Text>
          </Center>
        </Flex>
      </Center>
    </Flex>
  );
}
