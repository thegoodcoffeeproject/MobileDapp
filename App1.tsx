import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity,Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };  
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={() => navigateToScreen('Screen1')}>
        <Icon name="home" type="font-awesome" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen2')}>
        <Icon name="book" type="font-awesome" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen3')}>
        <Icon name="pencil" type="font-awesome" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen4')}>
        <Icon name="info-circle" type="font-awesome" />
      </TouchableOpacity>
    </View>   
  );
};

export default HomeScreen;
