import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import NoPurifier from './pages/NoPurifier';
import ListDevices from './pages/ListDevices';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListDevices" component={ListDevices} />
        <Stack.Screen name="noPurifier" component={NoPurifier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
