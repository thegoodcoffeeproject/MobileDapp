import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

export const Screen68 = () => {
  return (
    <View style={styles.screen68}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.bg1, styles.bgPosition]} />
        <View style={[styles.topBg, styles.bgPosition]} />
      </View>
      <View style={styles.button}>
        <View style={[styles.bg2, styles.bg2Position]} />
        <Text style={[styles.text, styles.textLayout]}>{`View Details `}</Text>
      </View>
      <View style={[styles.button1, styles.buttonPosition]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Text style={[styles.text1, styles.textTypo]}>{`Finish
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
        style={styles.screen68Child}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.screen68Item}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Text style={[styles.pm, styles.textTypo]}>{`Plantation 
Complete`}</Text>
      <Image
        style={styles.screen68Inner}
        contentFit="cover"
        source={require("../assets/ellipse-231.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-245.png")}
      />
      <Text
        style={[styles.text2, styles.textTypo1]}
      >{`Congratulations on succsesfully growing the rwandan espresso coffee bean `}</Text>
      <View style={[styles.button2, styles.buttonPosition]}>
        <View style={[styles.bg3, styles.bg2Position]} />
        <Text style={[styles.text3, styles.textTypo]}>Share</Text>
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
    marginTop: -9,
    letterSpacing: 2,
    fontSize: FontSize.size_smi,
  },
  buttonPosition: {
    bottom: "14.78%",
    top: "80.54%",
    height: "4.68%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorSienna,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
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
    width: "45.42%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
    left: "28.81%",
    height: 18,
    marginTop: -9,
  },
  button: {
    width: "78.67%",
    top: "74.26%",
    bottom: "21.06%",
    left: "11.73%",
    right: "9.6%",
    height: "4.68%",
    position: "absolute",
  },
  bg3: {
    backgroundColor: Color.colorWhite,
  },
  text1: {
    width: "45.4%",
    left: "28.85%",
    height: 18,
    marginTop: -9,
    letterSpacing: 2,
    fontSize: FontSize.size_smi,
    color: Color.colorSienna,
  },
  button1: {
    width: "37.07%",
    right: "50.13%",
    left: "12.8%",
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
  screen68Child: {
    top: -246,
    left: 725,
    width: 293,
    height: 292,
    position: "absolute",
  },
  screen68Item: {
    top: 223,
    left: 9,
    width: 356,
    height: 298,
    position: "absolute",
  },
  pm: {
    marginTop: -102,
    width: "42.4%",
    left: "29.87%",
    fontSize: FontSize.size_3xl,
    height: 65,
  },
  screen68Inner: {
    top: 239,
    left: 25,
    width: 322,
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
  text2: {
    marginTop: -16,
    width: "70.93%",
    left: "14.67%",
    color: Color.colorDimgray_200,
    height: 114,
    letterSpacing: 2,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
  },
  text3: {
    width: "45.41%",
    height: 18,
    marginTop: -9,
    letterSpacing: 2,
    fontSize: FontSize.size_smi,
    left: "28.81%",
  },
  button2: {
    width: "36%",
    left: "54.4%",
    right: "9.6%",
  },
  screen68: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen68;
