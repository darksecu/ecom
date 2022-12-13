import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../../store/hooks';
import {addToCart, removeFromCart} from '../../../store/slices/cart';

interface listItem {
  id: number;
  color: string;
  name: string;
  price: number;
  img: string;
}

const CartTemplate = memo(() => {
  const dispatch = useAppDispatch();
  const [itemList, setItemList] = useState({});
  const plpItem = useAppSelector(state => state.plpReducer.list);
  const cartItem = useAppSelector(state => state.cartReducer.list);

  useEffect(() => {
    let obj = {};
    plpItem.forEach(el => {
      obj[el.id] = el;
    });
    setItemList(obj);
  }, [plpItem]);

  const AddToCartPressed = useCallback(
    (id: number) => {
      dispatch(addToCart({itemId: id}));
    },
    [dispatch, addToCart],
  );

  const removeFromCartPressed = useCallback(
    (id: number) => {
      dispatch(removeFromCart({itemId: id}));
    },
    [dispatch, removeFromCart],
  );
  const removeButtonDisabled = useCallback((item: any) => {
    let qty = item?.quantity || 0;
    return qty <= 0 ? true : false;
  }, []);

  const renderItem = ({item}) => {
    // const item = itemList[el.itemId];
    console.log(item.itemId);
    var productInfo = itemList?.[item.itemId];
    const imgUrl = productInfo?.img?.includes('http://')
      ? encodeURI(productInfo?.img?.replace('http://', 'https://'))
      : encodeURI(productInfo?.img);

    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={{width: 200, height: undefined, aspectRatio: 0.5}}
        />
        <Text style={{marginTop: 20}}>USD {productInfo?.price}</Text>
        <Text style={{marginBottom: 20, fontWeight: '600'}}>
          {productInfo?.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            disabled={removeButtonDisabled(item)}
            style={{
              backgroundColor: removeButtonDisabled(item) ? 'grey' : 'blue',
              padding: 10,
            }}
            onPress={() => removeFromCartPressed(item.itemId)}>
            <Text style={{color: 'white'}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', padding: 10}}>
            <Text>{item?.quantity || 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor: 'blue', padding: 10}}
            onPress={() => AddToCartPressed(item.itemId)}>
            <Text style={{color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <FlatList data={cartItem} renderItem={renderItem} />;
});

export {CartTemplate};
