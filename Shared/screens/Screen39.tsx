import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import SectionTwo from "../components/SectionTwo";
import SectionCard1 from "../components/SectionCard1";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

export const Screen39 = () => {
  return (
    <View style={styles.screen39}>
      <View style={styles.title}>
        <Text
          style={[styles.thisModernlyFurnis, styles.checkAvailabilityTypo]}
        >{`Use the steps below to track your coffee growing process `}</Text>
        <Text style={styles.tidyMinimal}>Plantation Tracker</Text>
      </View>
      <Text style={[styles.text, styles.textPosition]}>RWANDAN ESPRESSO</Text>
      <Image
        style={[styles.backIcon, styles.backIconLayout]}
        contentFit="cover"
        source={require("../assets/back-icon.png")}
      />
      <View style={[styles.bg, styles.bgShadowBox]} />
      <Text style={[styles.freeWifi, styles.freeWifiPosition]}>
        Nyungwe, Rwanda
      </Text>
      <Text style={[styles.tryCopenhagen, styles.freeWifiPosition]}>{`LOCATION
`}</Text>
      <Image
        style={styles.mapPinIcon}
        contentFit="cover"
        source={require("../assets/mappin.png")}
      />
      <FormContainer
        tRYCOPENHAGEN={`HARVEST DATE
`}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={styles.infoPosition}>
            <View style={[styles.info, styles.infoPosition]}>
              <View style={[styles.bg1, styles.infoPosition]} />
            </View>
            <View style={styles.story}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={styles.image}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <View style={styles.story}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={styles.image}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <View style={styles.story}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={styles.image}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability, styles.textTypo]}>
              PLANTING STAGE
            </Text>
            <Text style={[styles.checkAvailability1, styles.textPosition]}>
              01
            </Text>
          </View>
          <View style={styles.likeParent}>
            <View style={styles.infoPosition}>
              <View style={[styles.bg2, styles.infoPosition]} />
            </View>
            <Image
              style={[styles.musicAndSoundPlayerplay, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/music-and-sound-playerplay2.png")}
            />
          </View>
        </View>
        <SectionTwo />
        <SectionCard1
          processStageLabel="PROCESSING STAGE"
          stageNumber="03"
          stageDimensionLabel={require("../assets/group-255.png")}
          propBackgroundColor="#fff"
        />
        <SectionCard1
          processStageLabel="DRYING STAGE"
          stageNumber="04"
          stageDimensionLabel={require("../assets/group-255.png")}
          propBackgroundColor="#fff"
        />
        <SectionCard1
          processStageLabel="MILLING STAGE"
          stageNumber="05"
          stageDimensionLabel={require("../assets/group-255.png")}
          propBackgroundColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkAvailabilityTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorSienna,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "center",
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  backIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bgShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
  freeWifiPosition: {
    textAlign: "right",
    left: "57.33%",
    width: "30.67%",
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  infoPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  thisModernlyFurnis: {
    marginTop: 9.5,
    width: "99.68%",
    left: "0.32%",
    fontFamily: FontFamily.robotoThin,
    fontWeight: "200",
  },
  tidyMinimal: {
    marginTop: -23.5,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    left: "0%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -159,
    width: "84.27%",
    right: "9.6%",
    left: "6.13%",
    height: 47,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -344,
    width: "80.8%",
    left: "10.67%",
    fontSize: FontSize.bold_size,
    height: 30,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    textAlign: "center",
  },
  backIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "5.05%",
    right: "89.6%",
    bottom: "92%",
    left: "4%",
  },
  bg: {
    height: "6.03%",
    width: "57.6%",
    top: "21.06%",
    right: "-6.13%",
    bottom: "72.91%",
    left: "48.53%",
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  freeWifi: {
    marginTop: -207,
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorDarkslategray,
    fontWeight: "200",
  },
  tryCopenhagen: {
    marginTop: -221,
    color: Color.colorBlack,
    height: 14,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
  },
  mapPinIcon: {
    top: 184,
    left: 339,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  bottomMenuIcon: {
    height: "10.96%",
    top: "89.04%",
    bottom: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  bg1: {
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  info: {
    shadowColor: "#ddd",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    height: "100%",
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorSienna,
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
    height: "77.61%",
    width: "15.65%",
    top: "11.94%",
    right: "80.29%",
    bottom: "10.45%",
    left: "4.06%",
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -7.5,
    left: "23.77%",
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorSienna,
    top: "50%",
    position: "absolute",
  },
  checkAvailability1: {
    marginTop: -9.5,
    left: "8.99%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
  },
  bg2: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_11xl,
  },
  musicAndSoundPlayerplay: {
    height: "53.75%",
    width: "47.62%",
    top: "22.5%",
    right: "26.19%",
    bottom: "23.75%",
    left: "26.19%",
  },
  likeParent: {
    height: "59.7%",
    width: "12.17%",
    top: "19.4%",
    right: "3.48%",
    bottom: "20.9%",
    left: "84.35%",
    position: "absolute",
  },
  groupContainer: {
    width: 345,
    height: 67,
  },
  groupParent: {
    top: 318,
    left: 15,
    height: 420,
    position: "absolute",
  },
  screen39: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen39;
