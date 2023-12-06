import { useScrollToTop, useTheme } from '@react-navigation/native';
import * as React from 'react';
import styled from "styled-components";
import {
  Image,
  ScrollView,
  type ScrollViewProps,
  StyleSheet,
  Text,
  type TextProps,
  View,
} from 'react-native';

type Props = Partial<ScrollViewProps> & {
  date?: string;
  author?: {
    name: string;
  };
};

const Heading = ({
  style,
  ...rest
}: TextProps & { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.heading, { color: colors.text }, style]} {...rest} />
  );
};

const Paragraph = ({
  style,
  ...rest
}: TextProps & { children: React.ReactNode }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.paragraph, { color: colors.text }, style]} {...rest} />
  );
};

export const Screen = (): JSX.Element => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
          <div className="bottom-menu">
            <div className="overlap-group">
              <div className="bg" />
              <div className="add-new-image">
                <div className="plus-icon-wrapper">
                  <div className="plus-icon">
                    <img className="combined-shape" alt="Combined shape" src="combined-shape.svg" />
                  </div>
                </div>
              </div>
              <div className="profile-icon" />
              <img className="likes-icon" alt="Likes icon" src="likes-icon.png" />
              <div className="search-icon">
                <div className="overlap-2">
                  <img className="path" alt="Path" src="path-2.svg" />
                  <img className="img" alt="Path" src="path.svg" />
                </div>
              </div>
              <div className="home-icon">
                <img className="combined-shape-2" alt="Combined shape" src="image.svg" />
              </div>
            </div>
          </div>
          <User className="user-instance" color="#7D523F" />
        </div>
        <div className="hello-steven-your-d">My Harvests</div>
        <div className="calendar">
          <div className="overlap-3">
            <div className="weather">
              <div className="group">
                <div className="overlap-group-2">
                  <div className="element">o</div>
                  <div className="text-wrapper">C</div>
                  <div className="degrees">27</div>
                </div>
              </div>
              <div className="date">Today, 17 Nov 2023</div>
              <img className="location-pin" alt="Location pin" src="location-pin-1.png" />
              <div className="location">Nyungwe, Rwanda</div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="ellipse" />
                <img className="mask-group" alt="Mask group" src="mask-group.png" />
                <img className="union" alt="Union" src="union.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <div className="hello-steven-your-d-2">Hey Junbnbstin</div>
        </div>
        <header className="header">
          <img className="avatar" alt="Avatar" src="avatar.png" />
          <div className="back-icon">
            <div className="overlap-group-3">
              <div className="rectangle" />
              <img className="path-2" alt="Path" src="path-94.svg" />
            </div>
          </div>
        </header>
        <div className="overlap-5">
          <div className="bg-wrapper">
            <div className="bg-2" />
          </div>
          <p className="element-PM">
            <span className="span">
              <br />
            </span>
            <span className="text-wrapper-2">You have no current harvests....</span>
          </p>
          <button className="button">
            <div className="overlap-6">
              <div className="text">ADD NEW HARVEST</div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="plus-icon-2" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 8,
  },
});
