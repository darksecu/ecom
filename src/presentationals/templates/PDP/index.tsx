import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useMemo} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

interface listItem {
  id: number;
  color: string;
  name: string;
  price: number;
  img: string;
}

const PDPTemplate = memo((props: listItem) => {
  const imgUrl = useMemo(() => {
    return props.img.includes('http://')
      ? encodeURI(props.img.replace('http://', 'https://'))
      : encodeURI(props.img);
  }, [props.img]);

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{width: 200, height: undefined, aspectRatio: 0.5}}
      />
      <Text style={{marginTop: 20}}>USD {props.price}</Text>
      <Text style={{marginBottom: 20, fontWeight: '600'}}>{props.name}</Text>
    </View>
  );
});

export {PDPTemplate};
