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

  const renderStatusText = (status) => {
    let quality = "-";
    let textColor = "#7cb342";
    if (status === "good") {
      quality = "Boa";
      textColor = "#7cb342";
    } else if (status === "medium") {
      quality = "Média";
      textColor = "#ff8800";
    } else if (status === "bad") {
      quality = "Ruim";
      textColor = "#C94242";
    }
    return (<InfoText style={{color: textColor}}>{quality}</InfoText>);
  }

  const renderBatteryText = (percentage) => {
    let textColor = "#7cb342";
    if (percentage > 0 && percentage <= 25) {
      textColor = "#C94242";
    } else if (percentage > 26 && percentage <= 70) {
      textColor = "#ff8800";
    } else if (percentage > 70) {
      textColor = "#7cb342";
    }
    return (<InfoText style={{color: textColor}}>{percentage}%</InfoText>);
  }

  return (
    <Container>
      <Title>Purificador</Title>
      <InfoRow>
        <View>
          <InfoTitle>Bateria</InfoTitle>
          <InconView>
            <Icon name="battery-60" color="#303C42" size={34} />
            {props.battery ?
              renderBatteryText(props.battery) : (<InfoText>-</InfoText>)}
          </InconView>
        </View>
        <View>
          <InfoTitle>Filtro</InfoTitle>
          <InconView>
            <Icon name="air-filter" color="#303C42" size={34} />
            {props.filter_status ?
              renderStatusText(props.filter_status) : (<InfoText>-</InfoText>)}
          </InconView>
        </View>
        <View>
          <InfoTitle>Luz UV</InfoTitle>
          <InconView>
            <Icon name="lightbulb-on" color="#303C42" size={34} />
            {props.light_status ?
              renderStatusText(props.light_status) : (<InfoText>-</InfoText>)}
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
