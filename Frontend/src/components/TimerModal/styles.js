import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 30%;
  border-color: #303c42;
  border-width: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #303c42;
  font-weight: bold;
  font-size: 24px;
`;

export const Timer = styled.Text`
  color: #7cb342;
  font-weight: bold;
  font-size: 52px;
`;

export const ButtonsRow = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
`;

export const OutlineButton = styled.TouchableOpacity`
  height: 35px;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-color: #7cb342;
  border-width: 2px;
`;
