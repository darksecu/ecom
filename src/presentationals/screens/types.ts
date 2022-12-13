import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigatorScreenParams} from '@react-navigation/native';

type RootStackParamList = {
  PLP: undefined;
  PDP: {
    id: number;
    color: string;
    name: string;
    price: number;
    img: string;
  };
  Cart: undefined;
};

export type PLPScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'PLP'
>;
export type PDPScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'PDP'
>;

export type CartScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;
