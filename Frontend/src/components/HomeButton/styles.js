import styled from 'styled-components/native';

export const OuterCircle = styled.TouchableOpacity`
  height: 40%;
  width: 60%;
  background-color: #303c42;
  border-color: transparent;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  elevation: 10;
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
