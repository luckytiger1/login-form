import { call } from 'redux-saga/effects';
import userSagas from './user.sagas';

export default function* rootSaga() {
  yield call(userSagas);
}
