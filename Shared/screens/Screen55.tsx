import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FormContainer1 from "../components/FormContainer1";
import RwandanEspressoContainer from "../components/RwandanEspressoContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export const Screen55 = () => {
  return (
    <View style={styles.screen55}>
      <View style={[styles.bg, styles.bgTransform]}>
        <View style={[styles.topBg, styles.maskBg]} />
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header2.png")}
      />
      <Image
        style={[styles.bottomMenuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={styles.screen55Child}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <FormContainer1
        image42={require("../assets/image-421.png")}
        image43={require("../assets/image-43.png")}
      />
      <Text style={styles.text}>RWANDAN ESPRESSO</Text>
      <Text style={[styles.pm, styles.pmTypo]}>Notes</Text>
      <View style={styles.storyParent}>
        <View style={[styles.story, styles.bgTransform]}>
          <View style={[styles.image, styles.topBgPosition]}>
            <View style={[styles.mask, styles.maskBg]} />
          </View>
        </View>
        <Text style={[styles.todaysWeatherReally, styles.pmTypo]}>
          Todays weather really tested the crops limits. It was a struggle to
          fnish on time, however in the end managed to complete. The power of a
          peaceful mind......
        </Text>
      </View>
      <RwandanEspressoContainer
        finalBeanYield="Processing Facility :  "
        prop="Warehouse"
        millingProcess="Fermentation Time:  "
        dry="20 hrs"
        millingDate="Processing Method : "
        prop1={`Washed 
`}
        pM="Processing Stage "
        cHECKAVAILABILITY="03"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgTransform: {
    transform: [
      {
        rotate: "179.87deg",
      },
    ],
    position: "absolute",
  },
  maskBg: {
    backgroundColor: Color.colorSnow,
    transform: [
      {
        rotate: "179.87deg",
      },
    ],
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bold,
    position: "absolute",
  },
  topBgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  topBg: {
    borderBottomRightRadius: Border.br_41xl,
    borderBottomLeftRadius: Border.br_41xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  bg: {
    height: "78.56%",
    width: "100.83%",
    top: "99.99%",
    right: "-101.49%",
    bottom: "-78.55%",
    left: "100.67%",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  headerIcon: {
    height: "2.96%",
    width: "84%",
    top: "6.16%",
    right: "8%",
    bottom: "90.89%",
    left: "8%",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  image4Icon: {
    top: 51,
    left: 180,
    width: 24,
    height: 24,
    position: "absolute",
  },
  screen55Child: {
    top: -246,
    left: 725,
    width: 293,
    height: 292,
    position: "absolute",
  },
  text: {
    marginTop: -317,
    width: "80.8%",
    left: "10.67%",
    fontSize: FontSize.bold_size,
    letterSpacing: 2,
    color: Color.colorWhite,
    textAlign: "center",
    height: 30,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  pm: {
    marginTop: -55,
    width: "47.73%",
    left: "9.87%",
    fontSize: FontSize.size_base,
    color: Color.colorSienna,
    height: 18,
    fontWeight: "600",
    top: "50%",
    textAlign: "left",
  },
  mask: {
    height: "100.63%",
    width: "101.95%",
    top: "-0.31%",
    right: "-0.98%",
    bottom: "-0.31%",
    left: "-0.98%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorSienna_300,
    borderWidth: 1,
  },
  image: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    transform: [
      {
        rotate: "179.87deg",
      },
    ],
    position: "absolute",
  },
  story: {
    height: "308.74%",
    width: "32.18%",
    top: "0.58%",
    right: "-32.18%",
    bottom: "-209.32%",
    left: "100%",
  },
  todaysWeatherReally: {
    top: 15,
    left: 12,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    width: 294,
    height: 82,
  },
  storyParent: {
    height: "12.68%",
    width: "84.85%",
    top: "46.8%",
    right: "6.61%",
    bottom: "40.52%",
    left: "8.53%",
    position: "absolute",
  },
  screen55: {
    backgroundColor: Color.colorSienna,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen55;
