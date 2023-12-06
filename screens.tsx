import type { NavigatorScreenParams } from '@react-navigation/native';

import { AuthFlow } from './Screens/AuthFlow';
import { BottomTabs } from './Screens/BottomTabs';
import { Worker } from './Screens/Worker1';
import { CustomLayout } from './Screens/CustomLayout';
import { DrawerView } from './Screens/DrawerView';

import { App2 } from './Screens/App2';
import { DynamicTabs } from './Screens/DynamicTabs';
import { LinkComponent } from './Screens/LinkComponent';
import { LinkingScreen } from './Screens/LinkingScreen';
import { MasterDetail } from './Screens/MasterDetail';
import { MaterialTopTabsScreen } from './Screens/MaterialTopTabs';
import { MixedHeaderMode } from './Screens/MixedHeaderMode';
import { MixedStack } from './Screens/MixedStack';
import { Consumer } from './Screens/Consumer';
import { ModalStack } from './Screens/ModalStack';
import { NativeStack } from './Screens/NativeStack';
import { NativeStackHeaderCustomization } from './Screens/NativeStackHeaderCustomization';
import { NativeStackPreventRemove } from './Screens/NativeStackPreventRemove';
import { SimpleStack } from './Screens/SimpleStack';
import { WorkerStack } from './Screens/WorkerStack';
import { StackHeaderCustomization } from './Screens/StackHeaderCustomization';
import { StackPreventRemove } from './Screens/StackPreventRemove';
import { StackTransparent } from './Screens/StackTransparent';
import { StaticScreen } from './Screens/Static';
import { TabView } from './Screens/TabView';
export type RootDrawerParamList = {
  Examples: undefined;
};

export type LinkComponentDemoParamList = {
  Article: { author: string };
  Albums: undefined;
};

export const SCREENS1 = {
  App2: {
    title: 'App2',
    component: App2,
  }

}

export const SCREENS = {
 
  Worker: {
    title: 'Worker',
    component: Worker,
  },

  Consumer: {
    title: 'Consumer',
    component: Consumer,
  },
  App7: {
    title: 'App2',
    component: App2,
  },
  NativeStack: {
    title: 'Native Stack',
    component: NativeStack,
  },
  SimpleStack: {
    title: 'Simple Stack',
    component: SimpleStack,
  }, WorkerStack: {
    title: 'WorkerStack',
    component: WorkerStack,
  },
  ModalStack: {
    title: 'Modal Stack',
    component: ModalStack,
  },
  MixedStack: {
    title: 'Regular + Modal Stack',
    component: MixedStack,
  },
  
  MixedHeaderMode: {
    title: 'Float + Screen Header Stack',
    component: MixedHeaderMode,
  },
  StackTransparent: {
    title: 'Transparent Stack',
    component: StackTransparent,
  },
  StackHeaderCustomization: {
    title: 'Header Customization in Stack',
    component: StackHeaderCustomization,
  },
  NativeStackHeaderCustomization: {
    title: 'Header Customization in Native Stack',
    component: NativeStackHeaderCustomization,
  },
  BottomTabs: {
    title: 'Bottom Tabs',
    component: BottomTabs,
  }, 
  MaterialTopTabs: {
    title: 'Material Top Tabs',
    component: MaterialTopTabsScreen,
  },
  DynamicTabs: {
    title: 'Dynamic Tabs',
    component: DynamicTabs,
  },
  MasterDetail: {
    title: 'Master Detail',
    component: MasterDetail,
  },
  AuthFlow: {
    title: 'Auth Flow',
    component: AuthFlow,
  },
  StackPreventRemove: {
    title: 'Prevent removing screen in Stack',
    component: StackPreventRemove,
  },
  NativeStackPreventRemove: {
    title: 'Prevent removing screen in Native Stack',
    component: NativeStackPreventRemove,
  },
  CustomLayout: {
    title: 'Custom Layout',
    component: CustomLayout,
  },
  LinkComponent: {
    title: '<Link />',
    component: LinkComponent,
  },
  TabView: {
    title: 'TabView',
    component: TabView,
  },
  DrawerView: {
    title: 'DrawerView',
    component: DrawerView,
  },
  Static: {
    title: 'Static config',
    component: StaticScreen,
  },
  Linking: {
    title: 'Linking with authentication flow',
    component: LinkingScreen,
  },
};

type ParamListTypes = {
  Home: undefined;
  NotFound: undefined;
  LinkComponent: NavigatorScreenParams<LinkComponentDemoParamList> | undefined;
};

export type RootStackParamList = {
  [P in Exclude<keyof typeof SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

// Make the default RootParamList the same as the RootStackParamList
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
