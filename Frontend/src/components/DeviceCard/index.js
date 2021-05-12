import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Water from 'react-native-vector-icons/Entypo';
import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';

import {
  Header,
  Title,
  InfoRow,
  InconView,
  InfoTitle,
  InfoText,
  PowerButton,
  PowerView,
  TitleView,
  Context,
  ChartView,
} from './styles';
import {sendMobileSensorCommands} from '../../service';

const DeviceCard = props => {
  const [deviceName, setDeviceName] = useState(
    props.name ? props.name : 'device',
  );
  const [isOn, setIsOn] = useState(props.active);
  const [isOpen, setIsOpen] = useState(false);

  const contentInset = {top: 30, bottom: 30};
  const fill = 'rgb(124, 179,66)';
  const data = Object.values(props.metrics).map(x => {
    return parseInt(x, 10);
  });
  const gasLabels = Object.keys(props.metrics);

  const powerMobileSensor = power => {
    setIsOn(power);
    sendMobileSensorCommands({
      id: props.id,
      active: power,
    });
  };

  const renderAirQualityText = () => {
    let quality = '-';
    let textColor = '#7cb342';
    if (props.quality === 'good') {
      quality = 'Boa';
      textColor = '#7cb342';
    } else if (props.quality === 'medium') {
      quality = 'Média';
      textColor = '#ff8800';
    } else if (props.quality === 'bad') {
      quality = 'Ruim';
      textColor = '#C94242';
    }
    return <InfoText style={{color: textColor}}>{quality}</InfoText>;
  };

  const renderBatteryText = percentage => {
    let textColor = '#7cb342';
    if (percentage > 0 && percentage <= 25) {
      textColor = '#C94242';
    } else if (percentage > 26 && percentage <= 70) {
      textColor = '#ff8800';
    } else if (percentage > 70) {
      textColor = '#7cb342';
    }
    return <InfoText style={{color: textColor}}>{percentage}%</InfoText>;
  };

  return (
    <>
      {isOpen ? (
        <Context>
          <TitleView>
            <TouchableOpacity
              onPress={() => {
                if (isOn) {
                  setIsOpen(!isOpen);
                }
              }}>
              <Icon name="pencil" color="#303C42" size={20} />
            </TouchableOpacity>
            <Title>{deviceName}</Title>
            <TouchableOpacity
              onPress={() => {
                if (isOn) {
                  setIsOpen(!isOpen);
                }
              }}>
              <Icon name="chevron-up" color="#303C42" size={20} />
            </TouchableOpacity>
          </TitleView>
          <InfoRow>
            <View>
              <InfoTitle>Bateria</InfoTitle>
              <InconView>
                <Icon name="battery-60" color="#303C42" size={34} />
                {props.battery ? (
                  renderBatteryText(props.battery)
                ) : (
                  <InfoText>-</InfoText>
                )}
              </InconView>
            </View>

            {isOn ? (
              <PowerView>
                <InfoTitle>Ligado</InfoTitle>
                <InconView>
                  <Icon name="power" color="#7cb342" size={48} />
                </InconView>
              </PowerView>
            ) : (
              <PowerView>
                <InfoTitle>Desligado</InfoTitle>
                <InconView>
                  <Icon name="power" color="#C94242" size={48} />
                </InconView>
              </PowerView>
            )}

            <View>
              <InfoTitle>Qualidade</InfoTitle>
              <InconView>
                <Icon name="weather-windy" color="#303C42" size={34} />
                {renderAirQualityText()}
              </InconView>
            </View>
          </InfoRow>

          <InfoRow style={{justifyContent: 'space-around'}}>
            <View>
              <InfoTitle>Temperatura</InfoTitle>
              <InconView>
                <Icon name="thermometer" color="#303C42" size={34} />
                <InfoText>
                  {props.temperature ? `${props.temperature}ºC` : '-'}
                </InfoText>
              </InconView>
            </View>

            <View>
              <InfoTitle>Umidade</InfoTitle>
              <InconView>
                <Water
                  name="water"
                  color="#303C42"
                  size={28}
                  style={{marginRight: 8}}
                />
                <InfoText>
                  {props.humidity ? `${props.humidity}%` : '-'}
                </InfoText>
              </InconView>
            </View>
          </InfoRow>

          <ChartView>
            <InfoTitle>Relatório Gŕafico de gases</InfoTitle>
            <View style={{height: 200, flexDirection: 'row'}}>
              <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `${value}%`}
              />
              <View style={{width: '90%'}}>
                <BarChart
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{height: 200, width: '100%'}}
                  data={data}
                  svg={{fill}}
                  contentInset={{top: 30, bottom: 30}}>
                  <Grid />
                </BarChart>
                <XAxis
                  style={{}}
                  data={data}
                  formatLabel={(value, index) => gasLabels[index]}
                  contentInset={{left: 20, right: 20}}
                  svg={{fontSize: 10, fill: 'black'}}
                />
              </View>
            </View>
          </ChartView>
        </Context>
      ) : (
        <Header>
          <TitleView>
            <TouchableOpacity>
              <Icon name="pencil" color="#303C42" size={20} />
            </TouchableOpacity>
            <Title>{deviceName}</Title>
            <TouchableOpacity
              onPress={() => {
                if (isOn) {
                  setIsOpen(!isOpen);
                }
              }}>
              <Icon name="chevron-down" color="#303C42" size={20} />
            </TouchableOpacity>
          </TitleView>
          {isOn ? (
            <>
              <InfoRow>
                <View>
                  <InfoTitle>Bateria</InfoTitle>
                  <InconView>
                    <Icon name="battery-60" color="#303C42" size={34} />
                    {props.battery ? (
                      renderBatteryText(props.battery)
                    ) : (
                      <InfoText>-</InfoText>
                    )}
                  </InconView>
                </View>
                <PowerButton
                  onPress={() => {
                    powerMobileSensor(!isOn);
                  }}>
                  {isOn ? (
                    <PowerView>
                      <InfoTitle>Ligado</InfoTitle>
                      <InconView>
                        <Icon name="power" color="#7cb342" size={48} />
                      </InconView>
                    </PowerView>
                  ) : (
                    <PowerView>
                      <InfoTitle>Desligado</InfoTitle>
                      <InconView>
                        <Icon name="power" color="#C94242" size={48} />
                      </InconView>
                    </PowerView>
                  )}
                </PowerButton>
                <View>
                  <InfoTitle>Qualidade</InfoTitle>
                  <InconView>
                    <Icon name="weather-windy" color="#303C42" size={34} />
                    {renderAirQualityText()}
                  </InconView>
                </View>
              </InfoRow>
              <InfoRow style={{justifyContent: 'space-around'}}>
                <View>
                  <InfoTitle>Temperatura</InfoTitle>
                  <InconView>
                    <Icon name="thermometer" color="#303C42" size={34} />
                    <InfoText>
                      {props.temperature ? `${props.temperature}ºC` : '-'}
                    </InfoText>
                  </InconView>
                </View>

                <View>
                  <InfoTitle>Umidade</InfoTitle>
                  <InconView>
                    <Water
                      name="water"
                      color="#303C42"
                      size={28}
                      style={{marginRight: 8}}
                    />
                    <InfoText>
                      {props.humidity ? `${props.humidity}%` : '-'}
                    </InfoText>
                  </InconView>
                </View>
              </InfoRow>
            </>
          ) : (
            <>
              <InfoRow>
                <View>
                  <InfoTitle>Bateria</InfoTitle>
                  <InconView>
                    <Icon name="battery-60" color="#828384" size={34} />
                  </InconView>
                </View>
                <PowerButton
                  onPress={() => {
                    powerMobileSensor(!isOn);
                  }}>
                  {isOn ? (
                    <PowerView>
                      <InfoTitle>Ligado</InfoTitle>
                      <InconView>
                        <Icon name="power" color="#7cb342" size={48} />
                      </InconView>
                    </PowerView>
                  ) : (
                    <PowerView>
                      <InfoTitle>Desligado</InfoTitle>
                      <InconView>
                        <Icon name="power" color="#C94242" size={48} />
                      </InconView>
                    </PowerView>
                  )}
                </PowerButton>
                <View>
                  <InfoTitle>Qualidade</InfoTitle>
                  <InconView>
                    <Icon name="weather-windy" color="#303C42" size={34} />
                  </InconView>
                </View>
              </InfoRow>
              <InfoRow style={{justifyContent: 'space-around'}}>
                <View>
                  <InfoTitle>Temperatura</InfoTitle>
                  <InconView>
                    <Icon name="thermometer" color="#303C42" size={34} />
                  </InconView>
                </View>

                <View>
                  <InfoTitle>Umidade</InfoTitle>
                  <InconView>
                    <Water
                      name="water"
                      color="#303C42"
                      size={28}
                      style={{marginRight: 8}}
                    />
                  </InconView>
                </View>
              </InfoRow>
            </>
          )}
        </Header>
      )}
    </>
  );
};

export default DeviceCard;
