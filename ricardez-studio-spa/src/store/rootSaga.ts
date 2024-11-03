import { all, fork } from 'redux-saga/effects';
import { homeSaga } from './slices/homeSlice';

// Combine all sagas here
export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
