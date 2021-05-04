import styled from 'styled-components/native';

export const Header = styled.View`
  width: 85%;
  height: 150px;
  border-width: 4px;
  border-radius: 10px;
  border-color: #303c42;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 5px;
  font-size: 24px;
`;

export const InfoRow = styled.View`
  margin-top: 5%;
  width: 95%;
  justify-content: space-between;
  flex-direction: row;
`;
export const InconView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTitle = styled.Text`
  font-size: 18px;
  color: #303c42;
`;
export const InfoText = styled.Text`
  font-size: 16px;
  color: #7cb342;
  font-weight: bold;
`;

export const PowerButton = styled.TouchableOpacity`
  align-items: center;
`;

export const PowerView = styled.View`
  align-items: center;
`;

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

export const Context = styled.View`
  width: 85%;
  height: 450px;
  border-width: 4px;
  border-radius: 10px;
  border-color: #303c42;
  align-items: center;
`;

export const ChartView = styled.View`
  width: 95%;
  align-items: flex-start;
  justify-content: center;
`;
