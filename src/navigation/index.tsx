import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PDPScreen, PLPScreen} from '../presentationals/screens';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PLP"
          options={{title: 'Product Listing Page'}}
          component={PLPScreen}
        />
        <Stack.Screen
          name="PDP"
          options={{title: 'Product Display Page'}}
          component={PDPScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
