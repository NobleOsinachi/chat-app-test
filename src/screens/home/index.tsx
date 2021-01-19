import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenContainer, Text } from '../../components';
import theme from '../../theme';
import Contacts from './Contacts';
import Chats from './Chats';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: theme.colours.secondary,
  inactiveTintColor: theme.colours.text,
  style: { backgroundColor: theme.colours.background },
};

const Home = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen name="Contacts" component={Contacts} />
    <Tab.Screen name="Chats" component={Chats} />
    <Tab.Screen name="Logout" component={Logout} />
  </Tab.Navigator>
);

export default Home;
