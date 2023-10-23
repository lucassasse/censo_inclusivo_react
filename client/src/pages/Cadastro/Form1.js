import { useState } from 'react'
import {
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react'


export function Form1() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Cadastro de usuário
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        Primeiro nome
                    </FormLabel>
                    <Input id="first-name" placeholder="Primeiro nome" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        Sobrenome
                    </FormLabel>
                    <Input id="last-name" placeholder="Sobrenome" />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Endereço de email
                </FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>Nunca compartilharemos seu e-mail.</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Senha
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Digite a senha"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Esconder' : 'Mostrar'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}
