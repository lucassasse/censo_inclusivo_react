import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import styles from './CadastroEtapaUm.module.css';

function CadastroEtapaUm({ onFormComplete }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [cpf, setCpf] = useState('');
  const [cpfValido, setCpfValido] = useState(true);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [numero, setNumero] = useState('');
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  const handleCampoPreenchido = () => {
    if (
      nomeCompleto &&
      cpfValido &&
      genero &&
      dataNascimento &&
      cep &&
      numero
    ) {
      setCamposPreenchidos(true);
      console.log('true');
      onFormComplete(true);
    } else {
      setCamposPreenchidos(false);
      onFormComplete(false);
    }
  };

  function handleNomeCompleto(value) {
    setNomeCompleto(value);
    handleCampoPreenchido();
  }

  function handleGenero(value) {
    setGenero(value);
    handleCampoPreenchido();
  }

  function handleDataNascimento(value) {
    setDataNascimento(value);
    handleCampoPreenchido();
  }

  function handleNumero(value) {
    setNumero(value);
    handleCampoPreenchido();
  }

  const validadorCpf = value => {
    setCpf(value);
    setCpfValido(validarCPF(value));
    handleCampoPreenchido();
  };

  const validarCPF = cpf => {
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
  };

  const mascaraCep = value => {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    setCep(value);

    if (value.length === 9) {
      getEndereco(value);
    }
  };

  const getEndereco = async value => {
    try {
      const url = `https://viacep.com.br/ws/${value}/json/`;
      const resp = await axios.get(url);
      setEndereco(resp.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('CEP não encontrado!');
      } else {
        alert('Ops, algo de errado aconteceu.\n\nCEP inválido!');
      }
    }
  };

  return (
    <Center>
      <FormControl>
        <FormLabel>Nome completo</FormLabel>
        <Input
          type="text"
          name="nomeCompleto"
          onChange={e => handleNomeCompleto(e.target.value)}
        />
        <FormLabel>Nome Social caso possuir</FormLabel>
        <Input type="text" />
        <FormLabel>CPF</FormLabel>
        <Input
          type="text"
          maxLength="11"
          value={cpf}
          name="cpf"
          onChange={e => validadorCpf(e.target.value)}
          isInvalid={!cpfValido} // para adicionar classe de estilo para indicar CPF inválido
        />
        {!cpfValido && <small style={{ color: 'red' }}>CPF inválido</small>}
        <FormLabel>Gênero</FormLabel>
        <RadioGroup onChange={handleGenero}>
          <HStack spacing="24px">
            <Radio value="masculino" name="genero">
              Masculino
            </Radio>
            <Radio value="feminino" name="genero">
              Feminino
            </Radio>
            <Radio value="outros" name="genero">
              Outros
            </Radio>
          </HStack>
        </RadioGroup>{' '}
        <br />
        <FormLabel>Data de Nascimento</FormLabel>
        <Input
          type="date"
          name="dataNascimento"
          onChange={e => handleDataNascimento(e.target.value)}
        />
        <FormLabel>CEP</FormLabel>
        <Input
          type="text"
          maxLength="9"
          value={cep || ''}
          name="cep"
          onChange={e => mascaraCep(e.target.value)}
        />
        <FormLabel>Estado</FormLabel>
        <Input
          type="text"
          value={endereco.uf || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel>Cidade</FormLabel>
        <Input
          type="text"
          value={endereco.localidade || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel>Bairro</FormLabel>
        <Input
          type="text"
          value={endereco.bairro || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel>Rua</FormLabel>
        <Input
          type="text"
          value={endereco.logradouro || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel>Número</FormLabel>
        <Input
          type="number"
          name="numero"
          onChange={e => handleNumero(e.target.value)}
        />
        <FormLabel>Complemento</FormLabel>
        <Input type="text" />
      </FormControl>
    </Center>
  );
}

export default CadastroEtapaUm;
