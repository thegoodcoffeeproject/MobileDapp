import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import SectionCardForm from "../components/SectionCardForm";
import SectionCard1 from "../components/SectionCard1";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

export const Screen45 = () => {
  return (
    <View style={styles.screen45}>
      <View style={styles.title}>
        <Text
          style={[styles.thisModernlyFurnis, styles.checkAvailabilityTypo]}
        >{`Use the steps below to track your coffee growing process `}</Text>
        <Text style={styles.tidyMinimal}>Plantation Tracker</Text>
      </View>
      <Text style={[styles.text, styles.textPosition]}>RWANDAN ESPRESSO</Text>
      <Image
        style={styles.backIcon}
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
        dateLabel={`START DATE
`}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <View style={styles.groupParent}>
        <SectionCardForm
          interfaceEssentialCheck={require("../assets/interface-essentialcheck.png")}
        />
        <View style={styles.groupContainer}>
          <View style={styles.bg1Position}>
            <View style={styles.bg1Position}>
              <View style={[styles.info, styles.bg1Position]}>
                <View style={[styles.bg1, styles.bg1Position]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability, styles.textTypo]}>
              HARVESTING STAGE
            </Text>
            <View style={styles.storyParent}>
              <View style={styles.bg1Position}>
                <View style={[styles.border, styles.maskPosition]} />
                <View style={styles.image}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
              </View>
              <Text style={[styles.checkAvailability1, styles.textPosition]}>
                02
              </Text>
            </View>
            <View style={styles.likeParent}>
              <View style={styles.bg1Position}>
                <View style={[styles.bg2, styles.bg1Position]} />
              </View>
              <View style={styles.doorsIcon}>
                <View style={styles.bg1Position} />
              </View>
            </View>
          </View>
          <Image
            style={styles.musicAndSoundPlayerplay}
            contentFit="cover"
            source={require("../assets/music-and-sound-playerplay2.png")}
          />
        </View>
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
  bg1Position: {
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
    marginTop: -182,
    width: "84.27%",
    right: "10.4%",
    left: "5.33%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  checkAvailability: {
    marginTop: -7.5,
    width: "42.03%",
    left: "23.77%",
    height: 17,
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorSienna,
    top: "50%",
    position: "absolute",
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
    height: "84.26%",
    width: "84.44%",
    top: "7.87%",
    right: "7.78%",
    bottom: "7.87%",
    left: "7.78%",
    position: "absolute",
  },
  checkAvailability1: {
    marginTop: -10.75,
    width: "37.04%",
    left: "31.48%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    height: 20,
  },
  storyParent: {
    height: "83.43%",
    width: "15.65%",
    top: "7.46%",
    right: "80.29%",
    bottom: "9.1%",
    left: "4.06%",
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_11xl,
  },
  doorsIcon: {
    height: "50%",
    width: "50%",
    top: "24.88%",
    right: "26.19%",
    bottom: "25.12%",
    left: "23.81%",
    position: "absolute",
  },
  likeParent: {
    height: "64.18%",
    width: "12.17%",
    top: "17.91%",
    right: "3.48%",
    bottom: "17.91%",
    left: "84.35%",
    position: "absolute",
  },
  musicAndSoundPlayerplay: {
    top: 23,
    left: 304,
    width: 20,
    height: 22,
    position: "absolute",
  },
  groupContainer: {
    width: 345,
    height: 67,
    marginTop: 20,
  },
  groupParent: {
    top: 296,
    left: 15,
    height: 420,
    position: "absolute",
  },
  screen45: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen45;
