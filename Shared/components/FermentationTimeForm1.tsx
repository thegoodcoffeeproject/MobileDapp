import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const FermentationTimeForm1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.processingFacility}>Processing Facility</Text>
        <Text style={[styles.enterLocationWhere, styles.textTypo]}>
          Enter location where beans were processed.
        </Text>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.textWrapper, styles.textLayout]}>
          <Text style={[styles.text, styles.textLayout]}>{`
`}</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupBorder]} />
        <Text style={[styles.text1, styles.minsLayout]}>87</Text>
        <Text style={[styles.processingDate, styles.minsLayout]}>
          Processing Date
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupBorder]} />
        <Text style={[styles.mins, styles.minsLayout]}>20 mins</Text>
        <Text style={styles.fermentationTime}>Fermentation Time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  textLayout: {
    height: 13,
    width: 65,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 46,
    top: 76,
    width: 129,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  minsLayout: {
    height: 16,
    textAlign: "left",
    color: Color.colorSienna,
    position: "absolute",
  },
  groupChild: {
    top: 48,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    width: 294,
  },
  processingFacility: {
    left: 1,
    width: 189,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  enterLocationWhere: {
    top: 30,
    width: 292,
    height: 12,
    fontSize: FontSize.size_xs,
    left: 2,
    color: Color.colorSienna,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  groupItem: {
    top: 43,
    width: 100,
  },
  text: {
    color: Color.colorBlack,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 0,
    width: 65,
  },
  textWrapper: {
    top: 23,
  },
  rectangleParent: {
    height: 48,
    width: 294,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 45,
    left: -1,
    borderWidth: 1,
    width: 131,
    height: 26,
    position: "absolute",
  },
  text1: {
    width: 96,
    left: 5,
    top: 26,
    height: 16,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  processingDate: {
    width: 114,
    height: 16,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    left: 170,
  },
  mins: {
    width: 96,
    left: 5,
    top: 26,
    height: 16,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  fermentationTime: {
    height: 14,
    width: 129,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleContainer: {
    left: 2,
  },
  groupParent: {
    top: 234,
    left: 32,
    width: 299,
    height: 122,
    position: "absolute",
  },
});

export default FermentationTimeForm1;
