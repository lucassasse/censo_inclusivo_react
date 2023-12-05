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
import { Chart } from 'react-google-charts';

export function Graficos() {
  const authentication = useAuthentication();

  const handleLogin = async () => {
    try {
      await authentication.logout();
      redirect('/');
    } catch (error) {
      alert('Algo errado aconteceu.');
    }
  };

  const data = [
    ['Deficiência', 'Quantidade'],
    ['Física', 11],
    ['Visual', 2],
    ['Auditiva', 2],
    ['Intelectual', 3],
    ['Psicossocial', 5],
  ];

  const options = {
    title: 'Deficiência por Bairro',
    pieHole: 0.3,
    is3D: false,
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

        <Center margin="40px" h="73vh" borderRadius="2px">
          <Flex mt="5vh" flexDirection="column" w="20vw">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
}
