import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import HomeButton from '../../components/HomeButton';
import PurifierCard from '../../components/PurifierCard';

const Home = () => {
  return (
    <Container>
      <PurifierCard />
    </Container>
  );
};

export default Home;
