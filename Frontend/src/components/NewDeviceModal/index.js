/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import {
  Container,
  Title,
  ButtonsRow,
  OutlineButton,
  SubTitle,
  InputView,
  PickerView,
} from './styles';

const NewDeviceModal = ({onModalDismiss}) => {
  const [purifierId, setPurifierId] = useState();

  return (
    <Container>
      <Title>Novo purificador</Title>
      <InputView>
        <SubTitle>Purificadores disponíveis</SubTitle>
        <PickerView>
          <ModalDropdown
            style={{
              height: 100,
              width: '100%',
              alignItems: 'center',
              marginTop: 20,
            }}
            onSelect={(index, value) => {
              setPurifierId(value);
            }}
            dropdownTextStyle={{fontSize: 24}}
            options={['1']}>
            <SubTitle>
              {purifierId !== undefined ? purifierId : 'Por favor selecione...'}
            </SubTitle>
          </ModalDropdown>
        </PickerView>
      </InputView>
      <ButtonsRow>
        <OutlineButton
          onPress={() => {
            onModalDismiss(purifierId);
          }}>
          <Text>Adicionar</Text>
        </OutlineButton>
        <OutlineButton
          onPress={() => {
            onModalDismiss(undefined);
          }}>
          <Text>Cancelar</Text>
        </OutlineButton>
      </ButtonsRow>
    </Container>
  );
};

export default NewDeviceModal;
