import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import HomeButton from '../../components/HomeButton';

const Home = () => {
  return (
    <Container>
      <Text>Hello world</Text>
      <HomeButton isAdd={false}> </HomeButton>
    </Container>
  );
};

export default Home;
