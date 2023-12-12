import { useState, useEffect } from 'react';
import {
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import style from './Cadastro.module.css';
import CadastroEtapaUm from './CadastroEtapaUm';
import CadastroEtapaDois from './CadastroEtapaDois';
import CadastroEtapaTres from './CadastroEtapaTres';

export function Cadastro() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  const [dadosFormulario, setDadosFormulario] = useState({
    name: 'Lucas',
    social_name: '',
    cpf: '123.456.789-02',
    gender: 'm',
    birthdate: '1997-12-18',
    cep: '89253-555',
    number: '155',
    complement: '',
    email: 'lucas@gmail.com',
    password: '1234567890',
    // Adicionar outros campos conforme necessário
  });

  const handleProximo = async () => {
    //alterar para == 3
    if (etapaAtual == 1 && camposPreenchidos) {
      try {
        const response = await fetch('http://localhost:3500/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dadosFormulario),
        });

        if (response.ok) {
          alert('Usuário Cadastrado com Sucesso!');
          console.log('User registered successfully!');
        } else {
          alert('Failed to register user. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      if (etapaAtual < 2 && camposPreenchidos) {
        setEtapaAtual(etapaAtual + 1);
        console.log(dadosFormulario);
      } else {
        alert(
          'Você deve preencher todos os campos obrigatórios\n\nCampos obrigatórios possume um arterísco ao lado ( * )'
        );
      }
    }
  };

  useEffect(() => {}, [etapaAtual]);

  return (
    <Center>
      <Tabs
        isFitted
        variant="enclosed"
        className={style.divMain}
        index={etapaAtual}
      >
        <TabList mb="2em">
          <Tab className={style.navBar}>Primeira Etapa</Tab>
          <Tab className={style.navBar}>Segunda Etapa</Tab>
          <Tab className={style.navBar}>Última Etapa</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CadastroEtapaUm
              onFormComplete={setCamposPreenchidos}
              onInputChange={(campo, valor) =>
                setDadosFormulario(prevDados => ({
                  ...prevDados,
                  [campo]: valor,
                }))
              }
            />
          </TabPanel>

          <TabPanel>
            <CadastroEtapaDois />
          </TabPanel>

          <TabPanel>
            <CadastroEtapaTres />
          </TabPanel>
        </TabPanels>

        <Center mt="5vh">
          <ButtonGroup spacing="2">
            <Button
              onClick={handleProximo}
              variant="solid"
              bg="#0969DA"
              color="white"
              size="lg"
              _hover={{ bg: '#0754AD' }}
            >
              Continuar
            </Button>
          </ButtonGroup>
        </Center>
      </Tabs>
    </Center>
  );
}
