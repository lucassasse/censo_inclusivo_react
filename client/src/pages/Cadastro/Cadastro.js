import { useState } from 'react';
import { Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import style from './Cadastro.module.css';
import CadastroEtapaUm from './CadastroEtapaUm'
import CadastroEtapaDois from './CadastroEtapaDois'
import CadastroEtapaTres from './CadastroEtapaTres'

export function Cadastro() {
  const [etapaAtual, setEtapaAtual] = useState(1);

  const handleTabClick = (index) => {
    if (index === etapaAtual) return; // Evita recarregar a guia atual
    setEtapaAtual(index);
  };

  return (
	<Center>
		<Tabs isFitted variant='enclosed' className={style.divMain}>
		<TabList mb='2em'>
			<Tab
			className={style.navBar}
			onClick={() => handleTabClick(1)}
			>
			Primeira Etapa
			</Tab>
			<Tab
			className={style.navBar}
			onClick={() => handleTabClick(2)}
			isDisabled={etapaAtual < 2}
			>
			Segunda Etapa
			</Tab>
			<Tab
			className={style.navBar}
			onClick={() => handleTabClick(3)}
			isDisabled={etapaAtual < 3}
			>
			Última Etapa
			</Tab>
		</TabList>

		<TabPanels>
			{etapaAtual === 1 && (
			<TabPanel>
				<CadastroEtapaUm/>
			</TabPanel>
			)}
			{etapaAtual === 2 && (
			<TabPanel>
				<CadastroEtapaDois/>
			</TabPanel>
			)}
			{etapaAtual === 3 && (
			<TabPanel>
				<CadastroEtapaTres/>
			</TabPanel>
			)}
		</TabPanels>
		</Tabs>
	</Center>
  );
}
