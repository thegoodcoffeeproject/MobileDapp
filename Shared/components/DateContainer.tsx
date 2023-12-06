import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import RwandanEspressoCard from "./RwandanEspressoCard";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const DateContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupContainer, styles.groupLayout2]}>
        <RwandanEspressoCard
          cropName="Crop Name "
          locationInput="Rwandan Espresso"
        />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
          <View style={[styles.textWrapper, styles.textLayout]}>
            <Text style={[styles.text, styles.textTypo]}>{`
`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupWrapper, styles.groupLayout2]}>
        <RwandanEspressoCard
          cropName="Location"
          locationInput="Enter Location"
          propHeight={46}
          propHeight1={19}
          propTop={8}
        />
      </View>
      <View style={[styles.groupFrame, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.dateWrapper, styles.datePosition]}>
            <Text style={[styles.date, styles.datePosition]}>Date</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout2: {
    height: 47,
    left: 0,
    width: 289,
    position: "absolute",
  },
  groupLayout1: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    width: 284,
    left: 0,
    position: "absolute",
  },
  textLayout: {
    height: 13,
    width: 183,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  groupLayout: {
    height: 39,
    width: 284,
    left: 0,
    position: "absolute",
  },
  datePosition: {
    width: 89,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 20,
  },
  text: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorBlack,
    opacity: 0.5,
    height: 13,
    width: 183,
    top: 0,
    position: "absolute",
  },
  textWrapper: {
    left: 1,
  },
  rectangleParent: {
    top: 27,
    height: 20,
    width: 284,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 188,
  },
  groupItem: {
    top: 39,
  },
  date: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  dateWrapper: {
    height: 19,
    left: 1,
  },
  rectangleGroup: {
    top: 0,
  },
  groupFrame: {
    top: 102,
  },
  groupParent: {
    top: 290,
    left: 43,
    height: 235,
    width: 289,
    position: "absolute",
  },
});

export default DateContainer;
