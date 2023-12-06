import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ImageContainer from "../components/ImageContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen6 = () => {
  return (
    <View style={styles.screen6}>
      <Image
        style={[styles.bgIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/bg3.png")}
      />
      <ImageContainer />
      <View style={styles.profileStats}>
        <View style={[styles.images, styles.imagesPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>489</Text>
          <Text style={[styles.images1, styles.images1Position]}>Images</Text>
        </View>
        <View style={[styles.followers, styles.imagesPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>95.2k</Text>
          <Text style={[styles.images1, styles.images1Position]}>
            Followers
          </Text>
        </View>
        <View style={[styles.following, styles.imagesPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>763</Text>
          <Text style={[styles.images1, styles.images1Position]}>
            Following
          </Text>
        </View>
      </View>
      <View style={[styles.user, styles.userPosition]}>
        <View style={[styles.title, styles.userPosition]}>
          <Text style={[styles.berlinGermany, styles.profileClr]}>
            Coventry, United Kingdom
          </Text>
          <Text style={[styles.emilyWinkler, styles.profileClr]}>
            Lys Irebe
          </Text>
        </View>
        <View style={[styles.avatar, styles.bgIconPosition]}>
          <View style={[styles.mask, styles.maskPosition]} />
        </View>
      </View>
      <View style={styles.header}>
        <Image
          style={[styles.moreIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more-icon.png")}
        />
        <View style={[styles.name, styles.namePosition]}>
          <Text style={[styles.profile, styles.namePosition]}>PROFILE</Text>
        </View>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-icon2.png")}
        />
      </View>
      <Image
        style={[styles.messageButtonIcon, styles.maskPosition]}
        contentFit="cover"
        source={require("../assets/message-button.png")}
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
  imagesPosition: {
    width: "33.33%",
    marginTop: -20,
    height: 40,
    top: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.colorLightslategray,
    width: "100%",
  },
  images1Position: {
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  userPosition: {
    top: "50%",
    position: "absolute",
  },
  profileClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  bgIconPosition: {
    top: "0%",
    position: "absolute",
  },
  maskPosition: {
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    width: "7.62%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  namePosition: {
    marginTop: -7,
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    height: "103.69%",
    bottom: "-3.69%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    marginTop: -20,
    textAlign: "center",
    color: Color.colorLightslategray,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  images1: {
    marginTop: 6,
    fontSize: FontSize.size_xs,
    left: "0%",
    textAlign: "center",
    color: Color.colorLightslategray,
    width: "100%",
  },
  images: {
    right: "66.67%",
    left: "0%",
  },
  followers: {
    right: "33.33%",
    left: "33.33%",
  },
  following: {
    left: "66.67%",
    right: "0%",
  },
  profileStats: {
    marginTop: -36,
    width: "92%",
    right: "4%",
    left: "4%",
    height: 40,
    top: "50%",
    position: "absolute",
  },
  berlinGermany: {
    marginTop: 10.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
    left: "0%",
  },
  emilyWinkler: {
    marginTop: -26.5,
    left: "20.31%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: 48.5,
    height: 53,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  mask: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorLightgray,
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  avatar: {
    height: "59.11%",
    width: "75%",
    right: "12.5%",
    bottom: "40.89%",
    left: "12.5%",
  },
  user: {
    marginTop: -302,
    width: "42.67%",
    right: "28.67%",
    left: "28.67%",
    height: 203,
  },
  moreIcon: {
    left: "92.38%",
    right: "0%",
  },
  profile: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  name: {
    width: "15.24%",
    right: "42.22%",
    left: "42.54%",
    height: 14,
  },
  backIcon: {
    right: "92.38%",
    left: "0%",
  },
  header: {
    height: "2.96%",
    width: "84%",
    top: "6.16%",
    right: "8%",
    bottom: "90.89%",
    left: "8%",
    position: "absolute",
  },
  messageButtonIcon: {
    height: "17.24%",
    width: "40%",
    top: "82.76%",
    right: "29.87%",
    left: "30.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  screen6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen6;
