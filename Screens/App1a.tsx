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
import { Buffer } from "buffer";
global.Buffer = global.Buffer || Buffer;
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import nacl from "tweetnacl";
import bs58 from "bs58";
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import locationData from '../data/csc.json';


import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
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
import * as Location from 'expo-location';
const onConnectRedirectLink = Linking.createURL("onConnect");
const onDisconnectRedirectLink = Linking.createURL("onDisconnect");
const onSignAndSendTransactionRedirectLink = Linking.createURL(
  "onSignAndSendTransaction"
);
/*

<Text style={('flex')}>{`${//
//<CountryDropdown value={country} onChange={(val) => setCountry(val)} />
//<RegionDropdown country={country} value={region} onChange={(val) => setRegion(val)} />
}`}</Text>

*/
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



const App1a = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [apiResponse1, setApiResponse1] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []); 


  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
const lat1 = JSON.stringify(location.coords.latitude, null, 2);

const long1 = JSON.stringify(location.coords.longitude, null, 2);
       // Send API call
    axios.post(`https://geocode.maps.co/reverse?lat=${lat1}&lon=${long1}`)
    .then(function (response) {
      console.log(response);
      setApiResponse(response.data); 
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.post(`https://api.weatherapi.com/v1/current.json?key=764bb84c37424d16a93111943230512&q=${lat1},${long1}&aqi=no`)
    .then(function (response) {
      console.log(response);
      setApiResponse1(response.data); 
    })
    .catch(function (error) {
      console.log(error);
    });
     
    })();
  
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const ref = React.useRef<ScrollView>(null);

  useScrollToTop(ref);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [deeplink, setDeepLink] = useState<string>("");
  const [dappKeyPair] = useState(nacl.box.keyPair());

  const [sharedSecret, setSharedSecret] = useState<Uint8Array>();
  const [session, setSession] = useState<string>();
  const [phantomWalletPublicKey, setPhantomWalletPublicKey] =
    useState<PublicKey | null>(null);

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

  // Initiate a new transaction via Phantom. We call this in `components/AddReviewSheet.tsx` to send our movie review to the Solana network
  const signAndSendTransaction = async (transaction: Transaction) => {
    if (!phantomWalletPublicKey) return;
    setSubmitting(true);
    transaction.feePayer = phantomWalletPublicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    const serializedTransaction = transaction.serialize({
      requireAllSignatures: false,
    });
    const payload = {
      session,
      transaction: bs58.encode(serializedTransaction),
    };
    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onSignAndSendTransactionRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });
    const url = buildUrl("signAndSendTransaction", params);
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
            <TouchableOpacity style={styles.imageHolder} onPress={() => navigation.navigate('MyTable', { signAndSendTransaction: signAndSendTransaction, phantomWalletPublicKey: phantomWalletPublicKey, sharedSecret: sharedSecret })}>
         
         <Image source={require('../assets/header1b.png')} />
         </TouchableOpacity>
              <Text  style={styles.text}>
                {`Hey ${phantomWalletPublicKey.toString()}`}
               
                </Text>
                <Text style={styles.text}>
  {`Longitude: ${JSON.stringify(location.coords.longitude, null, 2)}`}
</Text>
<Text style={styles.text}>
  {`Latitude: ${JSON.stringify(location.coords.latitude, null, 2)}`}
</Text>

<Text> {`API Response: ${JSON.stringify(apiResponse.address.state, null, 2)}`}</Text>
<Text> {currentDate}</Text>
<Text> {`API Response: ${JSON.stringify(apiResponse.address.state_district, null, 2)}`}</Text>
<Text> {`API Response: ${JSON.stringify(apiResponse1.current.temp_c, null, 2)}\u00b0C`}</Text>
<Text> {`API Response: ${JSON.stringify(apiResponse1.current.condition.text, null, 2)}`}</Text>

              <Button title="Disconnect" onPress={disconnect} />
              <Button
  title="Next"
  onPress={() => navigation.navigate('App1b', {
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
export default App1a;
