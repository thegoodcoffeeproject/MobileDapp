import { useScrollToTop, useTheme,useNavigation,StackActions } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  type ScrollViewProps,
  type TextProps,

} from 'react-native';
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Buffer } from "buffer";
global.Buffer = global.Buffer || Buffer;
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Platform, TextInput  } from "react-native";
import * as Linking from "expo-linking";
import nacl from "tweetnacl";
import bs58 from "bs58";
import RNPickerSelect from 'react-native-picker-select';
import locationData from '../data/csc.json';

const locationArray: any[] = locationData as any[];
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
import Button from "../components/Button";
import Button1 from "../components/Button1";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ActionSheet from "react-native-actions-sheet";
import AddReviewSheet from "../components/AddReviewSheet";
import Toast from "react-native-toast-message";
import { toastConfig } from "../components/ToastConfig";
import { COLORS } from "../constants";
import { Albums } from '../Shared/Albums';
const onConnectRedirectLink = Linking.createURL("onConnect");
const onDisconnectRedirectLink = Linking.createURL("onDisconnect");
const onSignAndSendTransactionRedirectLink = Linking.createURL(
  "onSignAndSendTransaction"
);

const connection = new Connection(clusterApiUrl("devnet"));

type Props = Partial<ScrollViewProps> & {
  date?: string;
  author?: {
    name: string;
  };
};

const Heading = ({
  style,
  ...rest
}: TextProps & { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.heading, { color: colors.text }, style]} {...rest} />
  );
};

const Paragraph = ({
  style,
  ...rest
}: TextProps & { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.paragraph, { color: colors.text }, style]} {...rest} />
  );
};


const App1b = ({ route }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };
  const { signAndSendTransaction, phantomWalletPublicKey, sharedSecret } = route.params;
  const ref = React.useRef<ScrollView>(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countries = locationData.map(country => ({ label: country.name, value: country.name }));
  const states = selectedCountry ? locationData.find(country => country.name === selectedCountry).states.map(state => ({ label: state.name, value: state.name })) : [];
  const cities = selectedState ? locationData.find(country => country.name === selectedCountry).states.find(state => state.name === selectedState).cities.map(city => ({ label: city.name, value: city.name })) : [];

 
  useScrollToTop(ref);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [deeplink, setDeepLink] = useState<string>("");
  const [dappKeyPair] = useState(nacl.box.keyPair());

  const [session, setSession] = useState<string>();
 

  const [submitting, setSubmitting] = useState(false);
  const actionSheetRef = useRef<ActionSheet>(null);

  // Initialize our app's deeplinking protocol on app start-up
  useEffect(() => {
    const initializeDeeplinks = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };
    initializeDeeplinks();
    const listener = Linking.addEventListener("url", handleDeepLink);
    return () => {
      listener.remove();
    };
  }, []);

  const handleDeepLink = ({ url }: Linking.EventType) => setDeepLink(url);

  // Handle in-bound links
  useEffect(() => {
    setSubmitting(false);
    if (!deeplink) return;

    const url = new URL(deeplink);
    const params = url.searchParams;

    // Handle an error response from Phantom
    if (params.get("errorCode")) {
      const error = Object.fromEntries([...params]);
      const message =
        error?.errorMessage ??
        JSON.stringify(Object.fromEntries([...params]), null, 2);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: message,
      });
      console.log("error: ", message);
      return;
    }

    // Handle a `connect` response from Phantom
    if (/onConnect/.test(url.pathname)) {
      const sharedSecretDapp = nacl.box.before(
        bs58.decode(params.get("phantom_encryption_public_key")!),
        dappKeyPair.secretKey
      );
      const connectData = decryptPayload(
        params.get("data")!,
        params.get("nonce")!,
        sharedSecretDapp
      );
      setSharedSecret(sharedSecretDapp);
      setSession(connectData.session);
      setPhantomWalletPublicKey(new PublicKey(connectData.public_key));
      console.log(`connected to ${connectData.public_key.toString()}`);
    }

    // Handle a `disconnect` response from Phantom
    if (/onDisconnect/.test(url.pathname)) {
      setPhantomWalletPublicKey(null);
      console.log("disconnected");
    }

    // Handle a `signAndSendTransaction` response from Phantom
    if (/onSignAndSendTransaction/.test(url.pathname)) {
      actionSheetRef.current?.hide();
      const signAndSendTransactionData = decryptPayload(
        params.get("data")!,
        params.get("nonce")!,
        sharedSecret
      );
      console.log("signAndSendTrasaction: ", signAndSendTransactionData);
      Toast.show({
        type: "success",
        text1: "Review submitted 🎥",
        text2: signAndSendTransactionData.signature,
      });
    }
  }, [deeplink]);

  // Initiate a new connection to Phantom
  const connect = async () => {
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      cluster: "devnet",
      app_url: "https://ju3tin.github.io/",
      redirect_link: onConnectRedirectLink,
    });
    const url = buildUrl("connect", params);
    Linking.openURL(url);
  };

  // Initiate a disconnect from Phantom
  const disconnect = async () => {
    const payload = {
      session,
    };
    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onDisconnectRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });
    const url = buildUrl("disconnect", params);
    Linking.openURL(url);
  };

  
  // Open the 'Add a Review' sheet defined in `components/AddReviewSheet.tsx`
  const openAddReviewSheet = () => {
    actionSheetRef.current?.show();
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            
        {phantomWalletPublicKey ? (
          <>
          
            <View style={styles.row}>
            <TouchableOpacity style={styles.imageHolder} onPress={() => navigation.navigate('App1a', { signAndSendTransaction: signAndSendTransaction, phantomWalletPublicKey: phantomWalletPublicKey, sharedSecret: sharedSecret })}>
         
         <Image source={require('../assets/header1b.png')} />
         </TouchableOpacity>
            
              <Text  style={styles.text}>
                {`Hey ${phantomWalletPublicKey.toString()}`}</Text>

              <Button title="Add Review" onPress={openAddReviewSheet} />
              <Button title="Disconnect" onPress={disconnect} />
              <Button
  title="Next"
  onPress={() => navigation.navigate('App1c', {
    signAndSendTransaction: signAndSendTransaction,
    phantomWalletPublicKey: phantomWalletPublicKey,
    sharedSecret: sharedSecret
  })}
/>
            
            </View>
          </>
        ) : (
          <View style={{ marginTop: 15 }}>
            <Button title="Connect Phantom" onPress={connect} />
          </View>
        )}
      </View>
      {submitting && (
        <ActivityIndicator
          color={COLORS.WHITE}
          size="large"
          style={styles.spinner}
        />
      )}
      <AddReviewSheet
        actionSheetRef={actionSheetRef}
        phantomWalletPublicKey={phantomWalletPublicKey}
        signAndSendTransaction={signAndSendTransaction}
      />
   
   <View>
   <RNPickerSelect
        onValueChange={(value) => setSelectedCountry(value)}
        items={countries}
        placeholder={{ label: "Select a country...", value: null }}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedState(value)}
        items={states}
        placeholder={{ label: "Select a state...", value: null }}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedCity(value)}
        items={cities}
        placeholder={{ label: "Select a city...", value: null }}
      />
    </View>
   
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Enter text here"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
  },
  text: {
    fontSize: 20, 
    color: 'black'
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 8,
  },
});
export default App1b;
