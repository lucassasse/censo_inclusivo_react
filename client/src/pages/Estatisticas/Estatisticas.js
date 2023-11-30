import { SideNavBar } from '../../components/SideNavBar/SideNavBar.js';
import { Link as ReactRouterLink, redirect } from 'react-router-dom';
import { useAuthentication } from '../../contexts';
import {
  Box,
  Flex,
  Text,
  Link,
  Center,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

export function Estatisticas() {
  const authentication = useAuthentication();

  const handleLogin = async () => {
    try {
      await authentication.logout();
      redirect('/');
    } catch (error) {
      alert('Algo errado aconteceu.');
    }
  };

  return (
    <Flex>
      <SideNavBar />
      <Flex direction="column" w="100%">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          h="150px"
          borderBottom="1px solid #0969DA"
        >
          <Box p="2" padding="40px" w="20%">
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              Lucas Eduardo Sasse
            </Text>
            <Link h="50px" as={ReactRouterLink} onClick={handleLogin}>
              Sair
            </Link>
          </Box>
          <Spacer />
          <ButtonGroup gap="2" w="80%" padding="40px">
            <Button bg="#0969DA" color="white" fontWeight="bold">
              Relatórios Simples
            </Button>
            <Button
              border="1px solid #0969DA"
              color="#0969DA"
              fontWeight="bold"
              variant="outline"
            >
              Relatórios Completos
            </Button>
          </ButtonGroup>
        </Flex>

        <Center marginTop="250px">
          <h1
            style={{
              color: 'black',
            }}
          >
            VIEW
          </h1>
        </Center>
      </Flex>
    </Flex>
  );
}
