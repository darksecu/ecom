import React, {useCallback} from 'react';
import {PDPScreenProps} from '../types';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PDPScreen = () => {
  const navigation = useNavigation<PDPScreenProps>();
  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text onPress={navigateBack}>Go Back</Text>
    </View>
  );
};

export {PDPScreen};
