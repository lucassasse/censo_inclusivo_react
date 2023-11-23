import { useState } from 'react';
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
  const [etapaAtual, setEtapaAtual] = useState(1);

  const handleProximo = () => {
    if (etapaAtual < 3) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  return (
    <Center>
      <Tabs isFitted variant="enclosed" className={style.divMain}>
        <TabList mb="2em">
          <Tab className={style.navBar} isDisabled={etapaAtual !== 1}>
            Primeira Etapa
          </Tab>
          <Tab className={style.navBar} isDisabled={etapaAtual !== 2}>
            Segunda Etapa
          </Tab>
          <Tab className={style.navBar} isDisabled={etapaAtual !== 3}>
            Última Etapa
          </Tab>
        </TabList>

        <TabPanels>
          {etapaAtual == 1 && (
            <TabPanel>
              <CadastroEtapaUm />
            </TabPanel>
          )}
          {etapaAtual == 2 && (
            <TabPanel>
              <CadastroEtapaDois />
            </TabPanel>
          )}
          {etapaAtual == 3 && (
            <TabPanel>
              <CadastroEtapaTres />
            </TabPanel>
          )}
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
