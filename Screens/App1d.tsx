import { useScrollToTop, useTheme,useNavigation,StackActions } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  TextInput,
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


const App1d = ({ route }) => {
  const { signAndSendTransaction, phantomWalletPublicKey, sharedSecret } = route.params;
  const ref = React.useRef<ScrollView>(null);

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
  const [input, setInput] = useState('');

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
            <View>
            <TouchableOpacity style={styles.imageHolder} onPress={() => navigation.navigate('App1c', { page1Input: input, signAndSendTransaction: signAndSendTransaction, phantomWalletPublicKey: phantomWalletPublicKey, sharedSecret: sharedSecret })}>
         
            <Image source={require('../assets/header1b.png')} />
            </TouchableOpacity>
            </View>
              <Text  style={styles.text}>
                
                {`Shit dude 
Hey ${phantomWalletPublicKey.toString()}`}</Text>

              <Button title="Add Review" onPress={openAddReviewSheet} />
              <Button title="Disconnect" onPress={disconnect} />
            
            </View>
          </>
        ) : (
          <View style={{ marginTop: 15 }}>

<Text  style={styles.text}>
                
                {`Shit dude 
Hey ${phantomWalletPublicKey.toString()}`}</Text>
           <TouchableOpacity style={styles.imageHolder} onPress={() => navigation.navigate('App1c', { page1Input: input, signAndSendTransaction: signAndSendTransaction, phantomWalletPublicKey: phantomWalletPublicKey, sharedSecret: sharedSecret })}>
           <Image source={require('../assets/header1b.png')} />
           </TouchableOpacity>
           <Text>Whats yours</Text>
           </View>
        )}
      </View>
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
export default App1d;
