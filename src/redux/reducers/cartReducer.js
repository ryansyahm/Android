import { ADD_TO_CART } from '../types';

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
