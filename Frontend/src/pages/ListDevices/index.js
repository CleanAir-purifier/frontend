/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';

import {Container} from './styles';
import DeviceCard from '../../components/DeviceCard';
import PurifierCard from '../../components/PurifierCard';

const ListDevices = () => {
  return (
    <Container>
      <ScrollView
        style={{marginTop: 50}}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <PurifierCard />
        <View style={{height: 30}} />
        <DeviceCard />
        <View style={{height: 30}} />
        <DeviceCard />
        <View style={{height: 30}} />
        <DeviceCard />
        <View style={{height: 30}} />
      </ScrollView>
    </Container>
  );
};

export default ListDevices;
