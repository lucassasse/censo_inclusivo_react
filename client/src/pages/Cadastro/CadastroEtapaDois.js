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
} from '@chakra-ui/react';
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
    setTiposDeficiencia([]);
  };

  const handleTiposDeficiencia = event => {
    var updatedList = [...tiposDeficiencia];
    if (event.target.checked) {
      updatedList = [...tiposDeficiencia, event.target.value];
    } else {
      updatedList.splice(tiposDeficiencia.indexOf(event.target.value), 1);
    }
    setTiposDeficiencia(updatedList);
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
            {tiposDeficiencia.map((item, index) => {
              switch (item) {
                case 'Física':
                  return <Fisica key={index} />;
                case 'Visual':
                  return <Visual key={index} />;
                case 'Auditiva':
                  return <Auditiva key={index} />;
                case 'Intelectual':
                  return <Intelectual key={index} />;
                case 'Psicossocial':
                  return <Psicossocial key={index} />;
                default:
                  return;
              }
            })}
          </div>
        )}
      </FormControl>
    </Center>
  );
}

export default CadastroEtapaDois;
