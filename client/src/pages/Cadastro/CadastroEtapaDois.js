import React, { useState } from 'react';
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
import Fisica from './deficiencia/fisica.js';
import Visual from './deficiencia/Visual.js';
import Auditiva from './deficiencia/Auditiva.js';
import Intelectual from './deficiencia/Intelectual.js';
import Psicossocial from './deficiencia/psicossocial.js';

function CadastroEtapaDois() {
  const [pcd, setPcd] = useState(true);
  const [tiposDeficiencia, setTiposDeficiencia] = useState([]);

  const listaDeficiencias = [
    'Física',
    'Visual',
    'Auditiva',
    'Intelectual',
    'Psicossocial',
  ];

  const handlePcd = () => {
    setPcd(!pcd);
  };

  const handleTiposDeficiencia = event => {
    var updatedList = [...tiposDeficiencia];
    if (event.target.checked) {
      updatedList = [...tiposDeficiencia, event.target.value];
    } else {
      updatedList.splice(tiposDeficiencia.indexOf(event.target.value), 1);
    }
    setTiposDeficiencia(updatedList);
    console.log(updatedList);
  };

  return (
    <Center>
      <FormControl className={style.formControl}>
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
        {pcd && (
          <div>
            <FormLabel>
              Selecione qual ou quais deficiências você possui
            </FormLabel>
            <Stack spacing={5} direction="column">
              {listaDeficiencias.map((item, index) => (
                <Checkbox
                  key={index}
                  value={item}
                  type="checkbox"
                  onChange={handleTiposDeficiencia}
                >
                  {item}
                </Checkbox>
              ))}
            </Stack>
            <div>div teste</div>
            {listaDeficiencias.map(item => {
              if (item == 'Física') {
                <Fisica />;
                console.log('oiii');
              }
              if (item == 'Visual') {
                <Visual />;
                console.log('oi');
              }
            })}
            <Fisica />
            <Visual />
            <Auditiva />
            <Intelectual />
            <Psicossocial />
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
