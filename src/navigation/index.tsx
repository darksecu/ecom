import React, {useCallback} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PDPScreen, PLPScreen, CartScreen} from '../presentationals/screens';
import {Text, TouchableOpacity, View} from 'react-native';
import {CartScreenProps} from '../presentationals/screens/types';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PLP"
          options={{
            title: 'Product Listing Page',
            // headerRight: cartButton,
          }}
          component={PLPScreen}
        />
        <Stack.Screen
          name="PDP"
          options={{title: 'Product Display Page'}}
          component={PDPScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{title: 'Cart'}}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
