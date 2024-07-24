import {all} from 'redux-saga/effects';
import {watchDecrementAsync, watchIncrementAsync} from './saga';

export default function* rootSaga() {
  yield all([watchDecrementAsync(), watchIncrementAsync()]);
}
