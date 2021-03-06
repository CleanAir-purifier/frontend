/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {Container, LoadingText} from './styles';
import DeviceCard from '../../components/DeviceCard';
import PurifierCard from '../../components/PurifierCard';
import NavBar from '../../components/NavBar';
import {getDevices} from '../../service';

const ListDevices = () => {
  const [purifier, setPurifier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const interval = useRef();

  const loadDevicesData = async () => {
    getDevices(1)
      .then(res => {
        console.log('loading data...');
        setPurifier(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.log('error loading purifier data');
      });
  };

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

  return (
    <Container>
      {isLoading ? (
        <>
          <LottieView
            resizeMode="cover"
            style={{width: 200}}
            source={require('../../assets/animations/loading_animation.json')}
            autoPlay
            loop
          />
          <LoadingText>Carregando... </LoadingText>
        </>
      ) : (
        <>
          <NavBar isListDevice />
          {purifier ? (
            <ScrollView
              style={{marginTop: 50}}
              contentContainerStyle={{
                alignItems: 'center',
              }}>
              <PurifierCard {...purifier} />
              <View style={{height: 30}} />

              {purifier.mobile_sensors.map((sensor, key) => {
                return (
                  <View key={key}>
                    <DeviceCard {...sensor} />
                    <View style={{height: 30}} />
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <View />
          )}
        </>
      )}
    </Container>
  );
};

export default ListDevices;
