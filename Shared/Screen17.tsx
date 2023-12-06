import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import CardContainer1 from "../components/CardContainer1";
import MaximizeIcon from "../components/MaximizeIcon";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen17 = () => {
  return (
    <View style={styles.screen17}>
      <View style={styles.title}>
        <Text style={styles.helloStevenSmart}>Hey Chantel</Text>
      </View>
      <Image
        style={styles.headerIcon}
        contentFit="cover"
        source={require("../assets/header5.png")}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu3.png")}
      />
      <Text style={styles.pm}>{`Scan & Trace`}</Text>
      <Text style={[styles.pm1, styles.pm1Typo]}>Shop</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/68.png")}
      />
      <View style={styles.calendar}>
        <View style={styles.bg}>
          <View style={styles.bg1} />
        </View>
      </View>
      <Text style={styles.pm2}>
        scan your coffee to trace it’s journey from bean to cup !
      </Text>
      <Text style={[styles.pm3, styles.pm3Layout]}>{`Recent Activity `}</Text>
      <Text style={styles.helloStevenYour}>View all</Text>
      <View style={[styles.bg2, styles.bg2ShadowBox]} />
      <View style={styles.bg3} />
      <CardContainer1 />
      <Text style={[styles.location, styles.locationTypo1]}>
        Ethiopian Blend
      </Text>
      <Text
        style={[styles.location1, styles.locationTypo1]}
      >{`Arabica Coffee `}</Text>
      <Text style={[styles.location2, styles.locationTypo1]}>
        Traced: Kenyan Bean
      </Text>
      <Text style={[styles.location3, styles.locationTypo]}>-£3.45</Text>
      <Text style={styles.location4}>-£2.80</Text>
      <Text style={[styles.location5, styles.locationTypo]}>-£3.45</Text>
      <Text style={[styles.date, styles.dateTypo]}>
        Purchase Date: 12/12/22
      </Text>
      <Text style={[styles.date1, styles.dateTypo]}>
        Purchase Date: 12/12/22
      </Text>
      <Text style={[styles.date2, styles.dateTypo]}>Scan Date: 12/12/22</Text>
      <View style={[styles.bgParent, styles.bgParentPosition]}>
        <View style={[styles.bg4, styles.bg2ShadowBox]} />
        <Image
          style={styles.qualityCoffee1Icon}
          contentFit="cover"
          source={require("../assets/qualitycoffee-1.png")}
        />
      </View>
      <View style={[styles.bgParent, styles.bgParentPosition]}>
        <View style={[styles.bg5, styles.bg2ShadowBox]} />
        <Image
          style={styles.qualityCoffee1Icon}
          contentFit="cover"
          source={require("../assets/qualitycoffee-1.png")}
        />
      </View>
      <View style={[styles.bgContainer, styles.bgParentPosition]}>
        <View style={[styles.bg6, styles.bg2ShadowBox]} />
        <Image
          style={styles.qualityCoffee1Icon}
          contentFit="cover"
          source={require("../assets/qualitycoffee-1.png")}
        />
      </View>
      <View style={[styles.screen17Child, styles.screen17Layout]} />
      <View style={[styles.screen17Item, styles.screen17Layout]} />
      <Image
        style={[styles.workingWithFarmers11, styles.pm3Layout]}
        contentFit="cover"
        source={require("../assets/workingwithfarmers-1-1.png")}
      />
      <MaximizeIcon
        imageDimensions={require("../assets/maximize1.png")}
        maximizeIconPosition="absolute"
        maximizeIconWidth={160}
        maximizeIconHeight={128}
        maximizeIconTop={371}
        maximizeIconLeft={38}
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.pm4, styles.pm1Typo]}>{`Current Balance
£20`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pm1Typo: {
    height: 32,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  pm3Layout: {
    height: 19,
    position: "absolute",
  },
  bg2ShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    position: "absolute",
  },
  locationTypo1: {
    height: 17,
    fontSize: FontSize.size_sm,
    width: "44.27%",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  locationTypo: {
    left: "76.53%",
    width: "16.8%",
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  dateTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    left: "21.87%",
    height: 14,
    color: Color.colorDarkslategray,
    textAlign: "left",
    top: "50%",
    width: "35.47%",
    position: "absolute",
  },
  bgParentPosition: {
    right: "81.87%",
    width: "10.93%",
    height: "4.43%",
    left: "7.2%",
    position: "absolute",
  },
  screen17Layout: {
    height: 1,
    width: 251,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  helloStevenSmart: {
    marginTop: -16.5,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    left: "0%",
    fontSize: FontSize.size_5xl,
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -314,
    right: "55.2%",
    left: "9.33%",
    height: 33,
    top: "50%",
    width: "35.47%",
    position: "absolute",
  },
  headerIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "6.03%",
    right: "86.4%",
    bottom: "91.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "7.2%",
    position: "absolute",
    overflow: "hidden",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    bottom: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  pm: {
    marginTop: -44,
    width: "32.53%",
    left: "60.27%",
    fontSize: FontSize.size_13xl,
    height: 87,
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  pm1: {
    marginTop: 278,
    width: "28.27%",
    left: "-31.2%",
    fontSize: FontSize.size_5xl,
    height: 32,
    textAlign: "center",
  },
  icon: {
    top: 77,
    left: 289,
    borderRadius: Border.br_45xl,
    width: 72,
    height: 72,
    position: "absolute",
  },
  bg1: {
    height: "101.5%",
    width: "100.58%",
    top: "-0.75%",
    right: "-0.29%",
    bottom: "-0.75%",
    left: "-0.29%",
    backgroundColor: Color.colorSeashell,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  bg: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  calendar: {
    height: "16.38%",
    width: "92%",
    top: "18.84%",
    right: "4%",
    bottom: "64.78%",
    left: "4%",
    position: "absolute",
  },
  pm2: {
    marginTop: 43,
    width: "29.07%",
    left: "63.73%",
    height: 62,
    fontSize: FontSize.size_smi,
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  pm3: {
    marginTop: 128,
    width: "40.53%",
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
    height: 19,
    left: "7.2%",
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
  },
  helloStevenYour: {
    marginTop: 130,
    width: "12.53%",
    left: "82.67%",
    textDecoration: "underline",
    height: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  bg2: {
    height: "17.86%",
    width: "52.8%",
    top: "44.58%",
    right: "43.47%",
    bottom: "37.56%",
    left: "3.73%",
    borderRadius: Border.br_xl,
  },
  bg3: {
    top: "85.59%",
    right: "82.67%",
    bottom: "9.98%",
    left: "6.4%",
    width: "10.93%",
    height: "4.43%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  location: {
    marginTop: 171,
    left: "21.87%",
    height: 17,
    fontSize: FontSize.size_sm,
    width: "44.27%",
  },
  location1: {
    marginTop: 230,
    left: "21.87%",
    height: 17,
    fontSize: FontSize.size_sm,
    width: "44.27%",
  },
  location2: {
    marginTop: 293,
    left: "21.07%",
    height: 17,
    fontSize: FontSize.size_sm,
    width: "44.27%",
  },
  location3: {
    marginTop: 180,
  },
  location4: {
    marginTop: 235,
    left: "77.07%",
    width: "16.8%",
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  location5: {
    marginTop: 297,
  },
  date: {
    marginTop: 195,
  },
  date1: {
    marginTop: 254,
  },
  date2: {
    marginTop: 314,
  },
  bg4: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  qualityCoffee1Icon: {
    top: 7,
    left: 11,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bgParent: {
    top: "71.31%",
    bottom: "24.26%",
  },
  bg5: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  bg6: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  bgContainer: {
    top: "77.96%",
    bottom: "17.61%",
  },
  screen17Child: {
    top: 626,
    left: 83,
  },
  screen17Item: {
    top: 684,
    left: 86,
  },
  workingWithFarmers11: {
    top: 705,
    left: 34,
    width: 19,
  },
  image2Icon: {
    top: 407,
    left: 84,
    width: 71,
    height: 55,
    position: "absolute",
  },
  pm4: {
    marginTop: -238,
    width: "72.53%",
    left: "13.6%",
    fontSize: FontSize.bold_size,
    letterSpacing: 2,
  },
  screen17: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen17;
