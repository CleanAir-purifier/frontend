import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {OuterCircle, InnerCircle} from './styles';

const HomeButton = props => {
  const [isOn, setIsOn] = useState(true);
  const [buttonColor, setButtonColor] = useState('#7CB342');

  useEffect(() => {
    if (isOn) {
      setButtonColor('#7CB342');
    } else {
      setButtonColor('#C94242');
    }
  }, [isOn]);

  function onPressButton() {
    // eslint-disable-next-line no-alert
    setIsOn(!isOn);
  }
  return (
    <OuterCircle
      activeOpacity={0.8}
      onPress={() => {
        onPressButton();
      }}>
      <InnerCircle>
        {props.isAdd === true ? (
          <Icon name="add" color="#7CB342" size={100} />
        ) : (
          <Icon name="power-settings-new" color={buttonColor} size={100} />
        )}
      </InnerCircle>
    </OuterCircle>
  );
};

export default HomeButton;
