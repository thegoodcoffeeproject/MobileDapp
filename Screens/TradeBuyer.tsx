import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStaticNavigation,NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import * as React from 'react';
import { Platform, ScrollView, Image } from 'react-native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import * as web3 from '@solana/web3.js';
import { Albums } from '../Shared/Albums';
import { Chat } from '../Shared/Chat';
import { Contacts } from '../Shared/Contacts';
import { App1a } from '../Shared/App1a';

import { App1b } from '../Shared/App1b';
import { Weather1 } from '../Shared/Weather1';
import { Screen36 } from '../Shared/Screen36';

import { Screen38 } from '../Shared/Screen38';
import { Scan } from '../Shared/Scan';
import { Form } from '../Shared/Form';
import { Form1 } from '../Shared/Form1';
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text} from "react-native";
import * as Linking from "expo-linking";
import nacl from "tweetnacl";
import bs58 from "bs58";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { decryptPayload } from "../utils/decryptPayload";
import { encryptPayload } from "../utils/encryptPayload";
import { buildUrl } from "../utils/buildUrl";
import MovieList from "../components/MovieList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ActionSheet from "react-native-actions-sheet";
import AddReviewSheet from "../components/AddReviewSheet";
import Toast from "react-native-toast-message";
import { toastConfig } from "../components/ToastConfig";
import { COLORS } from "../constants";


const onConnectRedirectLink = Linking.createURL("onConnect");
const onDisconnectRedirectLink = Linking.createURL("onDisconnect");
const onSignAndSendTransactionRedirectLink = Linking.createURL(
  "onSignAndSendTransaction"
);

const connection = new Connection(clusterApiUrl("devnet"));
//import { Screen } from '../test1/screens/Screen';

const getTabBarIcon =
  (name: React.ComponentProps<typeof MaterialCommunityIcons>['name']) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );

const ChatShownContext = React.createContext({
  isChatShown: false,
  setIsChatShown: (_isChatShown: boolean) => {},
});

const useIsChatShown = () => {
  const { isChatShown } = React.useContext(ChatShownContext);

  return isChatShown;
};

const scrollEnabled = Platform.select({ web: true, default: false });

const AlbumsScreen = () => {
  const { isChatShown, setIsChatShown } = React.useContext(ChatShownContext);

  return (
    <ScrollView>
      <View style={styles.buttons}>
        <Button variant="filled" onPress={() => setIsChatShown(!isChatShown)}>
          {isChatShown ? 'Hide' : 'Show'} Chat
        </Button>
      </View>
      <Albums scrollEnabled={scrollEnabled} />
    </ScrollView>
  );
};

const TradeBuyer = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigateToScreen('MyTable')}>
        <Icon name="home" type="font-awesome" />
      </TouchableOpacity>
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
export default TradeBuyer;