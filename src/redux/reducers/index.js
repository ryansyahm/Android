import { combineReducers } from '@reduxjs/toolkit';
import { mealReducer } from './mealReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
  meals: mealReducer,
  cart: cartReducer,
});
