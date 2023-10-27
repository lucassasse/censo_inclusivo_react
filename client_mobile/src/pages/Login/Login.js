import React, { useState } from 'react';
import { Button, Input, VStack, Heading , Center} from 'native-base';
import { Alert } from '../../components/Alert';
import imgLogo from '../../../assets/logo.png';

export function Login() {
  const [cpfValue, setCpfValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  //validação para de exemplo
  function isLoginValid(login) {
    return login.length >= 6;
  }

  function formatCPF(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  }

  function handleCPFChange(event) {
    const inputValue = event.target.value;
    const formattedCPF = formatCPF(inputValue);
    setShowAlert(false)
    setCpfValue(formattedCPF);
  }

  return (
    <VStack space={4} p={4}>
      <Center>
        <img src={imgLogo} width={"50%"} />
      </Center>

      <Heading
        w="90%"
        size="lg"
        textAlign="center"
      >
        Ajude a construir benefícios para você!
      </Heading>

      <Center>
        <Input
          variant="underlined"
          placeholder="CPF..."
          w="90%"
          size="lg"
          value={cpfValue}
          onChange={handleCPFChange}
          maxLength="15"
        />
      </Center>

      <Center>
        <Input
          variant="underlined"
          placeholder="Senha..."
          w="90%"
          size="lg"
          type="password"
        />
      </Center>
      
      <Center>
        <Button
          w="90%"
          size="lg"
          bg="test.800"
          onClick={() => {
            const loginInput = "";
            if (!isLoginValid(loginInput)) {
              setShowAlert(true);
              console.log("Falha na autenticação")
            } else {
              setShowAlert(false);
              console.log("Login bem-sucedido")
            }
          }}
        >
          Entrar
        </Button>
      </Center>

      {showAlert && (
        <Alert
          title="Erro de login"
          description="Usuário ou senha incorretos"
          status="error"
        />
      )}

      
      
    </VStack>
  );
}
