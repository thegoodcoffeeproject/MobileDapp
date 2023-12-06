import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

type MaximizeIconType = {
  imageDimensions?: ImageSourcePropType;

  /** Style props */
  maximizeIconPosition?: string;
  maximizeIconWidth?: number | string;
  maximizeIconHeight?: number | string;
  maximizeIconTop?: number | string;
  maximizeIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MaximizeIcon = ({
  imageDimensions,
  maximizeIconPosition,
  maximizeIconWidth,
  maximizeIconHeight,
  maximizeIconTop,
  maximizeIconLeft,
}: MaximizeIconType) => {
  const maximizeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", maximizeIconPosition),
      ...getStyleValue("width", maximizeIconWidth),
      ...getStyleValue("height", maximizeIconHeight),
      ...getStyleValue("top", maximizeIconTop),
      ...getStyleValue("left", maximizeIconLeft),
    };
  }, [
    maximizeIconPosition,
    maximizeIconWidth,
    maximizeIconHeight,
    maximizeIconTop,
    maximizeIconLeft,
  ]);

  return (
    <Image
      style={[styles.maximizeIcon, maximizeIconStyle]}
      contentFit="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  maximizeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default MaximizeIcon;
