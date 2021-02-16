import axios from 'axios';
import { ZOMATO_KEY, ZOMATO_URL } from '../../helpers/zomato';
import { API_MEAL_FAILED, API_MEAL_START, API_MEAL_SUCCESS } from '../types';

const userKeyHeader = {
  headers: {
    'user-key': ZOMATO_KEY,
  },
};

export const fetchMealsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: API_MEAL_START,
    });
    try {
      const response = await axios.get(
        `${ZOMATO_URL}/collections?city_id=1&count=10`,
        userKeyHeader,
      );
      dispatch({
        type: API_MEAL_SUCCESS,
        payload: response.data.collections,
      });
    } catch (err) {
      dispatch({
        type: API_MEAL_FAILED,
        payload: err.message,
      });
    }
  };
};
