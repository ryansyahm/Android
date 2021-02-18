import { API_MEAL_FAILED, API_MEAL_START, API_MEAL_SUCCESS } from '../types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: '',
};

export const mealReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_MEAL_START:
      return {
        ...state,
        loading: true,
      };
    case API_MEAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case API_MEAL_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
