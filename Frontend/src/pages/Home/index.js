/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';

import {
  Container,
  BackgroundLogo,
  InfoTitle,
  InfoView,
  InfoIconsRow,
  IconView,
  SimpleText,
  SelectedSpeed,
} from './styles';
import ProgressBar from 'react-native-progress/Bar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeButton from '../../components/HomeButton';
import {View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import NavBar from '../../components/NavBar';
import {getDevices, sendPurifierCommands} from '../../service';

const Home = () => {
  const windowWidth = Dimensions.get('window').width;
  const [isOn, setIsOn] = useState(false);
  const [progress, setProgress] = useState(100);
  const [speed, setSpeed] = useState('1x');
  const [mode, setMode] = useState('auto');
  const purifierId = 1;

  const interval = useRef();

  const loadDevicesData = async () => {
    getDevices(purifierId)
      .then(res => {
        setIsOn(res.data.active);
        setProgress(res.data.progress);
      })
      .catch(error => {
        console.log('error loading purifier data');
      });
  };

  function powerPurifier(power) {
    setIsOn(power);
    sendPurifierCommands({
      id: purifierId,
      active: power,
      velocity: speed,
      mode: mode,
    });
  }

  function speedPurifier(selectedSpeed) {
    setSpeed(selectedSpeed);
    sendPurifierCommands({
      id: purifierId,
      active: isOn,
      velocity: selectedSpeed,
      mode: mode,
    });
  }

  function modePurifier(selectedMode) {
    setMode(selectedMode);
    sendPurifierCommands({
      id: purifierId,
      active: isOn,
      velocity: speed,
      mode: selectedMode,
    });
  }

  useEffect(() => {
    loadDevicesData();
    interval.current = setInterval(() => {
      loadDevicesData();
    }, 3000);
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
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
                speedPurifier('2x');
              }}>
              <InfoTitle>2x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                speedPurifier('3x');
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
                speedPurifier('1x');
              }}>
              <InfoTitle>1x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity>
              <SelectedSpeed>2x</SelectedSpeed>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                speedPurifier('3x');
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
                speedPurifier('1x');
              }}>
              <InfoTitle>1x</InfoTitle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                speedPurifier('2x');
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
      <NavBar isListDevice={false} />
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
                      modePurifier('night');
                    }}>
                    <Icon name="weather-night" color="#303C42" size={50} />
                    <SimpleText>Noturno</SimpleText>
                  </IconView>
                </>
              ) : (
                <>
                  <IconView
                    onPress={() => {
                      modePurifier('auto');
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
