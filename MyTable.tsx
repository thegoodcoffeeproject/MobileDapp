import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SafeAreaView from 'react-native-safe-area-view';
import { useState } from 'react';
import Form1 from './Screens/Form1';
import NestedNavigator from './App';
import App2 from './App';
import MyTable2 from './MyTable2';


const MyTable = ({ route }) => {
  const navigation = useNavigation();
  const condition = true; // Replace this with your actual condition

  const handlePress = () => {
    if (condition) {
      navigation.navigate('App1b');
    } else {
      navigation.navigate('Community');
    }
  };


  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableOpacity  onPress={handlePress}>
    <Image title="Go to Details" style={styles.tinyLogo} source={require('./images/image26.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('TradeBuyer')}>
      <Image title="Go to Details" style={styles.tinyLogo} source={require('./images/image27.png')} />
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={() => navigation.navigate('MyTable3')}>
      <Image title="Go to Details" style={styles.tinyLogo} source={require('./images/image28.png')} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('MyTable2')}>
      <Image title="Go to Details" style={styles.tinyLogo} source={require('./images/image25.png')} />
      </TouchableOpacity>
    </View>
  </View>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({ 
  container: { 
    padding: 15,
  }, 
  tinyLogo: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 66,
    height: 58,
  },
  tableHeader: { 
    backgroundColor: '#DCDCDC',
    height: '400px',
  }, 
  dude3: {
    height: '80px',
    borderBottomWidth: 0,
    fontSize: '80px',
  },
  cell: {
    height: '100%',
    flex: 40
  },
  rows: {
    height: 150,
    style: {
        fontFamily: 'arial',
        fontSize: '100px',
        fontWeight: 0,
        minHeight: '70px',
        '&:not(:last-of-type)': {
            borderBottomStyle: 'solid',
            borderBottomWidth: '0px',
        },
    },}
});
export default MyTable;