import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export const Screen36 = () => {
  return (
    <View style={styles.screen36}>
      <Image
        style={[styles.bottomMenuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-menu1.png")}
      />
      <Text style={[styles.helloStevenYour, styles.helloTypo]}>
        My Harvests
      </Text>
      <Container group1={require("../assets/group-12.png")} />
      <View style={[styles.title, styles.titlePosition]}>
        <Text style={[styles.helloStevenYourContainer, styles.titlePosition]}>
          Hey Justin
        </Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header1.png")}
      />
      <View style={styles.bg}>
        <View style={[styles.bg1, styles.bg1Position]} />
      </View>
      <Text style={[styles.pm, styles.pmPosition]}>
        <Text style={styles.blankLine}> </Text>
        <Text style={styles.youHaveNo}>You have no current harvests....</Text>
      </Text>
      <View style={styles.button}>
        <View style={[styles.bg2, styles.bg1Position]} />
        <Text style={[styles.text, styles.pmPosition]}>ADD NEW HARVEST</Text>
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
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
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
  helloTypo: {
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
  },
  titlePosition: {
    height: 28,
    top: "50%",
    position: "absolute",
  },
  bg1Position: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  pmPosition: {
    textAlign: "center",
    marginTop: -5,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  rectangle185CopyLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xs_5,
    height: "13%",
    position: "absolute",
    width: "100%",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  helloStevenYour: {
    marginTop: -125,
    width: "38.13%",
    fontSize: FontSize.size_base,
    height: 19,
    left: "7.2%",
    top: "50%",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    position: "absolute",
  },
  helloStevenYourContainer: {
    marginTop: -14,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    left: "0%",
    width: "100%",
  },
  title: {
    marginTop: -318,
    width: "46.13%",
    right: "46.67%",
    left: "7.2%",
  },
  headerIcon: {
    height: "4.19%",
    width: "85.33%",
    top: "4.43%",
    right: "6.4%",
    bottom: "91.38%",
    left: "8.27%",
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
    top: "0%",
    height: "100%",
  },
  bg: {
    height: "11.95%",
    width: "92%",
    top: "47.78%",
    right: "4%",
    bottom: "40.27%",
    left: "4%",
    position: "absolute",
  },
  blankLine: {
    fontSize: FontSize.size_smi,
  },
  youHaveNo: {
    fontSize: FontSize.size_sm,
  },
  pm: {
    width: "79.73%",
    left: "10.93%",
    color: Color.colorDarkslategray,
    height: 36,
  },
  bg2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTan_100,
    shadowColor: "#d9cfc1",
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: "0%",
    height: "100%",
  },
  text: {
    width: "45.42%",
    left: "27.12%",
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    color: Color.colorWhite,
    height: 9,
    fontWeight: "600",
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
    top: "0%",
    height: "100%",
  },
  combinedShapeChild: {
    top: "4844%",
    right: "-690%",
    bottom: "-4757%",
    left: "690%",
  },
  rectangle185Copy: {
    top: "4800%",
    right: "-746%",
    bottom: "-4713%",
    left: "746%",
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
    top: "57.51%",
    right: "9.33%",
    bottom: "37.81%",
    left: "12%",
    position: "absolute",
  },
  userIcon: {
    top: 775,
    left: 325,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  screen36: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen36;
