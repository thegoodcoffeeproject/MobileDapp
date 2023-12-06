import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

const Stack = createStackNavigator();

const FormPage1 = ({ navigation }) => {
  const [input, setInput] = useState('');

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Input for page 1"
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate('FormPage2', { page1Input: input })}
      />
    </View>
  );
};

// Repeat similar pattern for FormPage2, FormPage3, FormPage4

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormPage1">
        <Stack.Screen name="FormPage1" component={FormPage1} />
        {/* Add other form pages here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;