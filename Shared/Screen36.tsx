import * as React from "react";
import { Image, StyleSheet, Text, View, ScrollView,  type ScrollViewProps} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
type Props = Partial<ScrollViewProps> & {
date?: string;
author?: {
name: string;
};
};


export const Screen36 = () => {
return (
<ScrollView

>
<View style={styles.screen36}>
<Image
style={[styles.bottomMenuIcon, styles.iconLayout]}
source={require('../assets/bottom-menu.svg')}
/>
<Text style={[styles.helloStevenYour, styles.helloTypo]}>
My Harvests
</Text>
<View style={[styles.calendar, styles.bg2Layout]}>
<View style={styles.bgPosition}>
<View style={[styles.bg1, styles.bg1Position]} />
</View>
<View style={[styles.weather, styles.textPosition]}>
<View style={[styles.parent, styles.parentPosition]}>
<Text style={[styles.text, styles.textPosition]}>o</Text>
<Text style={[styles.text1, styles.text1Typo]}>C</Text>
<Text style={[styles.degrees, styles.text1Typo]}>{`27 `}</Text>
</View>
<Text style={[styles.date, styles.textPosition]}>
Today, 17 Nov 2023
</Text>
<Image style={[styles.locationPin1Icon, styles.locationLayout]} resizeMode="cover" source={require('../assets/locationpin-1.png')}/>
<Text style={[styles.location, styles.locationLayout]}>
Nyungwe, Rwanda
</Text>
</View>
<Image style={styles.calendarChild} source={require('../assets/group-1.svg')} />
</View>
<View style={[styles.title, styles.titlePosition]}>
<Text style={[styles.helloStevenYourContainer, styles.titlePosition]}>
Hey Justin
</Text>
</View>
<Image
style={[styles.headerIcon, styles.iconLayout]}
source={require('../assets/header.svg')}
/>
<View style={[styles.bg2, styles.bg2Layout]}>
<View style={[styles.bg3, styles.bg1Position]} />
</View>
<Text style={[styles.pm, styles.pmPosition]}>
<Text style={styles.blankLine}> </Text>
<Text style={styles.youHaveNo}>You have no current harvests....</Text>
</Text>
<View style={styles.button}>
<View style={[styles.bg4, styles.bgPosition]} />
<Text style={[styles.text2, styles.pmPosition]}>ADD NEW HARVEST</Text>
<View style={styles.addNewImage}>
<View style={[styles.bg5, styles.bg1Position]} />
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
<Image style={styles.userIcon} source={require('../assets/user.svg')} />
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
iconLayout: {
maxHeight: "100%",
maxWidth: "100%",
position: "absolute",
overflow: "hidden",
},
helloTypo: {
color: Color.colorSienna,
fontFamily: FontFamily.recoleta,
textAlign: "left",
},
bg2Layout: {
width: "92%",
position: "absolute",
},
bg1Position: {
backgroundColor: Color.colorWhite,
top: "0%",
height: "100%",
left: "0%",
bottom: "0%",
right: "0%",
position: "absolute",
width: "100%",
},
textPosition: {
top: "50%",
position: "absolute",
},
parentPosition: {
left: "8.64%",
top: "50%",
},
text1Typo: {
fontSize: FontSize.size_13xl,
fontWeight: "600",
color: Color.colorDarkslategray,
textAlign: "left",
fontFamily: FontFamily.recoleta,
top: "50%",
position: "absolute",
},
locationLayout: {
height: 17,
position: "absolute",
},
titlePosition: {
height: 28,
top: "50%",
position: "absolute",
},
pmPosition: {
textAlign: "center",
marginTop: -5,
fontFamily: FontFamily.recoleta,
top: "50%",
position: "absolute",
},
bgPosition: {
top: "0%",
height: "100%",
left: "0%",
bottom: "0%",
right: "0%",
position: "absolute",
width: "100%",
},
rectangle185CopyLayout: {
backgroundColor: Color.colorGainsboro,
borderRadius: Border.br_11xs_5,
height: "12.5%",
position: "absolute",
width: "100%",
},
bottomMenuIcon: {
height: "11.33%",
top: "88.67%",
left: "0%",
width: "100%",
bottom: "0%",
right: "0%",
maxWidth: "100%",
},
helloStevenYour: {
marginTop: -125,
width: "38.13%",
fontSize: 16,
height: 19,
textAlign: "left",
left: "7.2%",
top: "50%",
position: "absolute",
},
bg1: {
borderRadius: Border.br_3xs,
},
text: {
width: "9.4%",
left: "33.61%",
fontSize: 15,
fontWeight: "700",
fontFamily: FontFamily.robotoBold,
height: 15,
color: Color.colorDarkslategray,
marginTop: -16.5,
textAlign: "left",
},
text1: {
marginTop: -15.5,
width: "16.45%",
left: "42.86%",
height: 32,
fontWeight: "600",
},
degrees: {
letterSpacing: 1.6,
height: 30,
fontWeight: "600",
marginTop: -16.5,
left: "0%",
width: "100%",
},
parent: {
marginTop: 3,
width: "54.09%",
right: "37.27%",
height: 33,
position: "absolute",
},
date: {
marginTop: -14.43,
width: "91.1%",
left: "8.9%",
fontSize: 11,
fontWeight: "300",
fontFamily: FontFamily.robotoLight,
height: 14,
color: Color.colorDarkslategray,
textAlign: "left",
},
locationPin1Icon: {
top: 0,
left: 0,
width: 15,
},
location: {
marginTop: -36,
width: "75.45%",
fontSize: FontSize.size_sm,
fontWeight: "600",
left: "8.64%",
top: "50%",
textAlign: "left",
color: Color.colorSienna,
fontFamily: FontFamily.recoleta,
},
weather: {
marginTop: -34.5,
width: "63.77%",
right: "30.43%",
left: "5.8%",
height: 72,
},
calendarChild: {
top: 4,
left: 178,
width: 180,
height: 157,
position: "absolute",
},
calendar: {
height: "13.67%",
top: "15.39%",
right: "3.47%",
bottom: "70.94%",
left: "4.53%",
},
helloStevenYourContainer: {
marginTop: -14,
fontSize: 24,
fontWeight: "600",
textAlign: "left",
color: Color.colorSienna,
fontFamily: FontFamily.recoleta,
left: "0%",
width: "100%",
},
title: {
marginTop: -318,
width: "46.13%",
right: "46.67%",
left: "7.2%",
},
headerIcon: {
height: "4.19%",
width: "85.33%",
top: "4.43%",
right: "6.4%",
bottom: "91.38%",
left: "8.27%",
},
bg3: {
borderRadius: 20,
},
bg2: {
height: "11.95%",
top: "47.78%",
right: "4%",
bottom: "40.27%",
left: "4%",
},
blankLine: {
fontSize: 13,
},
youHaveNo: {
fontSize: FontSize.size_sm,
},
pm: {
width: "79.73%",
left: "10.93%",
height: 36,
color: Color.colorDarkslategray,
},
bg4: {
backgroundColor: "#dfc19f",
borderRadius: Border.br_3xs,
},
text2: {
width: "45.42%",
left: "27.12%",
fontSize: 10,
letterSpacing: 2,
color: Color.colorWhite,
height: 9,
fontWeight: "600",
},
bg5: {
borderRadius: 100,
},
combinedShapeChild: {
top: "4843.75%",
right: "-690%",
bottom: "-4756.25%",
left: "690%",
},
rectangle185Copy: {
top: "4800%",
right: "-746.25%",
bottom: "-4712.5%",
left: "746.25%",
transform: [
{
rotate: "90deg",
},
],
},
combinedShape: {
backgroundColor: "#8d6756",
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
top: "57.51%",
right: "9.33%",
bottom: "37.81%",
left: "12%",
position: "absolute",
},
userIcon: {
top: 775,
left: 325,
width: 24,
height: 24,
position: "absolute",
overflow: "hidden",
},
screen36: {
backgroundColor: "#fffefc",
flex: 1,
height: 812,
overflow: "hidden",
width: "100%",
},
});

export default Screen36;
