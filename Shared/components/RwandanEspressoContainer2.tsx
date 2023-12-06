import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const RwandanEspressoContainer2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.infoWrapper}>
        <View style={[styles.info, styles.bgPosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
        </View>
      </View>
      <Text style={styles.dryingMethodContainer}>
        <Text style={[styles.dryingMethod, styles.pmTypo]}>
          Drying Method : s
        </Text>
        <Text style={styles.unDried}>{`un-dried `}</Text>
      </Text>
      <Text style={styles.dryingTime20Container}>
        <Text
          style={[styles.dryingMethod, styles.pmTypo]}
        >{`Drying Time:  `}</Text>
        <Text style={styles.unDried}>20 hrs</Text>
      </Text>
      <View style={styles.groupChild} />
      <Text style={[styles.pm, styles.pmPosition]}>{`Drying Stage `}</Text>
      <View style={styles.storyParent}>
        <View style={styles.infoWrapper}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.pmPosition]}>04</Text>
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
  pmTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  pmPosition: {
    fontSize: FontSize.size_base,
    top: "50%",
    height: 19,
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
  infoWrapper: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  dryingMethod: {
    fontFamily: FontFamily.bold,
  },
  unDried: {
    fontFamily: FontFamily.bold,
  },
  dryingMethodContainer: {
    top: 70,
    width: 230,
    height: 19,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  dryingTime20Container: {
    top: 102,
    width: 225,
    height: 22,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 112,
    left: 35,
    width: 100,
    height: 1,
    position: "absolute",
  },
  pm: {
    marginTop: -45.7,
    width: "50.03%",
    left: "4.44%",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    textAlign: "left",
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorTan_100,
    borderWidth: 1,
  },
  mask: {
    backgroundColor: Color.colorTan_100,
  },
  image: {
    height: "84.39%",
    width: "84.23%",
    top: "7.91%",
    right: "7.98%",
    bottom: "7.71%",
    left: "7.79%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -9.7,
    width: "36.92%",
    left: "33.4%",
    letterSpacing: 2,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  storyParent: {
    height: "35.14%",
    width: "17.11%",
    top: "8.13%",
    right: "4.7%",
    bottom: "56.74%",
    left: "78.19%",
    position: "absolute",
  },
  groupParent: {
    height: "17.73%",
    width: "84%",
    top: "16.87%",
    right: "8%",
    bottom: "65.39%",
    left: "8%",
    position: "absolute",
  },
});

export default RwandanEspressoContainer2;
