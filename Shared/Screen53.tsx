import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

export const Screen53 = () => {
  return (
    <View style={styles.screen53}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.bg1, styles.bgPosition]} />
        <View style={[styles.topBg, styles.bgPosition]} />
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.bg2, styles.bg2Position]} />
        <Text style={[styles.text, styles.textLayout]}>{`View Details `}</Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Text style={[styles.text1, styles.pmTypo]}>{`Finish
`}</Text>
      </View>
      <Image
        style={[styles.bottomMenuIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={styles.screen53Child}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.screen53Item}
        contentFit="cover"
        source={require("../assets/ellipse-232.png")}
      />
      <Text
        style={[styles.pm, styles.pmTypo]}
      >{`Harvest Stage Complete `}</Text>
      <Image
        style={styles.screen53Inner}
        contentFit="cover"
        source={require("../assets/ellipse-2311.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-245.png")}
      />
      <View style={styles.storyParent}>
        <View style={[styles.bg, styles.bgPosition]}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.textPosition]}>2/5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonLayout: {
    width: "78.67%",
    height: "4.68%",
    position: "absolute",
  },
  bg2Position: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textLayout: {
    height: 18,
    fontSize: FontSize.size_smi,
    left: "28.81%",
    width: "45.42%",
    marginTop: -9,
    letterSpacing: 2,
  },
  pmTypo: {
    color: Color.colorSienna,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    textAlign: "center",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  bg1: {
    height: "96.37%",
    top: "3.63%",
    backgroundColor: Color.colorSienna,
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
  topBg: {
    height: "76.54%",
    bottom: "23.46%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSnow,
    left: "0%",
    right: "0%",
    top: "0%",
  },
  bg: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  bg2: {
    backgroundColor: Color.colorTan_100,
  },
  text: {
    textAlign: "center",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    height: 18,
    fontSize: FontSize.size_smi,
    left: "28.81%",
    width: "45.42%",
    marginTop: -9,
  },
  button: {
    top: "73.77%",
    right: "10.13%",
    bottom: "21.55%",
    left: "11.2%",
  },
  bg3: {
    backgroundColor: Color.colorWhite,
  },
  text1: {
    height: 18,
    fontSize: FontSize.size_smi,
    left: "28.81%",
    width: "45.42%",
    marginTop: -9,
    letterSpacing: 2,
    color: Color.colorSienna,
  },
  button1: {
    top: "82.51%",
    right: "11.2%",
    bottom: "12.81%",
    left: "10.13%",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    overflow: "hidden",
  },
  image4Icon: {
    top: 51,
    left: 180,
    width: 24,
    height: 24,
    position: "absolute",
  },
  screen53Child: {
    top: -246,
    left: 725,
    width: 293,
    height: 292,
    position: "absolute",
  },
  screen53Item: {
    top: 223,
    left: 37,
    width: 299,
    height: 298,
    position: "absolute",
  },
  pm: {
    marginTop: -66,
    width: "42.4%",
    left: "28.53%",
    fontSize: FontSize.size_3xl,
    height: 65,
  },
  screen53Inner: {
    top: 239,
    left: 56,
    width: 262,
    height: 266,
    position: "absolute",
  },
  groupIcon: {
    top: 124,
    left: 99,
    width: 175,
    height: 173,
    position: "absolute",
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
  },
  mask: {
    backgroundColor: Color.colorTan_100,
  },
  image: {
    height: "84.42%",
    width: "84.44%",
    top: "7.88%",
    right: "7.78%",
    bottom: "7.69%",
    left: "7.78%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -10,
    left: "24.07%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 2,
    top: "50%",
  },
  storyParent: {
    height: "6.4%",
    width: "14.4%",
    top: "33.37%",
    right: "42.67%",
    bottom: "60.22%",
    left: "42.93%",
    position: "absolute",
  },
  screen53: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen53;
