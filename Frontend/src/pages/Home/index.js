import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

import TimerModal from '../../components/TimerModal';

const Home = () => {
  return (
    <Container>
      <TimerModal />
    </Container>
  );
};

export default Home;
