import React, {useEffect} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {PDPTemplate} from '../../templates';
import {useRoute} from '@react-navigation/native';

interface listItem {
  id: number;
  color: string;
  name: string;
  price: number;
  img: string;
}

const PDPScreen = () => {
  const {params} = useRoute();
  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <StatusBar />
      <PDPTemplate {...params} />
    </View>
  );
};

export {PDPScreen};
