'use client'

import { useState } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
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

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Detalhes do usuario
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    País/Região
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Selecione a opção"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Endereço da Rua
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Cidade
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Estado
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    CEP
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    )
}

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Identificadores Sociais
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Local na rede Internet
                    </FormLabel>
                    <InputGroup size="sm">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: 'gray.800',
                            }}
                            color="gray.500"
                            rounded="md">
                            http://
                        </InputLeftAddon>
                        <Input
                            type="tel"
                            placeholder="www.example.com"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl id="email" mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Sobre
                    </FormLabel>
                    <Textarea
                        placeholder="voce@example.com"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                    />
                    <FormHelperText>
                        Breve descrição do seu perfil. URLs têm hiperlinks.
                    </FormHelperText>
                </FormControl>
            </SimpleGrid>
        </>
    )
}

export function Cadastro() {
    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)

    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form">
                <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1)
                                    setProgress(progress - 33.33)
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%">
                                Voltar
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    setStep(step + 1)
                                    if (step === 3) {
                                        setProgress(100)
                                    } else {
                                        setProgress(progress + 33.33)
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline">
                                Proximo
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: 'Conta criada.',
                                        description: "Criamos sua conta para você.",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })
                                }}>
                                Enviar
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    )
}