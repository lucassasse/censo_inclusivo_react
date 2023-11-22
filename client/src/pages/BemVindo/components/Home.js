import React from 'react';
import { Box, Container, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export function Home() {
    const newsList = [
        {
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


        },
        {
            contentUrl: 'https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },
        {

            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        },

        {
            contentUrl: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }
    ];

    return (
        <Box bg="white" height='400px' w='80%'>
            <Container maxW="container.lg" >
                <Flex
                    justifyContent='center'
                    marginTop={-10}

                ><h1>BEM VINDO</h1>
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
                                        <Image src={news.contentUrl} style={{ width: '100%', height: '90%', objectFit: 'contain' }} />
                                    </div>
                                </Link>
                            </Box>
                        </div>
                    ))}
                </Carousel>
            </Container >
        </Box >
    );
};
