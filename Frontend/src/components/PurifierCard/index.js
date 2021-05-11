import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  InfoRow,
  InconView,
  InfoTitle,
  InfoText,
} from './styles';

const PurifierCard = (props) => {

  const getStatus = (status) => {
    let text = "-";
    if (status === "good") {
      text = "Bom";
    } else if (status === "medium") {
      text = "Médio";
    } else if (status === "bad") {
      text = "Ruim";
    }
    return text;
  }

  return (
    <Container>
      <Title>Purificador</Title>
      <InfoRow>
        <View>
          <InfoTitle>Bateria</InfoTitle>
          <InconView>
            <Icon name="battery-60" color="#303C42" size={34} />
            <InfoText>{props.battery ? `${props.battery}%` : '-'}</InfoText>
          </InconView>
        </View>
        <View>
          <InfoTitle>Filtro</InfoTitle>
          <InconView>
            <Icon name="air-filter" color="#303C42" size={34} />
            <InfoText>{props.filter_status ? getStatus(props.filter_status) : '-'}</InfoText>
          </InconView>
        </View>
        <View>
          <InfoTitle>Luz UV</InfoTitle>
          <InconView>
            <Icon name="lightbulb-on" color="#303C42" size={34} />
            <InfoText>{props.light_status ? getStatus(props.light_status) : '-'}</InfoText>
          </InconView>
        </View>
        <View>
          <InfoTitle>Timer</InfoTitle>
          <InconView>
            <Icon name="clock-outline" color="#303C42" size={34} />
            <InfoText>50%</InfoText>
          </InconView>
        </View>
      </InfoRow>
    </Container>
  );
};

export default PurifierCard;
