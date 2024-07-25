// selectors.js
import {createSelector} from 'reselect';

// Basic selectors
const selectCountReducer = state => state.countreducer;

export const selectCount = createSelector(
  [selectCountReducer],
  countReducer => {
    return countReducer.count;
  },
);

export const selectUserData = createSelector(
  [selectCountReducer],
  countReducer => {
    return countReducer.userData;
  },
);
