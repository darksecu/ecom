import React, {useCallback} from 'react';
import {PLPScreenProps} from '../types';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PLPScreen = () => {
  const navigation = useNavigation<PLPScreenProps>();

  const navigateToPDP = useCallback(() => {
    navigation.navigate('PDP');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text onPress={navigateToPDP}>PLP</Text>
    </View>
  );
};

export {PLPScreen};
