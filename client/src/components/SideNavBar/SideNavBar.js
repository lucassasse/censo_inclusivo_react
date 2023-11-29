import { React } from 'react';
import { Flex, Link, Square, Center, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink, redirect } from 'react-router-dom';
import { useAuthentication } from '../../contexts';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgLogo from './logo.png';

export function SideNavBar() {
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
    <Square
      w="250px"
      h="100vh"
      style={{
        backgroundColor: '#0969DA',
        fontWeight: 'bold',
      }}
    >
      <Flex color="white" direction="column" h="100vh">
        <Center mt="3vh">
          <Image
            src={imgLogo}
            alt="Logo da aplicação Censo Inclusivo"
            boxSize="150px"
            objectFit="cover"
            style={{ borderRadius: '2%', marginBottom: '100px' }}
          />
        </Center>
        <Link h="50px">Página Principal</Link>
        <Link h="50px">Painel do Usuário</Link>
        <Link h="50px">Estatísticas / Relatórios</Link>
        <Link h="50px">Vagas de Empregos</Link>
        <Link h="50px">Eventos</Link>
        <Link h="50px">Leis e Notícias</Link>
        <Link h="100px">Entre em Contato</Link>
        <Link h="50px" as={ReactRouterLink} onClick={handleLogin}>
          Sair
        </Link>
      </Flex>
    </Square>
  );
}
