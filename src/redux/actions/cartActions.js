import { ADD_TO_CART } from '../types';

export const addToCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
