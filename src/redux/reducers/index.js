import { combineReducers } from '@reduxjs/toolkit';
import { mealReducer } from './mealReducer';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  meals: mealReducer,
  cart: cartReducer,
  auth: authReducer,
});
