import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Container, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({isListDevice}) => {
  const navigation = useNavigation();

  return (
    <Container>
      {isListDevice ? (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Icon name="arrow-back-ios" color="#7CB342" size={36} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ListDevices');
          }}>
          <Icon name="list" color="#7CB342" size={36} />
        </TouchableOpacity>
      )}

      <Title>Clean Air</Title>
      <View style={{height: 36, width: 36}} />
    </Container>
  );
};

export default NavBar;
