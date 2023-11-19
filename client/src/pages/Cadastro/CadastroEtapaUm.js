import {
    Input,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import style from './CadastroEtapaUm.module.css'

function CadastroEtapaUm(){
    return(
        <Center>

            <FormControl className={style.formControl}>
                <p>
                    Nome Completo
                    Nome Social - caso possuir
                    CPF
                    Gênero
                    Data de Nascimento
                    CEP + nº + Complemento

                    No início: Possuo / Não Possuo Deficiência
                    Meio: Tipo da deficiencia eficiência...
                    No fim: Possuo mais uma deficiencia...

                    E-mail
                    Senha
                </p>

                <FormLabel>Email address</FormLabel>
                <Input type='email' />


            </FormControl>
        </Center>
    )
}

export default CadastroEtapaUm;