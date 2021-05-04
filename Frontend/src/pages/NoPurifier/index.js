import React, {useState} from 'react';

import {Container, BackgroundLogo, Title, SubTitle} from './styles';

import HomeButton from '../../components/HomeButton';
import NewDeviceModal from '../../components/NewDeviceModal';
import {Modal} from 'react-native';

const NoPurifier = () => {
  const [openRegister, setOpenRegister] = useState(false);

  function handleButtonClick(click) {
    setOpenRegister(click);
  }

  return (
    <Container>
      <BackgroundLogo source={require('../../assets/images/leaf.png')} />
      <Modal
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animationType="slide"
        visible={openRegister}
        onRequestClose={() => {
          setOpenRegister(false);
        }}
        transparent={true}>
        <NewDeviceModal />
      </Modal>
      <Title>Voce ainda não tem nehum purificador</Title>
      <SubTitle>Clique aqui para adicionar</SubTitle>
      <HomeButton isAdd={true} onButtonClick={handleButtonClick} />
    </Container>
  );
};

export default NoPurifier;
