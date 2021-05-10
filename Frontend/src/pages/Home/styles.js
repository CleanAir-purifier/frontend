import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const BackgroundLogo = styled.Image`
  margin-top: 40%;
  width: 100%;
  opacity: 0.07;
  position: absolute;
`;

export const InfoTitle = styled.Text`
  font-family: 'Exo-Light';
  font-size: 24px;
`;

export const InfoView = styled.View`
  margin-top: 20px;
  width: ${windowWidth * 0.9}px;
  align-items: flex-start;
`;

export const InfoIconsRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const TextInfo = styled.Text`
  font-family: 'Exo-Light';
  font-size: 24px;
`;

export const IconView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const SimpleText = styled.Text`
  font-family: 'Exo';
`;

export const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-family: 'Exo';
  color: #303c42;
  margin-left: 10px;
  font-size: 16px;
`;
