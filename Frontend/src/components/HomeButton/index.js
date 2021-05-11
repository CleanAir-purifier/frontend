import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {OuterCircle, InnerCircle} from './styles';

const HomeButton = props => {
  const [buttonColor, setButtonColor] = useState('#7CB342');

  useEffect(() => {
    if (props.isOn) {
      setButtonColor('#7CB342');
    } else {
      setButtonColor('#C94242');
    }
  }, [props.isOn]);

  function powerPurifier() {
    // eslint-disable-next-line no-alert
    props.powerPurifier(!props.isOn);
  }

  function AddNewPurifier() {
    props.onButtonClick(true);
  }

  return (
    <>
      {props.isAdd ? (
        <OuterCircle
          activeOpacity={0.8}
          onPress={() => {
            AddNewPurifier();
          }}>
          <InnerCircle>
            <Icon name="add" color="#7CB342" size={100} />
          </InnerCircle>
        </OuterCircle>
      ) : (
        <OuterCircle
          activeOpacity={0.8}
          onPress={() => {
            powerPurifier();
          }}>
          <InnerCircle>
            <Icon name="power-settings-new" color={buttonColor} size={100} />
          </InnerCircle>
        </OuterCircle>
      )}
    </>
  );
};

export default HomeButton;
