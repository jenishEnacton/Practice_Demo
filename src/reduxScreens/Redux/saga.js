import {delay, put, takeEvery} from 'redux-saga/effects';
import {
  DECREMENT_ASYNC,
  DECREMENT_COUNT,
  INCREMENT_ASYNC,
  INCREMENT_COUNT,
} from './constant';

function* incrementAsync() {
  yield delay(1000);
  yield put({
    type: INCREMENT_COUNT,
  });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({
    type: DECREMENT_COUNT,
  });
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}
