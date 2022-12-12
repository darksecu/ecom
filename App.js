import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppSelector, useAppDispatch} from './src/store/hooks';
import {fetchPLP} from './src/store/slices/plp';

const App = () => {
  const list = useAppSelector(state => state.plpReducer.list);
  const isLoading = useAppSelector(state => state.plpReducer.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPLP());
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>check</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
