import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Login from './screens/login';
import Chat from './screens/Chat';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: theme.colours.secondary,
  inactiveTintColor: theme.colours.text,
  style: { backgroundColor: theme.colours.background },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
