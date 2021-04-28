import React from 'react';
import {Text, TextInput} from 'react-native';

import {
  Container,
  Title,
  ButtonsRow,
  OutlineButton,
  TextInputOutline,
  InputView,
} from './styles';

const NewDeviceModal = () => {
  return (
    <Container>
      <Title>Novo dispositivo</Title>
      <InputView>
        <TextInputOutline placeholder={'Nome'} />
        <TextInputOutline placeholder={'Id'} />
      </InputView>
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

export default NewDeviceModal;
