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
  SelectedSpeed,
} from './styles';
import ProgressBar from 'react-native-progress/Bar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Water from 'react-native-vector-icons/Entypo';

import HomeButton from '../../components/HomeButton';
import {View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { getDevices } from '../../service';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const [isOn, setIsOn] = useState(true);
  const [progress, setProgress] = useState(100);
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [speed, setSpeed] = useState('1x');
  const [mode, setMode] = useState('auto');

  const loadDevicesData = async () => {
    getDevices(1)
      .then((res) => {
        console.log(res.data.active)
        powerPurifier(res.data.active);
      })
      .catch((error) => {
        console.log("error loading purifier data");
      })
  }

  function powerPurifier(power) {
    setIsOn(power);
  }

  React.useEffect(() => {
    loadDevicesData();
  }, []);

  function renderSpeed() {
    switch (speed) {
      case '1x':
        return (
          <InfoIconsRow>
            <TouchableOpacity>
              <SelectedSpeed>1x</SelectedSpeed>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSpeed('2x');
              }}>
              <InfoTitle>2x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSpeed('3x');
              }}>
              <InfoTitle>3x</InfoTitle>
            </TouchableOpacity>
          </InfoIconsRow>
        );
      case '2x':
        return (
          <InfoIconsRow>
            <TouchableOpacity
              onPress={() => {
                setSpeed('1x');
              }}>
              <InfoTitle>1x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity>
              <SelectedSpeed>2x</SelectedSpeed>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSpeed('3x');
              }}>
              <InfoTitle>3x</InfoTitle>
            </TouchableOpacity>
          </InfoIconsRow>
        );
      case '3x':
        return (
          <InfoIconsRow>
            <TouchableOpacity
              onPress={() => {
                setSpeed('1x');
              }}>
              <InfoTitle>1x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSpeed('2x');
              }}>
              <InfoTitle>2x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity>
              <SelectedSpeed>3x</SelectedSpeed>
            </TouchableOpacity>
          </InfoIconsRow>
        );
    }
  }

  return (
    <Container>
      <BackgroundLogo source={require('../../assets/images/leaf.png')} />
      <View style={{marginTop: 30}} />
      <HomeButton powerPurifier={powerPurifier} isOn={isOn} isAdd={false} />
      {isOn ? (
        <ScrollView
          style={{marginTop: 20}}
          contentContainerStyle={{
            alignItems: 'center',
          }}>
          <InfoView>
            <InfoTitle>Progresso</InfoTitle>
            <InfoIconsRow>
              <IconView>
                <SimpleText>{progress}%</SimpleText>
                <ProgressBar
                  indeterminate={false}
                  progress={progress / 100}
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
                  <InfoText>{temperature}</InfoText>
                </IconRow>
              </View>
              <View>
                <InfoTitle>Umidade</InfoTitle>
                <IconRow>
                  <Water name="water" color="#7CB342" size={40} />
                  <InfoText>{humidity}</InfoText>
                </IconRow>
              </View>
            </InfoIconsRow>
          </InfoView>

          <InfoView>
            <InfoTitle>Velocidade</InfoTitle>
            {renderSpeed()}
          </InfoView>
          <InfoView>
            <InfoTitle>Modo</InfoTitle>
            <InfoIconsRow>
              {mode === 'auto' ? (
                <>
                  <IconView>
                    <Icon name="fan" color="#7CB342" size={50} />
                    <SimpleText>Automatico</SimpleText>
                  </IconView>
                  <IconView
                    onPress={() => {
                      setMode('night');
                    }}>
                    <Icon name="weather-night" color="#303C42" size={50} />
                    <SimpleText>Noturno</SimpleText>
                  </IconView>
                </>
              ) : (
                <>
                  <IconView
                    onPress={() => {
                      setMode('auto');
                    }}>
                    <Icon name="fan" color="#303C42" size={50} />
                    <SimpleText>Automatico</SimpleText>
                  </IconView>
                  <IconView>
                    <Icon name="weather-night" color="#7CB342" size={50} />
                    <SimpleText>Noturno</SimpleText>
                  </IconView>
                </>
              )}
            </InfoIconsRow>
          </InfoView>
          <View style={{height: 20}} />
        </ScrollView>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Home;
