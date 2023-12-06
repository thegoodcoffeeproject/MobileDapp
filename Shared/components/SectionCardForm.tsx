import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type SectionCardFormType = {
  interfaceEssentialCheck?: ImageSourcePropType;
};

const SectionCardForm = ({ interfaceEssentialCheck }: SectionCardFormType) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.bg1Position}>
        <View style={[styles.info, styles.bgPosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
        </View>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.checkPosition]}>
          PLANTING STAGE
        </Text>
        <Text style={[styles.checkAvailability1, styles.checkPosition]}>
          01
        </Text>
      </View>
      <View style={styles.likeParent}>
        <View style={styles.bg1Position}>
          <View style={[styles.bg1, styles.bg1Position]} />
        </View>
        <Image
          style={styles.interfaceEssentialcheckIcon}
          contentFit="cover"
          source={interfaceEssentialCheck}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
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
  checkPosition: {
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  bg1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 45,
    elevation: 45,
  },
  info: {
    shadowColor: "#ddd",
    shadowRadius: 4,
    elevation: 4,
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorSienna,
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
    height: "77.61%",
    width: "15.65%",
    top: "11.94%",
    right: "80.29%",
    bottom: "10.45%",
    left: "4.06%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -7.5,
    left: "23.77%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    textAlign: "left",
  },
  checkAvailability1: {
    marginTop: -9.5,
    left: "8.99%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  bg1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke,
  },
  interfaceEssentialcheckIcon: {
    height: "60%",
    width: "57.14%",
    top: "20%",
    right: "21.43%",
    bottom: "20%",
    left: "21.43%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  likeParent: {
    height: "59.7%",
    width: "12.17%",
    top: "19.4%",
    right: "3.48%",
    bottom: "20.9%",
    left: "84.35%",
    position: "absolute",
  },
  groupParent: {
    width: 345,
    height: 67,
  },
});

export default SectionCardForm;
