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
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
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

        <Center margin="40px" bg="#D9D9D9" padding="150px" borderRadius="2px">
          <Flex mt="5vh" flexDirection="column" w="20vw">
            <FormControl>
              <FormLabel>Selecione a Deficiência</FormLabel>
              <Select bg="white">
                <option value="dfault" selected disabled>
                  Deficiência...
                </option>
                <option value="0">Física</option>
                <option value="1">Visual</option>
                <option value="2">Auditiva</option>
                <option value="3">Intelectual</option>
                <option value="4">Psicossocial</option>
              </Select>
            </FormControl>

            <FormControl mt="3vh">
              <FormLabel>Selecione o Bairro</FormLabel>
              <Select bg="white">
                <option value="default" select disabled>
                  Bairro...
                </option>
                <option value="0">Água Verde</option>
                <option value="1">Águas Claras</option>
                <option value="2">Amizade</option>
                <option value="3">Barra do Rio Cerro</option>
                <option value="4">Barra do Rio Molha</option>
                <option value="5">Boa Vista</option>
                <option value="6">Braço Ribeirão Cavalo</option>
                <option value="7">Centenário</option>
                <option value="8">Centro</option>
                <option value="9">Chico de Paulo</option>
                <option value="10">Czerniewicz</option>
                <option value="11">Estrada Nova</option>
                <option value="12">Ilha da Figueira</option>
                <option value="13">Jaraguá 84</option>
                <option value="14">Jaraguá 99</option>
                <option value="15">Jaraguá Esquerdo</option>
                <option value="16">João Pessoa</option>
                <option value="17">Nereu Ramos</option>
                <option value="18">Nova Brasília</option>
                <option value="19">Parque Malwee</option>
                <option value="20">Rau</option>
                <option value="21">Ribeirão Cavalo</option>
                <option value="22">Rio Cerro I</option>
                <option value="23">Rio Cerro II</option>
                <option value="24">Rio da Luz</option>
                <option value="25">Rio Molha</option>
                <option value="26">Santa Luzia</option>
                <option value="27">Santo Antônio</option>
                <option value="28">São Luís</option>
                <option value="29">Tifa Martins</option>
                <option value="30">Tifa Monos</option>
                <option value="31">Três Rios do Norte</option>
                <option value="32">Três Rios do Sul</option>
                <option value="33">Vieira</option>
                <option value="34">Vila Baependi</option>
                <option value="35">Vila Lalau</option>
                <option value="36">Vila Lenzi</option>
                <option value="37">Vila Nova</option>
              </Select>
            </FormControl>

            <Center mt="5vh">
              <ButtonGroup spacing="2">
                <Button
                  mb="5vh"
                  variant="solid"
                  bg="#0969DA"
                  color="white"
                  size="lg"
                  _hover={{ bg: '#0754AD' }}
                >
                  BUSCAR
                </Button>
              </ButtonGroup>
            </Center>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
}
