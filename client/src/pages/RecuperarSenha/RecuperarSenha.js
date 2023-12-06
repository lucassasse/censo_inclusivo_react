import React, { useState } from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  ButtonGroup,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

export function RecuperarSenha() {
  const [sendMsg, setSendMsg] = useState(false);

  const handleCpfChange = () => {
    setSendMsg(true);
  };

  return (
    <Center h="100vh" backgroundColor="#0969DA">
      <Flex mt="-15vh">
        <Flex
          flexDirection="column"
          bg="#D9D9D9"
          borderRadius="2px"
          padding="50px 50px"
        >
          <Center>
            <Heading color="#0969DA" mb="7vh">
              Recuperação de Senha
            </Heading>
          </Center>
          <Center>
            <FormControl>
              <FormLabel>Digite seu E-mail</FormLabel>
              <Input bg="white" placeholder="E-mail..." />
            </FormControl>
          </Center>

          <Center mt="5vh">
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                bg="#0969DA"
                color="white"
                size="lg"
                _hover={{ bg: '#0754AD' }}
                onClick={handleCpfChange}
              >
                Enviar
              </Button>
            </ButtonGroup>
          </Center>

          <Center>
            {sendMsg && (
              <Center mt="2vh">
                <Alert status="success" mt="2vh" w="20vw">
                  <AlertIcon />
                  <AlertDescription>
                    Uma mensagem com instruções de recuperação de senha foi
                    enviada para seu e-mail
                  </AlertDescription>
                </Alert>
              </Center>
            )}
          </Center>
        </Flex>
      </Flex>
    </Center>
  );
}
