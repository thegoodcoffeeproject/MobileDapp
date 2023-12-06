import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';
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
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
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

const HomeTabs = createBottomTabNavigator({
  screenOptions: ({ theme }) => ({
    tabBarActiveTintColor: theme.colors.notification,
    headerShown: false
  }),
  screens: {
    Albums: {
      screen: AlbumsScreen,
      navigationOptions: {
        header: null,
      },
      options: {
        tabBarIcon: getTabBarIcon('home'),
        headerShown:false
      },
    },
    App1a: {
      screen: App1a,
      screenOptions: {
        headerShown: false,
      },
      navigationOptions: {
        header: null,
      },
      options: {
        tabBarIcon: getTabBarIcon('magnify'),
        headerShown:false
      },
    },
    App1da: {
      screen: App1b,
      screenOptions: {
        headerShown: false,
      },
      navigationOptions: {
        header: null,
      },
      options: {
        tabBarIcon: getTabBarIcon('magnify'),
        headerShown:false
      },
    },
    App2a: {
      screen: Screen36,
      options: {
        tabBarIcon: getTabBarIcon('contacts'),
        headerShown:false
      },
    },
    App2sa: {
      screen: Scan,
      options: {
        tabBarIcon: getTabBarIcon('contacts'),
        headerShown:false
      },
    },
    App21sa: {
      screen: Form,
      options: {
        tabBarIcon: getTabBarIcon('contacts'),
        headerShown:false
      },
    },
   
    App4a: {
      screen: Weather1,
      options: {
        tabBarIcon: getTabBarIcon('account-outline'),
        headerShown:false
      },
    },
    Chat: {
      screen: Chat,
      options: {
        tabBarIcon: getTabBarIcon('message-reply'),
        headerShown:false
      },
      if: useIsChatShown,
    },
  },
});

const RootStack = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeTabs,
  },
  navigationOptions: {
    header: null,
  }
});

const Navigation = createStaticNavigation(RootStack);

export function App2() {
  const [isChatShown, setIsChatShown] = React.useState(false);

  return (
    <ChatShownContext.Provider value={{ isChatShown, setIsChatShown }}
    >
      <NavigationIndependentTree
      >
        <Navigation />
      </NavigationIndependentTree>
    </ChatShownContext.Provider>
  );
}
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 12,
  },
});
