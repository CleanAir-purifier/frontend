import React from 'react';
import {Text} from 'react-native';

import {Container, Title, Timer, ButtonsRow, OutlineButton} from './styles';

const TimerModal = () => {
  return (
    <Container>
      <Title>Desligar em</Title>
      <Timer>00:00</Timer>
      <ButtonsRow>
        <OutlineButton>
          <Text>Adicionar</Text>
        </OutlineButton>
        <OutlineButton>
          <Text>Cancelar</Text>
        </OutlineButton>
      </ButtonsRow>
    </Container>
  );
};

export default TimerModal;
