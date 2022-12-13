import {createSlice} from '@reduxjs/toolkit';

interface listItem {
  itemId: number;
  quantity: number;
}
interface list extends Array<listItem> {}

export interface CartState {
  list: list;
}

const initialState: CartState = {
  list: [],
};

interface addToCartProps {
  itemId: number;
}

interface removeFromCartProps {
  itemId: number;
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: {payload: addToCartProps}) => {
      // find the index of id and increase qty
      var array = [...state.list];
      var index = array.findIndex(el => el.itemId === action.payload.itemId);
      if (index >= 0) {
        array[index] = {
          ...array[index],
          quantity: array[index]['quantity'] + 1,
        };
      } else {
        array.push({
          itemId: action.payload.itemId,
          quantity: 1,
        });
      }
      state.list = array;
    },
    removeFromCart: (state, action: {payload: removeFromCartProps}) => {
      // find the index of id and reduce qty
      var array = [...state.list];
      var index = array.findIndex(el => el.itemId === action.payload.itemId);
      if (index >= 0) {
        if (array[index]['quantity'] === 1) {
          array.splice(index, 1);
        } else {
          array[index] = {
            ...array[index],
            quantity: array[index]['quantity'] - 1,
          };
        }
      }
      state.list = array;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;
