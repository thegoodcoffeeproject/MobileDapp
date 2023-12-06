import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTable from './MyTable';
import MyTable2 from './MyTable2';
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



const App2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App1a">
        <Stack.Screen name="App1a" component={App1a}  options={{ headerShown: false }}/>
        <Stack.Screen name="App1b" component={App1b}  options={{ headerShown: false }}/>
        <Stack.Screen name="App1d" component={App1d} options={{ headerShown: false }}/>
        <Stack.Screen name="App1c" component={App1c} options={{ headerShown: false }}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App2;