import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import NoPurifier from './pages/NoPurifier';
import ListDevices from './pages/ListDevices';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListDevices"
          component={ListDevices}
          options={{
            headerStyle: {backgroundColor: '#303C42'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#303C42'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="noPurifier"
          component={NoPurifier}
          options={{
            headerStyle: {backgroundColor: '#303C42'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
