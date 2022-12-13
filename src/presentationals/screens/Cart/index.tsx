import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CartTemplate} from '../../templates';

const CartScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <CartTemplate />
    </SafeAreaView>
  );
};

export {CartScreen};
