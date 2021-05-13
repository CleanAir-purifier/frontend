import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  width: 90%;
  height: 300px;
  border-color: #303c42;
  border-width: 5px;
  align-items: center;
  background-color: #f4f4f4;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #303c42;
  font-size: 24px;
  font-family: 'Exo-Bold';
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

export const TextInputOutline = styled.TextInput`
  margin-top: 20px;
  width: 90%;
  border-width: 2px;
  border-color: #7cb342;
`;

export const InputView = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;
export const PickerView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SubTitle = styled.Text`
  color: #303c42;
  font-size: 16px;
  font-family: 'Exo-Bold';
`;
