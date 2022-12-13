import React, {memo, useCallback, useMemo} from 'react';
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

const PDPTemplate = memo((props: listItem) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(state =>
    state.cartReducer.list.find(item => item.itemId === props.id),
  );

  const AddToCartPressed = useCallback(() => {
    dispatch(addToCart({itemId: props.id}));
  }, [dispatch, addToCart, props.id]);

  const removeFromCartPressed = useCallback(() => {
    dispatch(removeFromCart({itemId: props.id}));
  }, [dispatch, removeFromCart, props.id]);

  const removeButtonDisabled = useMemo(() => {
    let qty = cartItem?.quantity || 0;
    return qty <= 0 ? true : false;
  }, [cartItem?.quantity]);

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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          disabled={removeButtonDisabled}
          style={{
            backgroundColor: removeButtonDisabled ? 'grey' : 'blue',
            padding: 10,
          }}
          onPress={removeFromCartPressed}>
          <Text style={{color: 'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', padding: 10}}>
          <Text>{cartItem?.quantity || 0}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: 'blue', padding: 10}}
          onPress={AddToCartPressed}>
          <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export {PDPTemplate};
