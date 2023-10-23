import {

    Heading,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
} from '@chakra-ui/react'

export function Form3() {
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
