import {ADD_USER, DECREMENT_COUNT, INCREMENT_COUNT} from './constant';

const initialState = {
  count: 0,
  userData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - 1,
      };
    case ADD_USER:
      return {
        userData: [...state.userData, action.payload],
      };
    default:
      return state;
  }
};
