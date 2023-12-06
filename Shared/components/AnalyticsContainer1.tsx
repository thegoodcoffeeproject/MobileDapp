import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AnalyticsContainer1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.bgParent}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.bg1} />
        <View style={styles.bg2} />
        <View style={[styles.bg3, styles.bgLayout]} />
      </View>
      <Text style={styles.pm}>Sales</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>Customers</Text>
      <Text style={[styles.pm2, styles.pm1Typo]}>{`Procuts `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    backgroundColor: Color.colorTan_200,
    borderRadius: Border.br_xl,
    width: "28.38%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  pm1Typo: {
    height: 19,
    marginTop: -12.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    top: "50%",
    width: "32.92%",
    position: "absolute",
  },
  bg: {
    right: "0%",
    left: "71.62%",
  },
  bg1: {
    right: "35.81%",
    left: "35.81%",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    width: "28.38%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bg2: {
    right: "71.62%",
    left: "0%",
    backgroundColor: Color.colorTan_200,
    borderRadius: Border.br_xl,
    width: "28.38%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bg3: {
    right: "35.47%",
    left: "36.15%",
  },
  bgParent: {
    width: "91.93%",
    right: "4.66%",
    left: "3.42%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  pm: {
    marginTop: -15.5,
    height: 32,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    top: "50%",
    width: "32.92%",
    left: "0%",
    position: "absolute",
  },
  pm1: {
    left: "67.08%",
  },
  pm2: {
    left: "34.16%",
  },
  groupParent: {
    height: "8.74%",
    width: "85.87%",
    top: "24.26%",
    right: "5.07%",
    bottom: "67%",
    left: "9.07%",
    position: "absolute",
  },
});

export default AnalyticsContainer1;
