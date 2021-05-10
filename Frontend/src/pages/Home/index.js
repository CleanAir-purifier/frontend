/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  Container,
  BackgroundLogo,
  InfoTitle,
  InfoView,
  InfoIconsRow,
  IconView,
  SimpleText,
  IconRow,
  InfoText,
} from './styles';
import ProgressBar from 'react-native-progress/Bar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Water from 'react-native-vector-icons/Entypo';

import HomeButton from '../../components/HomeButton';
import {View, ScrollView, Dimensions, Text} from 'react-native';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const [isOn, setIsOn] = useState(true);
  const [progress, setProgress] = useState('');
  const [temperature, setTemperature] = useState('');
  const [moisture, setMoisture] = useState('');
  const [speed, setSpeed] = useState('');
  const [mode, setMode] = useState('');

  function powerPurifier(power) {
    setIsOn(power);
  }

  return (
    <Container>
      <BackgroundLogo source={require('../../assets/images/leaf.png')} />
      <View style={{marginTop: 30}} />
      <HomeButton powerPurifier={powerPurifier} isAdd={false} />
      <ScrollView
        style={{marginTop: 20}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <InfoView>
          <InfoTitle>Progresso</InfoTitle>
          <InfoIconsRow>
            <IconView>
              <SimpleText>80%</SimpleText>
              <ProgressBar
                indeterminate={false}
                progress={0.1}
                width={windowWidth * 0.8}
                height={20}
                color={'#7CB342'}
                borderColor={'#303C42'}
                borderWidth={2}
              />
            </IconView>
          </InfoIconsRow>
        </InfoView>

        <InfoView>
          <InfoIconsRow>
            <View>
              <InfoTitle>Temperatura</InfoTitle>
              <IconRow>
                <Icon name="thermometer" color="#7CB342" size={40} />
                <InfoText>21</InfoText>
              </IconRow>
            </View>
            <View>
              <InfoTitle>Umidade</InfoTitle>
              <IconRow>
                <Water name="water" color="#7CB342" size={40} />
                <InfoText>21</InfoText>
              </IconRow>
            </View>
          </InfoIconsRow>
        </InfoView>

        <InfoView>
          <InfoTitle>Velocidade</InfoTitle>
          <InfoIconsRow>
            <InfoTitle>1x</InfoTitle>
            <InfoTitle>2x</InfoTitle>
            <InfoTitle>3x</InfoTitle>
          </InfoIconsRow>
        </InfoView>
        <InfoView>
          <InfoTitle>Modo</InfoTitle>
          <InfoIconsRow>
            <IconView>
              <Icon name="fan" color="#7CB342" size={50} />
              <SimpleText>Automatico</SimpleText>
            </IconView>
            <IconView>
              <Icon name="weather-night" color="#7CB342" size={50} />
              <SimpleText>Noturno</SimpleText>
            </IconView>
          </InfoIconsRow>
        </InfoView>
        <View style={{height: 20}} />
      </ScrollView>
    </Container>
  );
};

export default Home;
