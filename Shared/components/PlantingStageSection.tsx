import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PlantingStageSection = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.infoWrapper}>
        <View style={[styles.info, styles.bgPosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
        </View>
      </View>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-94.png")}
      />
      <Text style={[styles.treesPlantedContainer, styles.containerTypo]}>
        <Text
          style={[styles.treesPlanted, styles.pmTypo1]}
        >{`Trees Planted : `}</Text>
        <Text style={styles.pounds}>30 Pounds</Text>
      </Text>
      <Text style={[styles.soilPhNeutralContainer, styles.containerTypo]}>
        <Text
          style={[styles.treesPlanted, styles.pmTypo1]}
        >{`Soil pH:  `}</Text>
        <Text style={styles.pounds}>Neutral</Text>
      </Text>
      <View style={[styles.groupItem, styles.groupPosition]} />
      <View style={[styles.soilFertilityLowWrapper, styles.soilLayout]}>
        <Text
          style={[styles.soilFertilityLowContainer, styles.containerPosition]}
        >
          <Text
            style={[styles.treesPlanted, styles.pmTypo1]}
          >{`Soil Fertility: `}</Text>
          <Text style={styles.pounds}>{`Low
`}</Text>
        </Text>
      </View>
      <View
        style={[styles.weatherConditionsWindyWrapper, styles.weatherLayout]}
      >
        <Text
          style={[styles.weatherConditionsWindyContainer, styles.weatherLayout]}
        >
          <Text
            style={[styles.treesPlanted, styles.pmTypo1]}
          >{`Weather Conditions: `}</Text>
          <Text style={styles.pounds}>{`Windy
`}</Text>
        </Text>
      </View>
      <Text style={[styles.pm, styles.pmTypo]}>{`Planting Stage `}</Text>
      <View style={styles.storyParent}>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.pmTypo]}>01</Text>
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
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupPosition: {
    height: 1,
    left: 48,
    position: "absolute",
  },
  containerTypo: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    left: 38,
    position: "absolute",
  },
  pmTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  soilLayout: {
    height: 16,
    width: 131,
    position: "absolute",
  },
  containerPosition: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  weatherLayout: {
    width: 181,
    height: 16,
    position: "absolute",
  },
  pmTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
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
    width: "92.42%",
    right: "3.77%",
    left: "3.8%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 119,
    width: 295,
  },
  treesPlanted: {
    fontFamily: FontFamily.bold,
  },
  pounds: {
    fontFamily: FontFamily.bold,
  },
  treesPlantedContainer: {
    top: 71,
    width: 189,
  },
  soilPhNeutralContainer: {
    top: 105,
    width: 118,
    height: 23,
  },
  groupItem: {
    top: 115,
    width: 100,
  },
  soilFertilityLowContainer: {
    height: 16,
    width: 131,
    position: "absolute",
  },
  soilFertilityLowWrapper: {
    top: 104,
    left: 179,
  },
  weatherConditionsWindyContainer: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  weatherConditionsWindyWrapper: {
    top: 143,
    left: 38,
    width: 181,
  },
  pm: {
    marginTop: -62,
    width: "52.27%",
    color: Color.colorSienna,
    height: 19,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    left: "0%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -10,
    left: "33.33%",
    letterSpacing: 2,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
  },
  storyParent: {
    height: "28.89%",
    width: "15.79%",
    top: "6.67%",
    right: "8.16%",
    bottom: "64.44%",
    left: "76.05%",
    position: "absolute",
  },
  groupParent: {
    height: "22.17%",
    width: "91.17%",
    top: "17.73%",
    right: "3.23%",
    bottom: "60.1%",
    left: "5.6%",
    position: "absolute",
  },
});

export default PlantingStageSection;
