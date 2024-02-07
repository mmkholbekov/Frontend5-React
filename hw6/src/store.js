import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './components/basketSlice.jsx';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
