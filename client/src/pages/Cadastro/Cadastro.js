
import { useState } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,

} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Form1 } from './Form1'
import { Form2 } from './Form2'
import { Form3 } from './Form3'



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
                p={6}
                m="0px 30px"
                w={"full"}
                h={"full"}
                bg={"white"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                position={"relative"}
                borderRadius={"3xl"}
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