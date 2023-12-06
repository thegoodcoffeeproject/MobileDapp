import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HarvestTypeForm = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.numberOfTrees, styles.poundsTypo]}>
          Number of Trees Harvested
        </Text>
        <Text style={[styles.pounds, styles.textTypo]}>30 Pounds</Text>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.textWrapper, styles.textLayout]}>
          <Text style={[styles.text, styles.textLayout]}>{`
`}</Text>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupInner, styles.groupBorder]} />
        <Text style={[styles.text1, styles.text1Typo]}>87</Text>
        <Text
          style={[styles.yieldPerTree, styles.text1Typo]}
        >{`Yield per Tree: `}</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={[styles.groupInner, styles.groupBorder]} />
        <Text style={[styles.text1, styles.text1Typo]}>Strip Picked</Text>
        <Text
          style={[styles.harvestType, styles.textTypo1]}
        >{`Harvest Type `}</Text>
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
  poundsTypo: {
    width: 189,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  textLayout: {
    height: 13,
    width: 65,
    left: 0,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  text1Typo: {
    height: 16,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 0,
  },
  groupChild: {
    top: 48,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    width: 294,
  },
  numberOfTrees: {
    left: 1,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: 0,
  },
  pounds: {
    top: 30,
    left: 2,
    height: 23,
    width: 189,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
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
    height: 53,
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
    top: 26,
    left: 5,
    width: 96,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  yieldPerTree: {
    width: 114,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: 0,
    left: 0,
  },
  rectangleGroup: {
    top: 76,
    left: 170,
    width: 129,
    height: 46,
    position: "absolute",
  },
  vectorIcon: {
    height: "16.09%",
    width: "9.3%",
    top: "65.22%",
    right: "6.2%",
    bottom: "18.7%",
    left: "84.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  harvestType: {
    width: 89,
    height: 14,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  vectorParent: {
    height: "37.7%",
    width: "43.14%",
    top: "62.3%",
    right: "56.19%",
    bottom: "0%",
    left: "0.67%",
    position: "absolute",
  },
  groupParent: {
    top: 244,
    left: 42,
    width: 299,
    height: 122,
    position: "absolute",
  },
});

export default HarvestTypeForm;
