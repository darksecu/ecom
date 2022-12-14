import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {CartTemplate} from '../../templates';

const CartScreen = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <StatusBar />
      <CartTemplate />
    </View>
  );
};

export {CartScreen};
