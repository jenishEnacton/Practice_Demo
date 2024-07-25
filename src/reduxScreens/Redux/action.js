import {
  ADD_USER,
  DECREMENT_ASYNC,
  DECREMENT_COUNT,
  INCREMENT_ASYNC,
  INCREMENT_COUNT,
} from './constant';

export const increment = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNT,
  };
};

export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC,
  };
};

export const decrementAsync = () => {
  return {
    type: DECREMENT_ASYNC,
  };
};

export const addUser = item => ({type: ADD_USER, payload: item});
