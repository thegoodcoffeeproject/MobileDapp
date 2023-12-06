import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

const Worker = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    
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
export default Worker;