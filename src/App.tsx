import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  </>
);

const Chat = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View>
        <Text>Chat</Text>
      </View>
    </SafeAreaView>
  </>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
