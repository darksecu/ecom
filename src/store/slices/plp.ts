import {createSlice} from '@reduxjs/toolkit';

interface listItem {
  id: number;
  color: string;
  name: string;
  price: number;
  img: string;
}
interface list extends Array<listItem> {}

export interface PLPState {
  isLoading?: boolean;
  list?: list;
}

const initialState: PLPState = {
  isLoading: false,
  list: [],
};

export const PLPSlice = createSlice({
  name: 'plp',
  initialState,
  reducers: {
    fetchPLP: (state, action) => {
      state.isLoading = true;
    },
    fetchPLPSuccess: (state, action: {payload: list}) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    fetchPLPFailed: state => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {fetchPLP, fetchPLPSuccess, fetchPLPFailed} = PLPSlice.actions;

export default PLPSlice.reducer;
