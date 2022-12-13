import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {SuspenseView} from '../../components/SuspenseView';
import {PDPScreenProps} from '../../screens/types';

interface listItem {
  id: number;
  color: string;
  name: string;
  price: number;
  img: string;
}
interface Props {
  list: Array<listItem>;
  isLoading: boolean;
}

const PLPTemplate = memo(({list, isLoading}: Props) => {
  const navigation = useNavigation<PDPScreenProps>();

  const navigateToPDP = useCallback(
    (item: listItem) => {
      navigation.navigate('PDP', item);
    },
    [navigation],
  );

  const renderItem = useCallback(({item}: {item: listItem}) => {
    const imgUrl = item.img.includes('http://')
      ? encodeURI(item.img.replace('http://', 'https://'))
      : encodeURI(item.img);

    return (
      <TouchableOpacity
        onPress={() => navigateToPDP(item)}
        style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={{width: 200, height: undefined, aspectRatio: 0.5}}
        />
        <Text style={{marginTop: 20}}>USD {item.price}</Text>

        <Text style={{marginBottom: 20, fontWeight: '600'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          borderBottomColor: '#999',
          marginBottom: 40,
          borderBottomWidth: 0.5,
          marginHorizontal: 10,
        }}
      />
    );
  };

  return (
    <SuspenseView isLoading={isLoading}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </SuspenseView>
  );
});

export {PLPTemplate};
