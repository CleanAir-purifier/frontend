import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

import NewDeviceModal from '../../components/NewDeviceModal';

const Home = () => {
  return (
    <Container>
      <NewDeviceModal />
    </Container>
  );
};

export default Home;
