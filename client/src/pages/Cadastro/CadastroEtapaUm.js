import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Input,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Radio,
    RadioGroup
} from '@chakra-ui/react'
import style from './CadastroEtapaUm.module.css'

function CadastroEtapaUm(){
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({});
    const [cpf, setCpf] = useState('');
    const [cpfValido, setCpfValido] = useState(true);

    const validadorCpf = (value) => {
        setCpf(value);
        setCpfValido(validarCPF(value));
    }

    const validarCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        let soma = 0;

        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
        
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
            return false;
        }
        soma = 0;
        
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
        
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
            return false;
        }
        
        return true;
    }

    const mascaraCep = (value) => {
        if (!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        setCep(value);
        return value;
      }

    const getEndereco = async () => {
        if (cep.length === 9) {
          try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const resp = await axios.get(url);
            setEndereco(resp.data);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              alert("CEP não encontrado!");
            } else {
              console.error("[ERROR] = ", error);
              alert("Ops, algo de errado aconteceu.\n\nCEP inválido!");
            }
          } finally {
            console.log("Sucesso!");
          }
        }
      }

    useEffect(() => {
        getEndereco();
    }, [cep]);
    
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

                <FormLabel>Nome completo</FormLabel>
                <Input type='text' />

                <FormLabel>Nome Social caso possuir</FormLabel>
                <Input type='email' />

                <FormLabel>CPF</FormLabel>
                <Input
                    type='text'
                    maxLength="11"
                    value={cpf}
                    onChange={(e) => validadorCpf(e.target.value)}
                    isInvalid={!cpfValido} // para adicionar classe de estilo para indicar CPF inválido
                />
                {!cpfValido && (
                    <small style={{ color: 'red' }}>CPF inválido</small>
                )}

                <FormLabel>Gênero</FormLabel>
                <RadioGroup defaultValue='Itachi'>
                    <HStack spacing='24px'>
                        <Radio value='masculino'>Masculino</Radio>
                        <Radio value='feminimo'>Feminimo</Radio>
                        <Radio value='outros'>Outros</Radio>
                    </HStack>
                </RadioGroup>
                
                <FormLabel>Data de Nascimento</FormLabel>
                <Input type='date' />

                <FormLabel>CEP</FormLabel>
                <Input type='text' maxLength="9" value={cep || ''} onChange={(e) => mascaraCep(e.target.value)}/>

                <FormLabel>Estado</FormLabel>
                <Input type='text' value={endereco.uf} disabled/>

                <FormLabel>Cidade</FormLabel>
                <Input type='text' value={endereco.localidade} disabled/>

                <FormLabel>Bairro</FormLabel>
                <Input type='text' value={endereco.bairro} disabled/>

                <FormLabel>Rua</FormLabel>
                <Input type='text' value={endereco.logradouro} disabled/>

                <FormLabel>Número</FormLabel>
                <Input type='text' />

                <FormLabel>Complemento</FormLabel>
                <Input type='text' />

            </FormControl>
        </Center>
    )
}

export default CadastroEtapaUm;