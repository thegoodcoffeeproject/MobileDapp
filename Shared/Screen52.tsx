import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SectionCardForm from "../components/SectionCardForm";
import SectionComponent03 from "../components/SectionComponent03";
import SectionCard1 from "../components/SectionCard1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export const Screen52 = () => {
  return (
    <View style={styles.screen52}>
      <View style={styles.title}>
        <Text
          style={styles.thisModernlyFurnis}
        >{`Use the steps below to track your coffee growing process `}</Text>
        <Text style={styles.tidyMinimal}>Plantation Tracker</Text>
      </View>
      <Text style={[styles.text, styles.tryTypo]}>RWANDAN ESPRESSO</Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back-icon1.png")}
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
        source={require("../assets/back-icon1.png")}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu2.png")}
      />
      <View style={styles.groupParent}>
        <SectionCardForm
          interfaceEssentialCheck={require("../assets/back-icon1.png")}
        />
        <SectionComponent03 />
        <SectionCard1
          processStageLabel="DRYING STAGE"
          stageNumber="04"
          stageDimensionLabel={require("../assets/group-2551.png")}
          propBackgroundColor="#fff"
        />
        <SectionCard1
          processStageLabel="MILLING STAGE"
          stageNumber="05"
          stageDimensionLabel={require("../assets/group-2551.png")}
          propBackgroundColor="#fff"
        />
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.searchInputParent, styles.searchPosition]}>
          <View style={styles.searchPosition}>
            <View style={[styles.bg1, styles.searchPosition]} />
          </View>
          <Image
            style={styles.clockIcon}
            contentFit="cover"
            source={require("../assets/clock1.png")}
          />
          <Text style={[styles.freeWifi1, styles.freeWifi1Typo]}>
            12 Nov 2023
          </Text>
        </View>
        <Text style={[styles.tryCopenhagen1, styles.freeWifi1Typo]}>{`START DATE
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tryTypo: {
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
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
  searchPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  freeWifi1Typo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  thisModernlyFurnis: {
    marginTop: 9.5,
    width: "99.68%",
    left: "0.32%",
    fontFamily: FontFamily.robotoThin,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorSienna,
    fontWeight: "200",
    top: "50%",
    position: "absolute",
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
    textAlign: "center",
    height: 30,
    color: Color.colorSienna,
    fontWeight: "600",
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
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
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    elevation: 45,
    shadowRadius: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    position: "absolute",
  },
  freeWifi: {
    marginTop: -207,
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorDarkslategray,
    fontWeight: "200",
    textAlign: "right",
    left: "57.33%",
    width: "30.67%",
  },
  tryCopenhagen: {
    marginTop: -221,
    color: Color.colorBlack,
    height: 14,
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
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
  groupParent: {
    top: 296,
    left: 15,
    height: 420,
    position: "absolute",
  },
  bg1: {
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    backgroundColor: Color.colorSienna,
    shadowColor: "#f0edea",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 45,
    shadowRadius: 45,
  },
  clockIcon: {
    top: 16,
    left: 6,
    width: 20,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  freeWifi1: {
    marginTop: 4,
    width: "54.35%",
    left: "15.6%",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  searchInputParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    height: "100%",
  },
  tryCopenhagen1: {
    marginTop: -12,
    width: "64.46%",
    left: "16.07%",
    height: 13,
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
  },
  groupContainer: {
    height: "5.67%",
    width: "56.43%",
    top: "14.04%",
    right: "43.84%",
    bottom: "80.3%",
    left: "-0.27%",
    position: "absolute",
  },
  screen52: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen52;
