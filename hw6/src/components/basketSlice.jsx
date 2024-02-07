import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    },
  },
})

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
