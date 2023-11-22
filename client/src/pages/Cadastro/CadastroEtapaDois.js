import React, { useState, useEffect } from 'react';
import {
  Input,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Radio,
  Checkbox,
  RadioGroup,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, redirect } from 'react-router-dom';
import style from './CadastroEtapaDois.module.css';

function CadastroEtapaDois() {
  const [pcd, setPcd] = useState(true);
  const [tiposDeficiencia, setTiposDeficiencia] = useState([]);

  const handlePcd = () => {
    setPcd(!pcd);
  };

  const handleTiposDeficiencia = value => {
    tiposDeficiencia.push(value);
    console.log(tiposDeficiencia);
  };

  return (
    <Center>
      <FormControl className={style.formControl}>
        <div>
          <p>No início: Possuo / Não Possuo Deficiência</p>
          <p>Meio: Tipo da deficiencia eficiência...</p>
          <p>No fim: Possuo mais uma deficiencia... E-mail Senha</p>
        </div>
        <br></br>
        <FormLabel as="legend">Você possui alguma deficiencia?</FormLabel>
        <RadioGroup defaultValue="sim">
          <HStack spacing="24px">
            <Radio value="sim" onChange={handlePcd}>
              Sim
            </Radio>
            <Radio value="nao" onChange={handlePcd}>
              Não
            </Radio>
          </HStack>
        </RadioGroup>
        <br></br>
        {pcd && (
          <div>
            <FormLabel>
              Selecione qual ou quais seu tipo de deficiência
            </FormLabel>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="fisica"
                onClick={handleTiposDeficiencia('fisica')}
              >
                Física
              </Checkbox>
              <Checkbox value="visual">Visual</Checkbox>
              <Checkbox value="auditiva">Auditiva</Checkbox>
              <Checkbox value="intelectual">Intelectual</Checkbox>
              <Checkbox value="psicossocial">Psicossocial</Checkbox>
            </Stack>
            <div>oi</div>
          </div>
        )}
        <Center mt="5vh">
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              bg="#0969DA"
              color="white"
              size="lg"
              _hover={{ bg: '#0754AD' }}
              as={ReactRouterLink}
            >
              Continuar
            </Button>
          </ButtonGroup>
        </Center>
      </FormControl>
    </Center>
  );
}

export default CadastroEtapaDois;
