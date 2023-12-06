import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

export const Screen65 = () => {
  return (
    <View style={styles.screen65}>
      <View style={styles.title}>
        <Text
          style={styles.thisModernlyFurnis}
        >{`Use the steps below to track your coffee growing process `}</Text>
        <Text style={styles.tidyMinimal}>Plantation Tracker</Text>
      </View>
      <Text style={styles.text}>RWANDAN ESPRESSO</Text>
      <Image
        style={[styles.backIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/back-icon.png")}
      />
      <View style={styles.bg} />
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
        tRYCOPENHAGEN={`START DATE
`}
      />
      <Image
        style={styles.bottomMenuIcon}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupLayout}>
          <View style={styles.bg2Position}>
            <View style={styles.infoShadowBox}>
              <View style={styles.bg1Position} />
            </View>
            <View style={[styles.story, styles.storyPosition]}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <View style={[styles.story, styles.storyPosition]}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <View style={[styles.story, styles.storyPosition]}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability, styles.checkTypo1]}>
              PLANTING STAGE
            </Text>
            <Text style={[styles.checkAvailability1, styles.checkTypo]}>
              01
            </Text>
          </View>
          <View style={[styles.likeParent, styles.likePosition]}>
            <View style={styles.bg2Position}>
              <View style={[styles.bg2, styles.bg2Position]} />
            </View>
            <Image
              style={[styles.interfaceEssentialcheckIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/interface-essentialcheck.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={styles.bg2Position}>
            <View style={styles.bg2Position}>
              <View style={styles.infoShadowBox}>
                <View style={styles.bg1Position} />
              </View>
            </View>
            <Text style={[styles.checkAvailability2, styles.checkTypo1]}>
              HARVESTING STAGE
            </Text>
            <View style={[styles.storyParent, styles.storyPosition]}>
              <View style={styles.bg2Position}>
                <View style={[styles.border, styles.maskPosition]} />
                <View style={[styles.image3, styles.imagePosition]}>
                  <View style={[styles.mask, styles.maskPosition]} />
                </View>
              </View>
              <Text style={[styles.checkAvailability3, styles.checkTypo]}>
                02
              </Text>
            </View>
            <View style={[styles.likeGroup, styles.likePosition]}>
              <View style={styles.bg2Position}>
                <View style={[styles.bg2, styles.bg2Position]} />
              </View>
              <View style={styles.doorsIcon}>
                <View style={styles.bg2Position} />
              </View>
            </View>
          </View>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={styles.bg2Position}>
            <View style={styles.infoShadowBox}>
              <View style={styles.bg1Position} />
            </View>
          </View>
          <Text style={[styles.checkAvailability4, styles.checkTypo1]}>
            PROCESSING STAGE
          </Text>
          <View style={[styles.storyGroup, styles.storyPosition1]}>
            <View style={styles.bg2Position}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability5, styles.checkTypo]}>
              03
            </Text>
          </View>
          <View style={[styles.likeContainer, styles.likePosition]}>
            <View style={styles.bg2Position}>
              <View style={[styles.bg2, styles.bg2Position]} />
            </View>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={styles.bg2Position}>
            <View style={styles.infoShadowBox}>
              <View style={styles.bg1Position} />
            </View>
          </View>
          <Text style={[styles.checkAvailability4, styles.checkTypo1]}>
            DRYING STAGE
          </Text>
          <View style={[styles.storyGroup, styles.storyPosition1]}>
            <View style={styles.bg2Position}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability5, styles.checkTypo]}>
              04
            </Text>
          </View>
          <View style={[styles.likeContainer, styles.likePosition]}>
            <View style={styles.bg2Position}>
              <View style={[styles.bg2, styles.bg2Position]} />
            </View>
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={styles.bg2Position}>
            <View style={styles.infoShadowBox}>
              <View style={styles.bg1Position} />
            </View>
          </View>
          <Text style={[styles.checkAvailability4, styles.checkTypo1]}>
            MILLING STAGE
          </Text>
          <View style={[styles.storyGroup, styles.storyPosition1]}>
            <View style={styles.bg2Position}>
              <View style={[styles.border, styles.maskPosition]} />
              <View style={[styles.image, styles.imagePosition]}>
                <View style={[styles.mask, styles.maskPosition]} />
              </View>
            </View>
            <Text style={[styles.checkAvailability5, styles.checkTypo]}>
              06
            </Text>
          </View>
          <View style={[styles.likeContainer, styles.likePosition]}>
            <View style={styles.bg2Position}>
              <View style={[styles.bg2, styles.bg2Position]} />
            </View>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  freeWifiPosition: {
    textAlign: "right",
    left: "57.33%",
    width: "30.67%",
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  storyPosition: {
    left: "4.06%",
    right: "80.29%",
    width: "15.65%",
    position: "absolute",
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
  imagePosition: {
    left: "7.78%",
    right: "7.78%",
    width: "84.44%",
    position: "absolute",
  },
  checkTypo1: {
    left: "23.77%",
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  checkTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  likePosition: {
    left: "84.35%",
    right: "3.48%",
    width: "12.17%",
    position: "absolute",
  },
  bg2Position: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupLayout: {
    height: 67,
    width: 345,
  },
  storyPosition1: {
    bottom: "10.45%",
    top: "11.94%",
    height: "77.61%",
  },
  iconLayout: {
    bottom: "34.5%",
    top: "32.5%",
    width: "44.05%",
    height: "33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  thisModernlyFurnis: {
    marginTop: 9.5,
    width: "99.68%",
    left: "0.32%",
    fontFamily: FontFamily.robotoThin,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_xs,
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
    height: 30,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
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
  },
  bg: {
    height: "6.03%",
    width: "57.6%",
    top: "21.06%",
    right: "-6.13%",
    bottom: "72.91%",
    left: "48.53%",
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  freeWifi: {
    marginTop: -207,
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorDarkslategray,
    textAlign: "right",
    left: "57.33%",
    width: "30.67%",
    fontWeight: "200",
  },
  tryCopenhagen: {
    marginTop: -221,
    color: Color.colorBlack,
    height: 14,
    fontWeight: "600",
    letterSpacing: 2,
    textAlign: "right",
    left: "57.33%",
    width: "30.67%",
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
  bg1Position: {
    borderRadius: Border.br_3xs,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  infoShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "#ddd",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    left: "0%",
    position: "absolute",
    width: "100%",
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
    top: "7.88%",
    bottom: "7.69%",
  },
  story: {
    bottom: "10.45%",
    top: "11.94%",
    height: "77.61%",
    left: "4.06%",
    right: "80.29%",
  },
  checkAvailability: {
    marginTop: -7.5,
  },
  checkAvailability1: {
    marginTop: -9.5,
    left: "8.99%",
  },
  bg2: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_11xl,
    height: "100%",
  },
  interfaceEssentialcheckIcon: {
    height: "60%",
    width: "57.14%",
    top: "20%",
    right: "21.43%",
    bottom: "20%",
    left: "21.43%",
  },
  likeParent: {
    bottom: "20.9%",
    top: "19.4%",
    right: "3.48%",
    width: "12.17%",
    height: "59.7%",
  },
  checkAvailability2: {
    marginTop: -8.5,
    width: "42.03%",
    height: 17,
  },
  image3: {
    height: "84.26%",
    top: "7.87%",
    bottom: "7.87%",
  },
  checkAvailability3: {
    marginTop: -8.95,
    width: "37.04%",
    left: "33.33%",
    height: 20,
  },
  storyParent: {
    height: "83.43%",
    top: "7.46%",
    bottom: "9.1%",
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
  likeGroup: {
    height: "64.18%",
    bottom: "16.42%",
    top: "19.4%",
    right: "3.48%",
    width: "12.17%",
  },
  icon: {
    top: 28,
    left: 305,
    width: 19,
    height: 13,
    position: "absolute",
  },
  groupView: {
    marginTop: 20,
  },
  checkAvailability4: {
    marginTop: -6.5,
  },
  checkAvailability5: {
    marginTop: -10,
    left: "31.48%",
  },
  storyGroup: {
    right: "80%",
    left: "4.35%",
    width: "15.65%",
    bottom: "10.45%",
    top: "11.94%",
    height: "77.61%",
    position: "absolute",
  },
  icon1: {
    right: "29.76%",
    left: "26.19%",
  },
  likeContainer: {
    top: "25.37%",
    bottom: "14.93%",
    right: "3.48%",
    width: "12.17%",
    height: "59.7%",
  },
  icon2: {
    right: "27.38%",
    left: "28.57%",
  },
  groupParent: {
    top: 296,
    left: 15,
    height: 420,
    position: "absolute",
  },
  screen65: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen65;
