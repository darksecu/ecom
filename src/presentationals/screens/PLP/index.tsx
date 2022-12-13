import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../../store/hooks';
import {fetchPLP} from '../../../store/slices/plp';
import {PLPTemplate} from '../../templates';

const PLPScreen = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(state => state.plpReducer.list);
  const isLoading = useAppSelector(state => state.plpReducer.isLoading);

  useEffect(() => {
    dispatch(fetchPLP({}));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <PLPTemplate isLoading={isLoading} list={list} />
    </SafeAreaView>
  );
};

export {PLPScreen};
