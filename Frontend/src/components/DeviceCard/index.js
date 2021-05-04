import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const DeviceCard = () => {
  const [deviceName, setDeviceName] = useState('device');
  const [isOn, setIsOn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const contentInset = {top: 30, bottom: 30};
  const fill = 'rgb(124, 179,66)';
  const data = [100, 23, 32, 3, 6];
  const gasAray = ['Particulas', 'O2', 'CO', 'NO2', 'SO2'];

  return (
    <>
      {isOpen ? (
        <Context>
          <TitleView>
            <View />
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
          <InfoRow>
            <View>
              <InfoTitle>Bateria</InfoTitle>
              <InconView>
                <Icon name="battery-60" color="#303C42" size={34} />
                <InfoText>50%</InfoText>
              </InconView>
            </View>

            <PowerView>
              <InfoTitle>Ligado</InfoTitle>
              <InconView>
                <Icon name="power" color="#7cb342" size={48} />
              </InconView>
            </PowerView>

            <View>
              <InfoTitle>Filtro</InfoTitle>
              <InconView>
                <Icon name="lightbulb-on" color="#303C42" size={34} />
                <InfoText>50%</InfoText>
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
                  formatLabel={(value, index) => gasAray[index]}
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
            <View />
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
          <InfoRow>
            {isOn ? (
              <>
                <View>
                  <InfoTitle>Bateria</InfoTitle>
                  <InconView>
                    <Icon name="battery-60" color="#303C42" size={34} />
                    <InfoText>50%</InfoText>
                  </InconView>
                </View>
                <PowerButton
                  onPress={() => {
                    setIsOn(!isOn);
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
                  <InfoTitle>Filtro</InfoTitle>
                  <InconView>
                    <Icon name="lightbulb-on" color="#303C42" size={34} />
                    <InfoText>50%</InfoText>
                  </InconView>
                </View>
              </>
            ) : (
              <>
                <View>
                  <InfoTitle>Bateria</InfoTitle>
                  <InconView>
                    <Icon name="battery-60" color="#828384" size={34} />
                  </InconView>
                </View>
                <PowerButton
                  onPress={() => {
                    setIsOn(!isOn);
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
                  <InfoTitle>Filtro</InfoTitle>
                  <InconView>
                    <Icon name="lightbulb-on" color="#828384" size={34} />
                  </InconView>
                </View>
              </>
            )}
          </InfoRow>
        </Header>
      )}
    </>
  );
};

export default DeviceCard;
