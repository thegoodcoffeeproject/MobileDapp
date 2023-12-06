import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import PlantedCard1 from "../components/PlantedCard1";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

export const Screen15 = () => {
  return (
    <View style={styles.screen15}>
      <Image
        style={[styles.bgIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={[styles.fiSsCubeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fisscube.png")}
      />
      <Image
        style={[styles.fiSsTruckSideIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/fisstruckside.png")}
      />
      <Image
        style={[styles.headerIcon, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/header3.png")}
      />
      <Text style={[styles.pm, styles.pmPosition]}>Arabian Coffee</Text>
      <Image
        style={styles.screen15Child}
        contentFit="cover"
        source={require("../assets/group-244.png")}
      />
      <Image
        style={styles.locationPin1Icon}
        contentFit="cover"
        source={require("../assets/locationpin-1.png")}
      />
      <Text style={[styles.pm1, styles.pm1Layout]}>Nairobi, Kenya</Text>
      <Text style={[styles.pm2, styles.pm1Layout]}>
        <Text style={styles.happilyFarmedBy}>{`Happily farmed by `}</Text>
        <Text style={styles.justin}>{`Justin `}</Text>
      </Text>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={[styles.bg, styles.bgPosition]}>
          <View style={styles.bg1} />
        </View>
      </View>
      <View style={[styles.pmParent, styles.pmPosition]}>
        <Text style={[styles.pm3, styles.pm3Typo]}>
          Your bean to cup journey
        </Text>
        <Image
          style={[styles.backIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/back-icon1.png")}
        />
      </View>
      <Text style={styles.pm4}>
        Known for their bold and vibrant tones, characterized by a lively
        acidity and medium to high body. It has a rich mouthfeel with chocolatey
        caramel of dates, toasted nuts, and fruity notes.
      </Text>
      <Text style={[styles.pm5, styles.pm3Typo]}>About</Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/69.png")}
      />
      <Image
        style={styles.screen15Item}
        contentFit="cover"
        source={require("../assets/group-246.png")}
      />
      <PlantedCard1 />
      <Image
        style={[styles.fiSsRecordVinylIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fissrecordvinyl.png")}
      />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  iconPosition: {
    left: 21,
    position: "absolute",
  },
  calendarPosition: {
    right: "8%",
    position: "absolute",
  },
  pmPosition: {
    height: 43,
    top: "50%",
    position: "absolute",
  },
  pm1Layout: {
    height: 18,
    fontSize: FontSize.size_smi,
    width: "61.6%",
    textAlign: "left",
    color: Color.colorDarkslategray,
    top: "50%",
    position: "absolute",
  },
  bgPosition: {
    left: "0%",
    width: "100%",
  },
  pm3Typo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  fiSsCubeIcon: {
    top: 522,
    left: 22,
    position: "absolute",
  },
  fiSsTruckSideIcon: {
    top: 619,
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  headerIcon: {
    height: "2.96%",
    width: "84%",
    top: "6.16%",
    bottom: "90.89%",
    left: "8%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pm: {
    marginTop: -262,
    width: "65.6%",
    left: "-1.07%",
    fontSize: 26,
    textAlign: "center",
    color: Color.colorSienna,
    fontWeight: "600",
    textDecoration: "underline",
    fontFamily: FontFamily.bold,
  },
  screen15Child: {
    top: 37,
    left: 200,
    width: 175,
    height: 213,
    position: "absolute",
  },
  locationPin1Icon: {
    top: 193,
    left: 28,
    width: 15,
    height: 17,
    position: "absolute",
  },
  pm1: {
    marginTop: -213,
    left: "13.87%",
    fontFamily: FontFamily.bold,
  },
  happilyFarmedBy: {
    fontFamily: FontFamily.bold,
  },
  justin: {
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    textDecoration: "underline",
  },
  pm2: {
    marginTop: -181,
    left: "14.4%",
  },
  bg1: {
    height: "102.2%",
    width: "100.62%",
    top: "-1.1%",
    right: "-0.31%",
    bottom: "-1.1%",
    left: "-0.31%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeashell,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    position: "absolute",
  },
  bg: {
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  calendar: {
    height: "11.21%",
    width: "85.87%",
    top: "32.64%",
    bottom: "56.16%",
    left: "6.13%",
  },
  pm3: {
    marginTop: -21.6,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_200,
    left: "0%",
    width: "100%",
  },
  backIcon: {
    height: "56.02%",
    width: "13.37%",
    top: "43.98%",
    right: "43.54%",
    left: "43.09%",
    bottom: "0%",
    position: "absolute",
  },
  pmParent: {
    marginTop: -33,
    width: "48.27%",
    right: "25.87%",
    left: "25.87%",
  },
  pm4: {
    marginTop: -126,
    width: "83.2%",
    left: "9.33%",
    fontSize: FontSize.size_xs,
    height: 79,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  pm5: {
    marginTop: -148,
    width: "13.6%",
    left: "7.47%",
    fontSize: FontSize.size_sm,
    color: Color.colorSienna,
    fontWeight: "600",
    textDecoration: "underline",
  },
  icon: {
    top: 222,
    borderRadius: Border.br_45xl,
    width: 32,
    height: 32,
  },
  screen15Item: {
    top: 416,
    left: 3,
    width: 62,
    height: 65,
    position: "absolute",
  },
  fiSsRecordVinylIcon: {
    top: 716,
    left: 19,
    position: "absolute",
  },
  image3Icon: {
    top: 55,
    left: 176,
    width: 24,
    height: 24,
    position: "absolute",
  },
  screen15: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen15;
