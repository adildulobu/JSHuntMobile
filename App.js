// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './src/config/StatusBarConfig'

import Main from './src/pages/main'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#da552f' },
              headerTitleStyle: { alignSelf: 'center' },
            }}
      >
        <Stack.Screen name="JSHunt" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}