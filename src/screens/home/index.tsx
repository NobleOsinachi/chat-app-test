import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenContainer, Text } from '../../components';
import theme from '../../theme';
import Contacts from './contacts';
import Chats from './Chats';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: theme.colours.secondary,
  inactiveTintColor: theme.colours.text,
  style: { backgroundColor: theme.colours.background },
};

interface Props {
  route: {
    displayName: string;
    id: string;
  };
}

const Home = (props: Props) => {
  const { user } = props?.route?.params;
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Contacts">
        {(props) => <Contacts {...props} user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Chats">
        {(props) => <Chats {...props} user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

export default Home;
