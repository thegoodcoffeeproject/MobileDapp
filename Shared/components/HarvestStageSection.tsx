import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HarvestStageSection = () => {
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
      <Text style={[styles.beansHarvestedContainer, styles.containerLayout]}>
        <Text
          style={[styles.beansHarvested, styles.pmTypo1]}
        >{`Beans harvested : `}</Text>
        <Text style={styles.pounds}>30 Pounds</Text>
      </Text>
      <Text style={[styles.harvestTypeStripContainer, styles.containerTypo]}>
        <Text
          style={[styles.beansHarvested, styles.pmTypo1]}
        >{`Harvest Type:  `}</Text>
        <Text style={styles.pounds}>Strip Picked</Text>
      </Text>
      <View style={[styles.groupItem, styles.groupPosition]} />
      <View style={[styles.yieldPerTree87BeansPerWrapper, styles.yieldLayout]}>
        <Text style={[styles.yieldPerTreeContainer, styles.yieldLayout]}>
          <Text
            style={[styles.beansHarvested, styles.pmTypo1]}
          >{`Yield Per Tree : `}</Text>
          <Text style={styles.pounds}>{`87 beans per tree 
`}</Text>
        </Text>
      </View>
      <Text style={[styles.pm, styles.pmTypo]}>{`Harvest Stage `}</Text>
      <View style={styles.storyParent}>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.pmTypo]}>02</Text>
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
  containerLayout: {
    width: 189,
    position: "absolute",
  },
  pmTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  containerTypo: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  yieldLayout: {
    height: 16,
    width: 234,
    position: "absolute",
  },
  pmTypo: {
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "center",
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
  beansHarvested: {
    fontFamily: FontFamily.bold,
  },
  pounds: {
    fontFamily: FontFamily.bold,
  },
  beansHarvestedContainer: {
    top: 72,
    left: 33,
    textAlign: "center",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    width: 189,
  },
  harvestTypeStripContainer: {
    top: 103,
    height: 23,
    left: 38,
    width: 189,
    position: "absolute",
  },
  groupItem: {
    top: 115,
    width: 100,
  },
  yieldPerTreeContainer: {
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  yieldPerTree87BeansPerWrapper: {
    top: 138,
    left: 38,
  },
  pm: {
    marginTop: -62.5,
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
    height: "28.73%",
    width: "15.79%",
    top: "6.63%",
    right: "8.16%",
    bottom: "64.64%",
    left: "76.05%",
    position: "absolute",
  },
  groupParent: {
    height: "22.29%",
    width: "91.17%",
    top: "17.73%",
    right: "3.23%",
    bottom: "59.98%",
    left: "5.6%",
    position: "absolute",
  },
});

export default HarvestStageSection;
