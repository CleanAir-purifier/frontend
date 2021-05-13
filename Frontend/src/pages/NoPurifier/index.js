import React, {useState} from 'react';
import OneSignal from 'react-native-onesignal';

import {Container, BackgroundLogo, Title, SubTitle} from './styles';
import HomeButton from '../../components/HomeButton';
import NewDeviceModal from '../../components/NewDeviceModal';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sendUserToken} from '../../service';

const NoPurifier = ({navigation}) => {
  const [openRegister, setOpenRegister] = useState(false);

  function handleButtonClick(click) {
    setOpenRegister(click);
  }
  async function handleCloseModal(purifierId) {
    setOpenRegister(!openRegister);
    if (purifierId !== undefined) {
      try {
        await AsyncStorage.setItem('purifierId', purifierId);
        const deviceState = await OneSignal.getDeviceState();
        sendUserToken({
          purifier_id: purifierId,
          user_token: deviceState.userId,
        });
        navigation.navigate('Home');
      } catch (e) {
        // saving error
      }
    }
  }

  return (
    <Container>
      <BackgroundLogo source={require('../../assets/images/leaf.png')} />
      <Modal
        onBackdropPress={() => {
          setOpenRegister(!openRegister);
        }}
        backdropOpacity={0.3}
        isVisible={openRegister}>
        <Container>
          <NewDeviceModal onModalDismiss={handleCloseModal} />
        </Container>
      </Modal>
      <Title>Voce ainda não tem nehum purificador</Title>
      <SubTitle>Clique aqui para adicionar</SubTitle>
      <HomeButton isAdd={true} onButtonClick={handleButtonClick} />
    </Container>
  );
};

export default NoPurifier;
