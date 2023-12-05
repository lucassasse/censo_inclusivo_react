import { React } from 'react';
import { Flex, Link, Square, Center, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgLogo from './logo.png';

export function SideNavBar() {
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
            boxSize="120px"
            objectFit="cover"
            style={{
              borderRadius: '2%',
              marginTop: '-10px',
              marginBottom: '100px',
            }}
          />
        </Center>
        <Link h="50px" as={ReactRouterLink} to="/home">
          Página Principal
        </Link>
        <Link h="50px">Painel do Usuário</Link>
        <Link h="50px" as={ReactRouterLink} to="/estatisticas">
          Estatísticas / Relatórios
        </Link>
        <Link h="50px">Vagas de Empregos</Link>
        <Link h="50px">Eventos</Link>
        <Link h="50px">Leis e Notícias</Link>
        <Link h="100px">Entre em Contato</Link>
      </Flex>
    </Square>
  );
}
