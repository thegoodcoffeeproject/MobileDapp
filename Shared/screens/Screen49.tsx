import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import SectionCard from "../components/SectionCard";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Screen49 = () => {
  return (
    <View style={styles.screen49}>
      <Image
        style={[styles.bottomMenuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-menu1.png")}
      />
      <Text style={[styles.helloStevenYour, styles.helloFlexBox]}>
        My Harvests
      </Text>
      <Container group1={require("../assets/group-11.png")} />
      <View style={styles.title}>
        <Text style={[styles.helloStevenYourContainer, styles.textTypo]}>
          Hey Justin
        </Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header1.png")}
      />
      <View style={styles.button}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={[styles.text, styles.textTypo]}>ADD NEW HARVEST</Text>
        <View style={styles.addNewImage}>
          <View style={[styles.bg1, styles.bgPosition]} />
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
      <SectionCard cropStatus="HARVESTED" cropRating="2/5" />
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
  helloFlexBox: {
    textAlign: "left",
    color: Color.colorSienna,
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  bgPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
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
    fontFamily: FontFamily.bold,
    textAlign: "left",
    color: Color.colorSienna,
    left: "7.2%",
    top: "50%",
    position: "absolute",
  },
  helloStevenYourContainer: {
    marginTop: -14,
    fontSize: FontSize.size_5xl,
    height: 28,
    textAlign: "left",
    color: Color.colorSienna,
    left: "0%",
    width: "100%",
  },
  title: {
    marginTop: -318,
    width: "46.13%",
    right: "46.67%",
    height: 28,
    left: "7.2%",
    top: "50%",
    position: "absolute",
  },
  headerIcon: {
    height: "4.19%",
    width: "85.33%",
    top: "4.43%",
    right: "6.4%",
    bottom: "91.38%",
    left: "8.27%",
  },
  bg: {
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
    letterSpacing: 2,
    color: Color.colorWhite,
    textAlign: "center",
    height: 9,
  },
  bg1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 45,
    elevation: 45,
  },
  combinedShapeChild: {
    top: "3354%",
    right: "-630%",
    bottom: "-3267%",
    left: "630%",
  },
  rectangle185Copy: {
    top: "3310%",
    right: "-686%",
    bottom: "-3223%",
    left: "686%",
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
    top: "39.16%",
    right: "10.93%",
    bottom: "56.16%",
    left: "10.4%",
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
  screen49: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen49;
