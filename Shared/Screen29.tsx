import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export const Screen29 = () => {
  return (
    <View style={styles.screen29}>
      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={styles.title}>
        <Text style={styles.helloStevenSmart}>TGCP</Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header5.png")}
      />
      <Text style={[styles.pm, styles.pmLayout]}>Shop</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>Columbian Roast</Text>
      <Image
        style={styles.giftIcon}
        contentFit="cover"
        source={require("../assets/gift.png")}
      />
      <Image
        style={styles.unnamed51}
        contentFit="cover"
        source={require("../assets/unnamed-5-1.png")}
      />
      <View style={styles.card}>
        <View style={styles.bg}>
          <View style={[styles.bg1, styles.bg1Position]} />
        </View>
      </View>
      <View style={styles.button}>
        <View style={[styles.bg2, styles.bg1Position]} />
        <Text style={[styles.text, styles.pm1Typo]}>{`add to cart `}</Text>
        <View style={styles.addNewImage}>
          <View style={[styles.bg3, styles.bg1Position]} />
          <View style={styles.plusIcon}>
            <View style={styles.combinedShape}>
              <View
                style={[
                  styles.combinedShapeChild,
                  styles.rectangle185CopyLayout,
                ]}
              />
              <View
                style={[styles.rectangle185Copy, styles.rectangle185CopyLayout]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pmLayout: {
    height: 32,
    color: Color.colorDarkslategray,
    fontWeight: "600",
  },
  pm1Typo: {
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  bg1Position: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangle185CopyLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xs_5,
    height: "13%",
    position: "absolute",
    width: "100%",
  },
  bgIcon: {
    height: "76.6%",
    top: "36.08%",
    bottom: "-12.68%",
    borderRadius: Border.br_11xl,
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  helloStevenSmart: {
    marginTop: -16.5,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  title: {
    marginTop: -355,
    width: "17.07%",
    right: "43.73%",
    left: "39.2%",
    height: 33,
    top: "50%",
    position: "absolute",
  },
  headerIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "6.03%",
    right: "86.4%",
    bottom: "91.01%",
    left: "7.2%",
  },
  pm: {
    marginTop: 278,
    width: "28.27%",
    left: "-31.2%",
    textAlign: "center",
    height: 32,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontSize: FontSize.size_5xl,
    top: "50%",
    position: "absolute",
  },
  pm1: {
    marginTop: 66,
    width: "58.93%",
    left: "22.93%",
    fontSize: FontSize.bold_size,
    height: 32,
    color: Color.colorDarkslategray,
    fontWeight: "600",
    letterSpacing: 2,
  },
  giftIcon: {
    top: 49,
    left: 328,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  unnamed51: {
    top: 150,
    left: 112,
    width: 174,
    height: 294,
    position: "absolute",
  },
  bg1: {
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  bg: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  card: {
    height: "14.41%",
    width: "92%",
    top: "61.82%",
    bottom: "23.77%",
    left: "8%",
    right: "0%",
    position: "absolute",
  },
  bg2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTan_100,
    shadowColor: "#d9cfc1",
    shadowRadius: 30,
    elevation: 30,
  },
  text: {
    marginTop: -5,
    width: "45.42%",
    left: "27.12%",
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    height: 9,
  },
  bg3: {
    borderRadius: Border.br_81xl,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 45,
    elevation: 45,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  combinedShapeChild: {
    top: "7064%",
    right: "-750%",
    bottom: "-6977%",
    left: "750%",
  },
  rectangle185Copy: {
    top: "7020%",
    right: "-806%",
    bottom: "-6933%",
    left: "806%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  combinedShape: {
    backgroundColor: Color.colorRosybrown_200,
    width: 10,
    height: 10,
  },
  plusIcon: {
    height: "50%",
    width: "50%",
    top: "20%",
    right: "25%",
    bottom: "30%",
    left: "25%",
    position: "absolute",
  },
  addNewImage: {
    height: "52.63%",
    width: "6.78%",
    top: "23.68%",
    right: "86.78%",
    bottom: "23.68%",
    left: "6.44%",
    position: "absolute",
  },
  button: {
    height: "4.68%",
    width: "78.67%",
    top: "84.85%",
    right: "7.73%",
    bottom: "10.47%",
    left: "13.6%",
    position: "absolute",
  },
  screen29: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen29;
