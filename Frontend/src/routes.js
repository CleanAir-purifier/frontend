import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import NoPurifier from './pages/NoPurifier';
import ListDevices from './pages/ListDevices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Routes = () => {
  const [hasPurifierId, setHasPurifierId] = useState(false);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('purifierId');
      if (value !== null) {
        setHasPurifierId(true);
      } else {
        setHasPurifierId(false);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <NavigationContainer>
      {hasPurifierId ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ListDevices" component={ListDevices} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="NoPurifier"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="NoPurifier" component={NoPurifier} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ListDevices" component={ListDevices} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
