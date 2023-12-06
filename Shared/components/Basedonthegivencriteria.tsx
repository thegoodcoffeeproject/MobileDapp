import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Basedonthegivencriteria = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.processingMethodParent}>
        <Text style={[styles.processingMethod, styles.washedLayout]}>
          Processing Method
        </Text>
        <View style={styles.groupChild} />
        <View style={[styles.textWrapper, styles.textLayout]}>
          <Text style={[styles.text, styles.textTypo]}>{`
`}</Text>
        </View>
      </View>
      <View style={styles.frameChild} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.washed, styles.textTypo]}>Washed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  washedLayout: {
    width: 189,
    color: Color.colorSienna,
  },
  textLayout: {
    height: 6,
    width: 65,
    left: 0,
  },
  textTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  processingMethod: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    textAlign: "left",
    width: 189,
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    left: 1,
    height: 19,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 19,
    width: 100,
    height: 1,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorBlack,
    height: 6,
    width: 65,
    left: 0,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 0,
  },
  textWrapper: {
    top: 10,
    position: "absolute",
  },
  processingMethodParent: {
    width: 190,
    height: 19,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 52,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 26,
    left: 1,
    width: 299,
    position: "absolute",
  },
  vectorIcon: {
    height: "13.64%",
    width: "4.01%",
    top: "59.09%",
    right: "2.68%",
    bottom: "27.27%",
    left: "93.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  washed: {
    top: 33,
    left: 9,
    fontSize: FontSize.size_xs,
    height: 15,
    width: 189,
    color: Color.colorSienna,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupParent: {
    top: 380,
    left: 35,
    height: 66,
    width: 299,
    position: "absolute",
  },
});

export default Basedonthegivencriteria;
