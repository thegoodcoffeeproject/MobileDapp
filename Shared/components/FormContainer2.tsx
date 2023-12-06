import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.numberOfTrees, styles.treesTypo]}>
          Number of Trees Planted
        </Text>
        <Text style={[styles.trees, styles.lowTypo]}>30 Trees</Text>
        <Image
          style={styles.asiconoutlinearrowRight}
          contentFit="cover"
          source={require("../assets/asiconoutlinearrowright2.png")}
        />
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupInner, styles.groupInnerBorder]} />
        <Text style={[styles.low, styles.lowLayout]}>Low</Text>
        <Text style={[styles.soilFertility, styles.lowLayout]}>
          Soil fertility
        </Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <View style={[styles.rectangleView, styles.groupInnerBorder]} />
        <Text style={[styles.low, styles.lowLayout]}>Neutral 6.5 - 7.5</Text>
        <Text style={styles.soilPh}>Soil pH</Text>
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
  treesTypo: {
    width: 189,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lowTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupInnerBorder: {
    height: 26,
    borderWidth: 1,
    left: -1,
    top: 45,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  lowLayout: {
    height: 16,
    textAlign: "left",
    color: Color.colorSienna,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "18.7%",
    top: "65.22%",
    width: "2.77%",
    height: "16.09%",
    position: "absolute",
  },
  groupChild: {
    top: 48,
    borderBottomWidth: 1,
    width: 294,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    height: 1,
  },
  numberOfTrees: {
    left: 1,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: 0,
  },
  trees: {
    top: 30,
    left: 2,
    height: 18,
    width: 189,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  asiconoutlinearrowRight: {
    top: 13,
    left: 284,
    width: 16,
    height: 17,
    position: "absolute",
  },
  groupItem: {
    top: 43,
    width: 100,
  },
  rectangleParent: {
    height: 48,
    left: 0,
    top: 0,
    width: 299,
    position: "absolute",
  },
  groupInner: {
    width: 131,
  },
  low: {
    top: 26,
    left: 5,
    fontSize: FontSize.size_xs,
    width: 96,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  soilFertility: {
    width: 136,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: 0,
    fontSize: FontSize.size_sm,
    height: 16,
    left: 0,
  },
  rectangleGroup: {
    top: 76,
    left: 170,
    height: 46,
    width: 136,
    position: "absolute",
  },
  vectorIcon: {
    right: "52.6%",
    left: "44.64%",
  },
  vectorIcon1: {
    right: "0%",
    left: "97.23%",
  },
  rectangleView: {
    width: 150,
  },
  soilPh: {
    width: 129,
    height: 14,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    height: "37.7%",
    width: "96.66%",
    top: "62.3%",
    right: "2.68%",
    bottom: "0%",
    left: "0.67%",
    position: "absolute",
  },
  groupParent: {
    top: 229,
    left: 43,
    height: 122,
    width: 299,
    position: "absolute",
  },
});

export default FormContainer2;
