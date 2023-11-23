import React from 'react';
import { Box, Container, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export function Home() {
    const newsList = [
        {
            contentUrl: 'https://cdn.ocp.news/2021/12/parque-malwee-foto-andreia-nunes-1.jpg'

        },
        {
            contentUrl: 'https://www.viagensecaminhos.com/wp-content/uploads/2021/07/chiesetta-alpina-jaragua-do-sul.jpg'

        },
        {
            contentUrl: 'https://img.apresenta.me/M7cwNbRNVktPLcjSM0m1ME1OSjQxTDMxNotPTU-MzdQ3tNBPzUnOLClKtM1UM7ItBgA.jpeg'

        },
    ];

    return (
        <Box bg="white" height='500px' w='80%'>
            <Container maxW="container.lg" >
                <Flex
                    justifyContent='center'
                    marginTop={-5}
                    color='#0969da'
                    fontWeight='bold'
                    fontSize='30px'
                ><h1>Bem Vindo</h1>
                </Flex>
                <Carousel
                    showArrows={true}
                    showStatus={true}
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
                                borderRadius: '30%',
                            }}
                        />
                    )}
                    infiniteLoop={true}
                    autoPlay={true} // Habilita a mudança automática de slides
                    interval={3000}
                >
                    {newsList.map((news, index) => (
                        <div key={index}
                            style={{
                                width: '100%', // Largura fixa desejada
                                height: '100%'

                            }}>
                            <Box p={2} borderWidth="2px" borderRadius="lg" bg="white" maxH='100%'>
                                <Link href={news.contentUrl} isExternal>
                                    <Heading as="h5" size="lg" mb={1}>
                                        {news.title}
                                    </Heading>

                                    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                        <Image src={news.contentUrl} style={{ width: '100%', height: '50%', objectFit: 'contain' }} />
                                    </div>
                                </Link>
                            </Box>
                        </div>
                    ))}
                </Carousel>
                <Flex
                    justifyContent='center'
                    marginTop={-10}
                    color='#0969da'
                    fontSize='30px'
                ><h1>Censo Inclusivo - Contando Todos</h1>
                </Flex>
            </Container >
        </Box >
    );
};
