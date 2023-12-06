import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionTwo = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.checkAvailability, styles.checkPosition]}>
          HARVESTING STAGE
        </Text>
        <View style={styles.storyParent}>
          <View style={styles.groupPosition}>
            <View style={[styles.border, styles.maskPosition]} />
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
            </View>
          </View>
          <Text style={[styles.checkAvailability1, styles.checkPosition]}>
            02
          </Text>
        </View>
        <View style={styles.likeParent}>
          <View style={styles.groupPosition}>
            <View style={[styles.bg, styles.groupPosition]} />
          </View>
          <View style={styles.doorsIcon}>
            <View style={styles.groupPosition} />
          </View>
        </View>
      </View>
      <Image
        style={styles.doorsIcon1}
        contentFit="cover"
        source={require("../assets/doors-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  checkPosition: {
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  checkAvailability: {
    marginTop: -7.5,
    width: "42.03%",
    left: "23.77%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    textAlign: "left",
    height: 17,
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorSienna,
    borderWidth: 1,
  },
  mask: {
    backgroundColor: Color.colorRosybrown_100,
  },
  image: {
    height: "84.26%",
    width: "84.44%",
    top: "7.87%",
    right: "7.78%",
    bottom: "7.87%",
    left: "7.78%",
    position: "absolute",
  },
  checkAvailability1: {
    marginTop: -10.75,
    width: "37.04%",
    left: "31.48%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    height: 20,
  },
  storyParent: {
    height: "83.43%",
    width: "15.65%",
    top: "7.46%",
    right: "80.29%",
    bottom: "9.1%",
    left: "4.06%",
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke,
  },
  doorsIcon: {
    height: "50%",
    width: "50%",
    top: "24.88%",
    right: "26.19%",
    bottom: "25.12%",
    left: "23.81%",
    position: "absolute",
  },
  likeParent: {
    height: "64.18%",
    width: "12.17%",
    top: "17.91%",
    right: "3.48%",
    bottom: "17.91%",
    left: "84.35%",
    position: "absolute",
  },
  doorsIcon1: {
    height: "29.85%",
    width: "6.09%",
    top: "34.33%",
    right: "5.8%",
    bottom: "35.82%",
    left: "88.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupParent: {
    width: 345,
    height: 67,
    marginTop: 20,
  },
});

export default SectionTwo;
