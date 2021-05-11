/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {Container, AddButton} from './styles';
import DeviceCard from '../../components/DeviceCard';
import PurifierCard from '../../components/PurifierCard';
import NavBar from '../../components/NavBar';
import {getDevices} from '../../service';

const ListDevices = () => {
  const [purifier, setPurifier] = useState(null);

  const loadDevicesData = async () => {
    getDevices(1)
      .then(res => {
        setPurifier(res.data);
      })
      .catch(error => {
        console.log('error loading purifier data');
      });
  };

  React.useEffect(() => {
    loadDevicesData();
  }, []);

  return (
    <Container>
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
    </Container>
  );
};

export default ListDevices;
