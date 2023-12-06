import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SectionComponent03 = () => {
  return (
    <View style={styles.infoParent}>
      <View style={styles.infoShadowBox}>
        <View style={[styles.bg, styles.bgShadowBox]} />
        <View style={[styles.infoGroup, styles.bg2Position]}>
          <View style={styles.infoShadowBox}>
            <View style={[styles.bg1, styles.bgShadowBox]} />
          </View>
          <View style={[styles.story, styles.storyLayout]}>
            <View style={[styles.border, styles.maskPosition]} />
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
            </View>
          </View>
          <View style={[styles.story, styles.storyLayout]}>
            <View style={[styles.border, styles.maskPosition]} />
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
            </View>
          </View>
          <View style={[styles.story, styles.storyLayout]}>
            <View style={[styles.border, styles.maskPosition]} />
            <View style={styles.image}>
              <View style={[styles.mask, styles.maskPosition]} />
            </View>
          </View>
          <Text style={[styles.checkAvailability, styles.checkTypo1]}>
            PROCESSING STAGE
          </Text>
          <Text style={[styles.checkAvailability1, styles.checkTypo]}>03</Text>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={[styles.likeParent, styles.bg2Position]}>
              <View style={[styles.likeParent, styles.bg2Position]}>
                <View style={[styles.bg2, styles.bg2Position]} />
              </View>
              <Image
                style={[styles.musicAndSoundPlayerplay, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/music-and-sound-playerplay1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.story3, styles.storyLayout]}>
        <View style={[styles.border, styles.maskPosition]} />
        <View style={styles.image}>
          <View style={[styles.mask, styles.maskPosition]} />
        </View>
      </View>
      <Text style={[styles.checkAvailability2, styles.checkTypo1]}>
        HARVESTING STAGE
      </Text>
      <Text style={[styles.checkAvailability3, styles.checkTypo]}>02</Text>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={[styles.likeParent, styles.bg2Position]}>
          <View style={[styles.likeParent, styles.bg2Position]}>
            <View style={[styles.bg2, styles.bg2Position]} />
          </View>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgShadowBox: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  bg2Position: {
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    position: "absolute",
  },
  storyLayout: {
    width: "15.65%",
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
  checkTypo1: {
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: FontSize.size_xs,
    left: "23.77%",
    top: "50%",
    position: "absolute",
  },
  checkTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    left: "8.99%",
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: "84.35%",
    right: "3.48%",
    width: "12.17%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "25.58%",
    position: "absolute",
  },
  bg: {
    bottom: "57.05%",
    height: "42.95%",
  },
  bg1: {
    bottom: "0%",
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    height: "100%",
  },
  infoShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "#ddd",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
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
    top: "11.94%",
    right: "80.29%",
    bottom: "10.45%",
    left: "4.06%",
  },
  checkAvailability: {
    marginTop: -7.5,
  },
  checkAvailability1: {
    marginTop: -9.5,
  },
  bg2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke,
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  likeParent: {
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  musicAndSoundPlayerplay: {
    height: "50%",
    width: "47.62%",
    right: "21.43%",
    bottom: "24.42%",
    left: "30.95%",
  },
  groupWrapper: {
    height: "64.18%",
    top: "19.4%",
    bottom: "16.42%",
  },
  infoGroup: {
    top: "57.05%",
    height: "42.95%",
    right: "0%",
    width: "100%",
  },
  story3: {
    height: "33.33%",
    top: "5.13%",
    right: "81.16%",
    bottom: "61.54%",
    left: "3.19%",
  },
  checkAvailability2: {
    marginTop: -51,
  },
  checkAvailability3: {
    marginTop: -54,
  },
  icon: {
    height: "30.7%",
    width: "44.05%",
    right: "32.14%",
    bottom: "43.72%",
    left: "23.81%",
  },
  groupContainer: {
    height: "27.56%",
    top: "8.33%",
    bottom: "64.1%",
  },
  infoParent: {
    width: 345,
    height: 156,
    marginTop: 20,
  },
});

export default SectionComponent03;
