import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

type RwandanEspressoContainerType = {
  finalBeanYield?: string;
  prop?: string;
  millingProcess?: string;
  dry?: string;
  millingDate?: string;
  prop1?: string;
  pM?: string;
  cHECKAVAILABILITY?: string;
};

const RwandanEspressoContainer = ({
  finalBeanYield,
  prop,
  millingProcess,
  dry,
  millingDate,
  prop1,
  pM,
  cHECKAVAILABILITY,
}: RwandanEspressoContainerType) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.infoWrapper}>
        <View style={[styles.info, styles.bgPosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
        </View>
      </View>
      <Text
        style={[styles.finalBeanYieldContainer, styles.millingContainerTypo]}
      >
        <Text style={[styles.finalBeanYield, styles.pmTypo]}>
          {finalBeanYield}
        </Text>
        <Text style={styles.text}>{prop}</Text>
      </Text>
      <Text
        style={[styles.millingProcessDryContainer, styles.millingContainerTypo]}
      >
        <Text style={[styles.finalBeanYield, styles.pmTypo]}>
          {millingProcess}
        </Text>
        <Text style={styles.text}>{dry}</Text>
      </Text>
      <View style={styles.groupChild} />
      <View style={[styles.millingDate21023Wrapper, styles.millingLayout]}>
        <Text style={[styles.millingDateContainer, styles.millingLayout]}>
          <Text style={[styles.finalBeanYield, styles.pmTypo]}>
            {millingDate}
          </Text>
          <Text style={styles.text}>{prop1}</Text>
        </Text>
      </View>
      <Text style={[styles.pm, styles.pmPosition]}>{pM}</Text>
      <View style={styles.storyParent}>
        <View style={styles.infoWrapper}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability, styles.pmPosition]}>
          {cHECKAVAILABILITY}
        </Text>
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
  millingContainerTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  pmTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  millingLayout: {
    height: 16,
    width: 271,
    position: "absolute",
  },
  pmPosition: {
    fontSize: FontSize.size_base,
    top: "50%",
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
  finalBeanYield: {
    fontFamily: FontFamily.bold,
  },
  text: {
    fontFamily: FontFamily.bold,
  },
  finalBeanYieldContainer: {
    top: 72,
    width: 230,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  millingProcessDryContainer: {
    top: 105,
    width: 225,
    height: 23,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 115,
    left: 35,
    width: 100,
    height: 1,
    position: "absolute",
  },
  millingDateContainer: {
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  millingDate21023Wrapper: {
    top: 138,
    left: 20,
  },
  pm: {
    marginTop: -63.5,
    width: "50%",
    left: "4.44%",
    color: Color.colorSienna,
    height: 19,
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
    height: "84.42%",
    width: "84.23%",
    top: "7.88%",
    right: "7.98%",
    bottom: "7.69%",
    left: "7.79%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -10,
    width: "36.92%",
    left: "33.4%",
    letterSpacing: 2,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  storyParent: {
    height: "28.73%",
    width: "17.1%",
    top: "6.63%",
    right: "4.76%",
    bottom: "64.64%",
    left: "78.14%",
    position: "absolute",
  },
  groupParent: {
    height: "22.29%",
    width: "84.05%",
    top: "16.87%",
    right: "7.95%",
    bottom: "60.84%",
    left: "8%",
    position: "absolute",
  },
});

export default RwandanEspressoContainer;
