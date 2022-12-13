import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <PDPTemplate {...params} />
    </SafeAreaView>
  );
};

export {PDPScreen};
