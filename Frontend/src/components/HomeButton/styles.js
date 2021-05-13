import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const OuterCircle = styled.TouchableOpacity`
  height: ${windowWidth * 0.7}px;
  width: ${windowWidth * 0.7}px;
  background-color: #303c42;
  border-color: transparent;
  border-radius: ${(windowWidth * 0.7) / 2}px;
  align-items: center;
  justify-content: center;
`;

export const InnerCircle = styled.View`
  height: 85%;
  width: 85%;
  background-color: #404649;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
