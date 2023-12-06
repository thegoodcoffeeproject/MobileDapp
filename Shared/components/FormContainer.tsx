import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

type FormContainerType = {
  tRYCOPENHAGEN?: string;
};

const FormContainer = ({ tRYCOPENHAGEN }: FormContainerType) => {
  return (
    <View style={[styles.searchInputParent, styles.bgShadowBox]}>
      <View style={styles.bgPosition}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={[styles.tryCopenhagen, styles.freeWifiTypo]}>
          {tRYCOPENHAGEN}
        </Text>
      </View>
      <Image
        style={styles.clockIcon}
        contentFit="cover"
        source={require("../assets/clock.png")}
      />
      <Text style={[styles.freeWifi, styles.freeWifiTypo]}>12 Nov 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  freeWifiTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  bg: {
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    backgroundColor: Color.colorSienna,
    shadowColor: "#f0edea",
    shadowRadius: 45,
    elevation: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  tryCopenhagen: {
    marginTop: -13.2,
    width: "64.46%",
    left: "15.12%",
    letterSpacing: 2,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    height: 13,
  },
  clockIcon: {
    top: 16,
    left: 6,
    width: 20,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  freeWifi: {
    marginTop: 4,
    width: "54.35%",
    left: "15.6%",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  searchInputParent: {
    height: "5.67%",
    width: "56.43%",
    top: "14.04%",
    right: "43.84%",
    bottom: "80.3%",
    left: "-0.27%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    position: "absolute",
  },
});

export default FormContainer;
