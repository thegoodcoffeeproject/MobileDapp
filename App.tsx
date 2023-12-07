import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTable from './MyTable';
import MyTable2 from './MyTable2';
import MyTable3 from './MyTable3';
import MyTable4 from './MyTable4';
import Screen1 from './MyTable';
import TradeBuyer from './Screens/TradeBuyer';
import Shop from './Screens/Shop';
import Community from './Screens/Community';
import Worker from './Screens/Worker';
import App1a from './Screens/App1a';
import App1b from './Screens/App1b';
import App1c from './Screens/App1c';
import App1d from './Screens/App1d';
//import Form1 from './Screens/Form1';

const Stack = createStackNavigator();
const NestedStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App2 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={MyTable} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={Worker} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTable">
        <Stack.Screen name="MyTable2" component={MyTable2}  options={{ headerShown: false }}/>
        <Stack.Screen name="MyTable3" component={MyTable3}  options={{ headerShown: false }}/>
        <Stack.Screen name="MyTable4" component={MyTable4}  options={{ headerShown: false }}/>
        <Stack.Screen name="MyTable" component={MyTable}  options={{ headerShown: false }}/>
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="TradeBuyer" component={TradeBuyer} options={{ headerShown: false }}/>
        <Stack.Screen name="Form1" component={NestedNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Worker" component={Worker} />
        <Stack.Screen name="App1a" component={App1a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

export default App;