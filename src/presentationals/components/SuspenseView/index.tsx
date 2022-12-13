import React from 'react';
import {ActivityIndicator, View} from 'react-native';

interface Props {
  isLoading: boolean;
  children: any;
}

const SuspenseView = ({isLoading, children}: Props) => {
  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator />
    </View>
  ) : (
    children
  );
};

export {SuspenseView};
