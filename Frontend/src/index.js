import React, {useEffect, useState} from 'react';
import {ONESIGNAL_TOKEN} from '@env';
import OneSignal from 'react-native-onesignal';

import Routes from './routes';

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState();

  async function setupOnesignal() {
    OneSignal.setLogLevel(6, 0);

    OneSignal.setAppId(ONESIGNAL_TOKEN);
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });

    const deviceState = await OneSignal.getDeviceState();
    alert(deviceState.pushToken);
    setIsSubscribed(deviceState.isSubscribed);
  }
  useEffect(() => {
    setupOnesignal();
  }, []);

  return <Routes />;
};

export default App;
