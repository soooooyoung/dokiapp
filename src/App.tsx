import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Container from './screens/Container';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Container />
    </NavigationContainer>
  );
};

export default App;
