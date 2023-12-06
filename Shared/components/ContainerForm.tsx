import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type ContainerFormType = {
  cHECKAVAILABILITY?: string;
};

const ContainerForm = ({ cHECKAVAILABILITY }: ContainerFormType) => {
  return (
    <View style={styles.headerParent}>
      <Image
        style={[styles.headerIcon, styles.storyPosition1]}
        contentFit="cover"
        source={require("../assets/header3.png")}
      />
      <View style={[styles.storyParent, styles.storyPosition]}>
        <View style={[styles.story, styles.storyPosition]}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={styles.checkAvailability}>{cHECKAVAILABILITY}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storyPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  storyPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  headerIcon: {
    height: "42.31%",
    top: "28.85%",
    bottom: "28.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  story: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  checkAvailability: {
    marginTop: -10,
    top: "50%",
    left: "31.48%",
    fontSize: FontSize.size_base,
    letterSpacing: 2,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  storyParent: {
    width: "17.14%",
    right: "41.27%",
    left: "41.59%",
  },
  headerParent: {
    height: "6.4%",
    width: "84%",
    top: "4.06%",
    right: "7.47%",
    bottom: "89.53%",
    left: "8.53%",
    position: "absolute",
  },
});

export default ContainerForm;
