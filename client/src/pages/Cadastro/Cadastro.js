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

  const handleProximo = () => {
    if (etapaAtual < 2 && camposPreenchidos) {
      setEtapaAtual(etapaAtual + 1);
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
            <CadastroEtapaUm onFormComplete={setCamposPreenchidos} />
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
