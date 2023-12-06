import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CardContainer1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.bgParent}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.bg1, styles.bgLayout]} />
        <View style={[styles.bg2, styles.bgLayout]} />
      </View>
      <Text style={[styles.pm, styles.pmTypo]}>shop</Text>
      <Text style={styles.pm1}>profile</Text>
      <Text style={[styles.pm2, styles.pmTypo]}>{`rewards `}</Text>
      <Image
        style={styles.shoppingCartIcon}
        contentFit="cover"
        source={require("../assets/shoppingcart.png")}
      />
      <Image
        style={[styles.giftIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/gift.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    bottom: "0%",
    width: "28.38%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  pmTypo: {
    height: 32,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    top: "50%",
    width: "32.92%",
    marginTop: 6,
    position: "absolute",
  },
  iconPosition: {
    top: 19,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  bg: {
    right: "0%",
    left: "71.62%",
  },
  bg1: {
    right: "35.81%",
    left: "35.81%",
  },
  bg2: {
    right: "71.62%",
    left: "0%",
  },
  bgParent: {
    height: "93.42%",
    width: "91.93%",
    right: "4.66%",
    bottom: "6.58%",
    left: "3.42%",
    top: "0%",
    position: "absolute",
  },
  pm: {
    left: "0%",
  },
  pm1: {
    left: "67.08%",
    height: 19,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    top: "50%",
    width: "32.92%",
    marginTop: 6,
    position: "absolute",
  },
  pm2: {
    left: "33.23%",
  },
  shoppingCartIcon: {
    top: 20,
    left: 38,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  giftIcon: {
    left: 148,
  },
  userIcon: {
    left: 253,
  },
  groupParent: {
    height: "9.36%",
    width: "85.87%",
    top: "30.05%",
    right: "5.87%",
    bottom: "60.59%",
    left: "8.27%",
    position: "absolute",
  },
});

export default CardContainer1;
