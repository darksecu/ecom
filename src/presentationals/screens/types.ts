import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigatorScreenParams} from '@react-navigation/native';

type RootStackParamList = {
  PLP: undefined;
  PDP: undefined;
};

export type PLPScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'PLP'
>;
export type PDPScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'PDP'
>;
