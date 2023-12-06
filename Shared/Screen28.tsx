import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import AnalyticsContainer1 from "../components/AnalyticsContainer1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export const Screen28 = () => {
  return (
    <View style={styles.screen28}>
      <View style={styles.title}>
        <Text style={styles.helloStevenSmart}>Hey Lys</Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header5.png")}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu3.png")}
      />
      <Text style={styles.pm}>Shop</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/68.png")}
      />
      <View style={[styles.calendar, styles.cardPosition]}>
        <View style={[styles.bg, styles.bgPosition]}>
          <View style={styles.bg1} />
        </View>
      </View>
      <AnalyticsContainer1 />
      <Text style={styles.pm1}>Analytics</Text>
      <View style={styles.button}>
        <View style={[styles.bg2, styles.bg2ShadowBox]} />
        <Text style={[styles.text, styles.textFlexBox]}>ADD NEW PRODUCT</Text>
        <View style={styles.addNewImage}>
          <View style={[styles.bg3, styles.bg3ShadowBox]} />
          <View style={styles.plusIcon}>
            <View style={styles.combinedShape}>
              <View
                style={[
                  styles.combinedShapeChild,
                  styles.rectangle185CopyLayout,
                ]}
              />
              <View
                style={[styles.rectangle185Copy, styles.rectangle185CopyLayout]}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.helloStevenYour}>My Wholesales</Text>
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.bg, styles.bgPosition]}>
          <View style={styles.bg5ShadowBox} />
        </View>
        <View style={[styles.text1, styles.textPosition1]}>
          <View style={[styles.bgParent, styles.bgGroupPosition]}>
            <View style={[styles.bg6, styles.bg3Position]} />
            <View style={[styles.bg7, styles.bg7Position]} />
          </View>
          <Text style={[styles.pm2, styles.pm2Typo]}>dsdsds</Text>
          <Text style={[styles.pm3, styles.pm3Position]}>Status: EXPORT</Text>
          <Text style={[styles.pm4, styles.pm4Typo]}>1/5</Text>
          <View style={[styles.addNewImage1, styles.addPosition]}>
            <View style={[styles.bg8, styles.bg7Position]} />
            <Text
              style={[styles.helloStevenYour1, styles.helloPosition]}
            >{`>`}</Text>
          </View>
        </View>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
      </View>
      <View style={styles.card1}>
        <View style={[styles.bg, styles.bgPosition]}>
          <View style={styles.bg5ShadowBox} />
        </View>
        <View style={[styles.text2, styles.textPosition1]}>
          <View style={[styles.bgGroup, styles.bgGroupPosition]}>
            <View style={[styles.bg11, styles.bg3Position]} />
            <View style={[styles.bg12, styles.bg7Position]} />
          </View>
          <Text style={[styles.pm5, styles.pm2Typo]}>sdsdsd</Text>
          <Text style={[styles.pm6, styles.pm6Position]}>
            Status: PACKAGING
          </Text>
          <Text style={[styles.pm7, styles.pm6Position]}>3/5</Text>
          <View style={[styles.addNewImage2, styles.addPosition]}>
            <View style={[styles.bg13, styles.bg7Position]} />
            <Text
              style={[styles.helloStevenYour2, styles.helloPosition]}
            >{`>`}</Text>
          </View>
        </View>
        <Image
          style={[styles.bgIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
      </View>
      <View style={[styles.textWrapper, styles.textPosition]}>
        <Text style={[styles.text3, styles.textPosition]}>HARVEST</Text>
      </View>
      <Text style={styles.helloStevenYour3}>View all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    left: "4%",
    right: "4%",
    width: "92%",
    position: "absolute",
  },
  bgPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  bg2ShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_3xs,
    right: "0%",
    width: "100%",
  },
  textFlexBox: {
    letterSpacing: 2,
    textAlign: "center",
    color: Color.colorWhite,
  },
  bg3ShadowBox: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  rectangle185CopyLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xs_5,
    height: "13%",
    position: "absolute",
    width: "100%",
  },
  textPosition1: {
    left: "33.04%",
    right: "2.61%",
    width: "64.35%",
    position: "absolute",
  },
  bgGroupPosition: {
    left: "12.16%",
    right: "21.62%",
    width: "66.22%",
    position: "absolute",
  },
  bg3Position: {
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  bg7Position: {
    backgroundColor: Color.colorSienna,
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  pm2Typo: {
    width: "96.08%",
    fontSize: FontSize.bold_size,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  pm3Position: {
    height: 13,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  pm4Typo: {
    fontFamily: FontFamily.robotoRegular,
    width: "16.67%",
    fontSize: FontSize.size_xs,
  },
  addPosition: {
    left: "90.99%",
    width: "9.01%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  helloPosition: {
    left: "30%",
    width: "70%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  pm6Position: {
    height: 15,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    height: 7,
    top: "50%",
    position: "absolute",
  },
  helloStevenSmart: {
    marginTop: -16.5,
    textAlign: "left",
    color: Color.colorSienna,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bold,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -314,
    width: "22.67%",
    right: "68%",
    left: "9.33%",
    height: 33,
    top: "50%",
    position: "absolute",
  },
  headerIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "6.03%",
    right: "86.4%",
    bottom: "91.01%",
    left: "7.2%",
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
    marginTop: 278,
    width: "28.27%",
    left: "-31.2%",
    height: 32,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: "50%",
    position: "absolute",
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
    height: "102.27%",
    width: "100.58%",
    top: "-1.14%",
    right: "-0.29%",
    bottom: "-1.14%",
    left: "-0.29%",
    backgroundColor: Color.colorSeashell,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
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
    right: "0%",
    width: "100%",
  },
  calendar: {
    height: "10.84%",
    top: "18.84%",
    bottom: "70.32%",
  },
  pm1: {
    marginTop: -240,
    width: "46.4%",
    letterSpacing: 2,
    fontSize: FontSize.bold_size,
    left: "8.53%",
    height: 32,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.colorTan_100,
    shadowColor: "#d9cfc1",
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  text: {
    marginTop: -5,
    width: "45.42%",
    left: "27.12%",
    fontSize: FontSize.size_3xs,
    height: 9,
    color: Color.colorWhite,
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  bg3: {
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  combinedShapeChild: {
    top: "3504%",
    right: "-710%",
    bottom: "-3417%",
    left: "710%",
  },
  rectangle185Copy: {
    top: "3460%",
    right: "-766%",
    bottom: "-3373%",
    left: "766%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  combinedShape: {
    backgroundColor: Color.colorRosybrown_200,
    width: 10,
    height: 10,
  },
  plusIcon: {
    height: "50%",
    width: "50%",
    top: "20%",
    right: "25%",
    bottom: "30%",
    left: "25%",
    position: "absolute",
  },
  addNewImage: {
    height: "52.63%",
    width: "6.78%",
    top: "23.68%",
    right: "86.78%",
    bottom: "23.68%",
    left: "6.44%",
    position: "absolute",
  },
  button: {
    height: "4.68%",
    width: "78.67%",
    top: "41.01%",
    right: "8.8%",
    bottom: "54.31%",
    left: "12.53%",
    position: "absolute",
  },
  helloStevenYour: {
    marginTop: -101,
    width: "38.13%",
    height: 19,
    fontSize: FontSize.size_base,
    left: "8.53%",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  bg5ShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  bg6: {
    borderRadius: Border.br_3xs,
    right: "0%",
    width: "100%",
  },
  bg7: {
    width: "59.05%",
    right: "40.95%",
    borderRadius: Border.br_3xs,
  },
  bgParent: {
    height: "7.25%",
    top: "68%",
    bottom: "24.76%",
  },
  pm2: {
    marginTop: -41.4,
    height: 21,
  },
  pm3: {
    marginTop: -10.8,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    width: "54.5%",
  },
  pm4: {
    marginTop: 11.5,
    height: 13,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  bg8: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  helloStevenYour1: {
    marginTop: -8.55,
    height: 16,
    color: Color.colorWhite,
  },
  addNewImage1: {
    height: "20.65%",
    top: "79.35%",
  },
  text1: {
    height: "70.77%",
    top: "17.26%",
    bottom: "11.97%",
  },
  bgIcon: {
    height: "49.57%",
    width: "22.03%",
    top: "20.51%",
    right: "72.75%",
    bottom: "29.91%",
    left: "5.22%",
    borderRadius: Border.br_3xs,
  },
  card: {
    height: "14.41%",
    top: "50.12%",
    bottom: "35.47%",
  },
  bg11: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 30,
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_3xs,
    right: "0%",
    width: "100%",
  },
  bg12: {
    width: "77.55%",
    right: "22.45%",
    borderRadius: Border.br_3xs,
  },
  bgGroup: {
    height: "7.23%",
    top: "67.98%",
    bottom: "24.79%",
  },
  pm5: {
    marginTop: -48.4,
    height: 25,
  },
  pm6: {
    marginTop: -12.6,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    width: "54.5%",
  },
  pm7: {
    marginTop: 13.4,
    fontFamily: FontFamily.robotoRegular,
    width: "16.67%",
    fontSize: FontSize.size_xs,
  },
  bg13: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  helloStevenYour2: {
    marginTop: -10,
    color: Color.colorSeashell,
    height: 19,
  },
  addNewImage2: {
    height: "20.66%",
    top: "79.34%",
  },
  text2: {
    height: "77.44%",
    top: "16.16%",
    bottom: "6.4%",
  },
  bgIcon1: {
    height: "68.8%",
    width: "24.64%",
    top: "16.8%",
    right: "71.3%",
    bottom: "14.4%",
    left: "4.06%",
    borderRadius: Border.br_3xs,
  },
  card1: {
    height: "15.39%",
    top: "66.5%",
    right: "3.47%",
    bottom: "18.1%",
    left: "4.53%",
    width: "92%",
    position: "absolute",
  },
  text3: {
    marginTop: -3.5,
    fontSize: 5,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    letterSpacing: 2,
    textAlign: "center",
    left: "0%",
    height: 7,
    width: "100%",
  },
  textWrapper: {
    marginTop: 60,
    width: "32.27%",
    right: "9.33%",
    left: "58.4%",
  },
  helloStevenYour3: {
    marginTop: 275,
    width: "12.53%",
    left: "82.4%",
    textDecoration: "underline",
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  screen28: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen28;
