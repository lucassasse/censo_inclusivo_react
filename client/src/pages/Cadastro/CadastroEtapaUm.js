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

function CadastroEtapaUm({ onFormComplete, onInputChange }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [cpf, setCpf] = useState('');
  const [cpfValido, setCpfValido] = useState(true);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCampoPreenchido = () => {
    if (
      nomeCompleto &&
      cpfValido &&
      genero &&
      dataNascimento &&
      cep &&
      numero &&
      email &&
      password
    ) {
      onFormComplete(true);
    } else {
      onFormComplete(false);
    }
  };

  function handleNomeCompleto(value) {
    setNomeCompleto(value);
    onInputChange('nomeCompleto', value);
    handleCampoPreenchido();
  }

  function handleNomeSocial(value) {
    setNomeSocial(value);
    onInputChange('nomeSocial', value);
    handleCampoPreenchido();
  }

  function handleGenero(value) {
    setGenero(value);
    onInputChange('genero', value);
    handleCampoPreenchido();
  }

  function handleDataNascimento(value) {
    setDataNascimento(value);
    onInputChange('dataNascimento', value);
    handleCampoPreenchido();
  }

  function handleNumero(value) {
    setNumero(value);
    onInputChange('numero', value);
    handleCampoPreenchido();
  }

  function handleComplemento(value) {
    setComplemento(value);
    onInputChange('complemento', value);
    handleCampoPreenchido();
  }

  function handleEmail(value) {
    setEmail(value);
    onInputChange('email', value);
    handleCampoPreenchido();
  }

  function handleSenha(value) {
    setPassword(value);
    onInputChange('password', value);
    handleCampoPreenchido();
  }

  const validadorCpf = value => {
    setCpf(value);
    setCpfValido(validarCPF(value));
    handleCampoPreenchido();
    onInputChange('cpf', value);
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
        <FormLabel>Nome completo *</FormLabel>
        <Input
          type="text"
          name="nomeCompleto"
          onChange={e => handleNomeCompleto(e.target.value)}
        />
        <FormLabel mt="3vh">Nome Social - Caso possua</FormLabel>
        <Input type="text" onChange={e => handleNomeSocial(e.target.value)} />
        <FormLabel mt="3vh">CPF *</FormLabel>
        <Input
          type="text"
          value={cpf}
          name="cpf"
          onChange={e => validadorCpf(e.target.value)}
          isInvalid={!cpfValido} // para adicionar classe de estilo para indicar CPF inválido
        />
        {!cpfValido && <small style={{ color: 'red' }}>CPF inválido</small>}
        <FormLabel mt="3vh">Gênero *</FormLabel>
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
        <FormLabel mt="1vh">Data de Nascimento *</FormLabel>
        <Input
          type="date"
          name="dataNascimento"
          onChange={e => handleDataNascimento(e.target.value)}
        />
        <FormLabel mt="3vh">CEP *</FormLabel>
        <Input
          type="text"
          maxLength="9"
          value={cep || ''}
          name="cep"
          onChange={e => mascaraCep(e.target.value)}
        />
        <FormLabel mt="3vh">Estado</FormLabel>
        <Input
          type="text"
          value={endereco.uf || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel mt="3vh">Cidade</FormLabel>
        <Input
          type="text"
          value={endereco.localidade || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel mt="3vh">Bairro</FormLabel>
        <Input
          type="text"
          value={endereco.bairro || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel mt="3vh">Rua</FormLabel>
        <Input
          type="text"
          value={endereco.logradouro || ''}
          disabled
          style={{ opacity: '1' }}
        />
        <FormLabel mt="3vh">Número *</FormLabel>
        <Input
          type="number"
          name="numero"
          onChange={e => handleNumero(e.target.value)}
        />
        <FormLabel mt="3vh">Complemento</FormLabel>
        <Input type="text" onChange={e => handleComplemento(e.target.value)} />
        <FormLabel mt="3vh">E-mail</FormLabel>
        <Input type="text" onChange={e => handleEmail(e.target.value)} />
        <FormLabel mt="3vh">Senha</FormLabel>
        <Input type="password" onChange={e => handleSenha(e.target.value)} />
      </FormControl>
    </Center>
  );
}

export default CadastroEtapaUm;
