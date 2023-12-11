import { React } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Center,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, redirect } from 'react-router-dom';
import { useAuthentication } from '../../contexts';
import { Carousel } from 'react-responsive-carousel';
import { SideNavBar } from '../../components/SideNavBar/SideNavBar.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function Home() {
  const authentication = useAuthentication();

  const handleLogout = async () => {
    try {
      await authentication.logout();
      redirect('/');
    } catch (error) {
      alert('Algo errado aconteceu.');
    }
  };

  const newsList = [
    {
      contentUrl:
        'https://cdn.ocp.news/2021/12/parque-malwee-foto-andreia-nunes-1.jpg',
    },
    {
      contentUrl:
        'https://www.viagensecaminhos.com/wp-content/uploads/2021/07/chiesetta-alpina-jaragua-do-sul.jpg',
    },
    {
      contentUrl:
        'https://img.apresenta.me/M7cwNbRNVktPLcjSM0m1ME1OSjQxTDMxNotPTU-MzdQ3tNBPzUnOLClKtM1UM7ItBgA.jpeg',
    },
  ];

  return (
    <Flex w="100%">
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
            <Link h="50px" as={ReactRouterLink} onClick={handleLogout}>
              Sair
            </Link>
          </Box>
        </Flex>

        <Center>
          <Box bg="white" w="80%">
            <Container maxW="container.lg">
              <Flex
                justifyContent="center"
                color="#0969da"
                fontWeight="bold"
                fontSize="30px"
                margin="10px 0 10px 0"
              >
                <h1>Bem-Vindo</h1>
              </Flex>
              <Carousel
                showArrows={true}
                showStatus={true}
                showThumbs={false}
                renderIndicator={(clickHandler, isSelected, index) => (
                  <div
                    key={index}
                    onClick={clickHandler}
                    style={{
                      background: isSelected ? '#4169E1' : '#fff',
                      width: 15,
                      height: 15,
                      display: 'inline-block',
                      margin: '0 5px',
                      cursor: 'pointer',
                      border: `2px solid ${isSelected ? '#4169E1' : '#4169E1'}`,
                      borderRadius: '20%',
                    }}
                  />
                )}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
              >
                {newsList.map((news, index) => (
                  <div
                    key={index}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Box p={2} borderWidth="2px" maxH="100%">
                      <Link href={news.contentUrl} isExternal>
                        <Heading as="h5" size="lg" mb={1}>
                          {news.title}
                        </Heading>
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={news.contentUrl}
                            style={{
                              width: '100%',
                              height: '50%',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      </Link>
                    </Box>
                  </div>
                ))}
              </Carousel>
            </Container>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
}
