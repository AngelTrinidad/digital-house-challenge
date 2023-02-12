import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainStack from './stacks/MainStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
