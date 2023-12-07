import React from 'react';
import { Text, View } from 'react-native';
import App1a from './Screens/App1a';
import App1b from './Screens/App1b';
import App1c from './Screens/App1c';
import App1d from './Screens/App1d';

import App from './App';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

const getTabBarIcon =
  (name: React.ComponentProps<typeof MaterialCommunityIcons>['name']) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );

  const getTabBarIcon1 =
  (name: React.ComponentProps<typeof Feather>['name']) =>
  ({ color, size }: { color: string; size: number }) => (
    <Feather name={name} color={color} size={size} />
  );
  
  const getTabBarIcon2 =
  (name: React.ComponentProps<typeof Entypo>['name']) =>
  ({ color, size }: { color: string; size: number }) => (
    <Entypo name={name} color={color} size={size} />
  );

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <Text>Home!</Text>
  </View>
);
const HomeScreen3 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Home3!</Text>
    </View>
  );
  const HomeScreen2 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Home2!</Text>
    </View>
  );
  const HomeScreen1 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Home1!</Text>
    </View>
  );
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings!</Text>
  </View>
);

const NestedStack = createStackNavigator();
const NestedNavigator = () => {
    return (
      <NestedStack.Navigator initialRouteName="App1a" screenOptions={{headerShown: false}}>
        <NestedStack.Screen name="App1a" component={App1a}   options={{ headerShown: false }}/>
        <NestedStack.Screen name="App1b" component={App1b}  options={{ headerShown: false }}/>
        <NestedStack.Screen name="App1c" component={App1c}  options={{ headerShown: false }}/>
        <NestedStack.Screen name="App1d" component={App1d}  options={{ headerShown: false }}/>
      </NestedStack.Navigator>
    );
  };

const MyTable4 = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen name="Home1" component={NestedNavigator} options={{ headerShown: false, tabBarIcon: getTabBarIcon('home')}}/>
      <Tab.Screen name="Home2" component={HomeScreen2} options={{ headerShown: false, tabBarIcon: getTabBarIcon('magnify')}}/>
      <Tab.Screen name="Home3" component={HomeScreen3} options={{ headerShown: false, tabBarIcon: getTabBarIcon2('circle-with-plus') }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: getTabBarIcon('heart') }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, tabBarIcon: getTabBarIcon1('user')}}/>
    </Tab.Navigator>
  );
}

export default MyTable4;