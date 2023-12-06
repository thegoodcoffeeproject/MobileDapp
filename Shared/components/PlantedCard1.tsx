import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const PlantedCard1 = () => {
  return (
    <View style={styles.calendarParent}>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={styles.bg}>
          <View style={styles.bg1ShadowBox} />
        </View>
      </View>
      <View style={[styles.calendar1, styles.calendarPosition]}>
        <View style={styles.bg}>
          <View style={styles.bg1ShadowBox} />
        </View>
      </View>
      <View style={[styles.calendar2, styles.calendarPosition]}>
        <View style={styles.bg}>
          <View style={styles.bg1ShadowBox} />
        </View>
      </View>
      <View style={styles.calendar3}>
        <View style={styles.bg}>
          <View style={styles.bg1ShadowBox} />
        </View>
      </View>
      <View style={[styles.confrimed, styles.confrimedLayout]}>
        <Text style={[styles.planted12, styles.planted12Typo]}>
          Planted ~ 12 Nov 23
        </Text>
        <Text style={styles.justinFirstPlantedContainer}>
          <Text style={styles.justinFirstPlanted}>
            Justin first planted this bean @ 11.00
          </Text>
          <Text style={styles.pm}>{`PM  `}</Text>
        </Text>
      </View>
      <View style={[styles.confrimed1, styles.confrimedLayout]}>
        <Text style={[styles.planted12, styles.planted12Typo]}>
          Harvested ~ 12 Jun 24
        </Text>
        <Text style={styles.justinFirstPlantedContainer}>
          <Text style={styles.justinFirstPlanted}>
            Justin first planted this bean @ 11.00
          </Text>
          <Text style={styles.pm}>{`PM  `}</Text>
        </Text>
      </View>
      <View style={[styles.confrimed2, styles.confrimedLayout]}>
        <Text style={[styles.planted12, styles.planted12Typo]}>
          Brewed ~ 20 Sep 24
        </Text>
        <Text style={styles.justinFirstPlantedContainer}>
          <Text style={styles.justinFirstPlanted}>
            Justin first planted this bean @ 11.00
          </Text>
          <Text style={styles.pm}>{`PM  `}</Text>
        </Text>
      </View>
      <View style={[styles.confrimed3, styles.confrimedLayout]}>
        <Text style={[styles.planted12, styles.planted12Typo]}>
          Exported ~ 12 Aug 24
        </Text>
        <Text style={styles.justinFirstPlantedContainer}>
          <Text style={styles.justinFirstPlanted}>
            Justin first planted this bean @ 11.00
          </Text>
          <Text style={styles.pm}>{`PM  `}</Text>
        </Text>
      </View>
      <View style={[styles.addNewImage, styles.addPosition]}>
        <View style={styles.bg8ShadowBox} />
        <Text
          style={[styles.helloStevenYour, styles.planted12Typo]}
        >{`>`}</Text>
      </View>
      <View style={[styles.addNewImage1, styles.addPosition]}>
        <View style={styles.bg8ShadowBox} />
        <Text
          style={[styles.helloStevenYour, styles.planted12Typo]}
        >{`>`}</Text>
      </View>
      <View style={[styles.addNewImage2, styles.addPosition]}>
        <View style={styles.bg8ShadowBox} />
        <Text
          style={[styles.helloStevenYour, styles.planted12Typo]}
        >{`>`}</Text>
      </View>
      <View style={[styles.addNewImage3, styles.addPosition]}>
        <View style={styles.bg8ShadowBox} />
        <Text
          style={[styles.helloStevenYour, styles.planted12Typo]}
        >{`>`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarPosition: {
    left: "0.75%",
    right: "0.75%",
    width: "98.49%",
    height: "17.83%",
    position: "absolute",
  },
  confrimedLayout: {
    height: 39,
    width: 213,
    left: 18,
    position: "absolute",
  },
  planted12Typo: {
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  addPosition: {
    left: "89.43%",
    right: "3.02%",
    width: "7.55%",
    height: "6.69%",
    position: "absolute",
  },
  bg1ShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorSeashell,
    borderRadius: Border.br_3xs,
    left: "-0.38%",
    bottom: "-1.79%",
    right: "-0.38%",
    top: "-1.79%",
    width: "100.77%",
    height: "103.57%",
    position: "absolute",
  },
  bg: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  calendar: {
    bottom: "82.17%",
    top: "0%",
    left: "0.75%",
    right: "0.75%",
    width: "98.49%",
    height: "17.83%",
  },
  calendar1: {
    top: "27.39%",
    bottom: "54.78%",
    left: "0.75%",
    right: "0.75%",
    width: "98.49%",
    height: "17.83%",
  },
  calendar2: {
    top: "54.78%",
    bottom: "27.39%",
    left: "0.75%",
    right: "0.75%",
    width: "98.49%",
    height: "17.83%",
  },
  calendar3: {
    top: "82.17%",
    bottom: "0%",
    left: "0.75%",
    right: "0.75%",
    width: "98.49%",
    height: "17.83%",
    position: "absolute",
  },
  planted12: {
    top: 0,
    width: 195,
    color: Color.colorGray_700,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
    height: 20,
    fontSize: FontSize.size_base,
  },
  justinFirstPlanted: {
    fontSize: FontSize.size_3xs,
  },
  pm: {
    fontSize: FontSize.size_4xs,
  },
  justinFirstPlantedContainer: {
    top: 26,
    height: 13,
    opacity: 0.8,
    textAlign: "left",
    color: Color.colorGray_700,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
    width: 213,
    position: "absolute",
  },
  confrimed: {
    top: 8,
  },
  confrimed1: {
    top: 94,
  },
  confrimed2: {
    top: 267,
  },
  confrimed3: {
    top: 180,
  },
  bg8ShadowBox: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.colorSienna,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  helloStevenYour: {
    marginTop: -10.5,
    width: "70%",
    top: "50%",
    left: "30%",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    height: 20,
    fontSize: FontSize.size_base,
  },
  addNewImage: {
    top: "9.55%",
    bottom: "83.76%",
  },
  addNewImage1: {
    top: "36.31%",
    bottom: "57.01%",
  },
  addNewImage2: {
    top: "92.04%",
    bottom: "1.27%",
  },
  addNewImage3: {
    top: "65.29%",
    bottom: "28.03%",
  },
  calendarParent: {
    top: 433,
    left: 88,
    width: 265,
    height: 314,
    position: "absolute",
  },
});

export default PlantedCard1;
