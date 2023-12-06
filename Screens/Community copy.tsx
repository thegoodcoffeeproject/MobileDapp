import { Button } from '@react-navigation/elements';
import type { ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  type StackScreenProps,
} from '@react-navigation/stack';
import * as React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { Albums } from '../Shared/Albums';
import { Article } from '../Shared/Community';


type CommunityParams = {
  Article: { author: string };
  Albums: undefined;
};

const scrollEnabled = Platform.select({ web: true, default: false });

const ArticleScreen = ({
  navigation,
  route,
}: StackScreenProps<CommunityParams, 'Community'>) => {
  return (
    <ScrollView>
     
      <Article
        author={{ name: 'df' }}
        scrollEnabled={scrollEnabled}
      />
    </ScrollView>
  );
};

const AlbumsScreen = ({ navigation }: StackScreenProps<CommunityParams>) => {
  return (
    <ScrollView>
      <View style={styles.buttons}>
        <Button variant="filled" onPress={() => navigation.push('Albums')}>
          Push album
        </Button>
        <Button variant="tinted" onPress={() => navigation.goBack()}>
          Go back
        </Button>
        <Button
          variant="filled"
          onPress={() => navigation.push('Community', { author: 'The Doctor' })}
        >
          Push article
        </Button>
      </View>
      <Albums scrollEnabled={scrollEnabled} />
    </ScrollView>
  );
};

const Stack = createStackNavigator<CommunityParams>();

type Props = StackScreenProps<ParamListBase>;

export function Community({ navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community1"
        component={ArticleScreen}
        options={({ route }) => ({
          title:  `${route.params.title}`,
        //  title: `Article by ${route.params.author}`,
        })}
        initialParams={{ author: 'Gandalf', title: 'Community' }}
      />
      <Stack.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          title: 'Albums',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 12,
  },
});
