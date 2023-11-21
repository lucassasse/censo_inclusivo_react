import { Image, Flex, Box } from '@chakra-ui/react'


export function Home(){
    return(
        <Flex>
            <h1>Novo teste</h1>
        <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        </Flex>
        
    );
}