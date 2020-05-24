import { call, all } from 'redux-saga/effects';
import userSagas from './user.sagas';
import updateProfileSagas from './updateProfile.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(updateProfileSagas)]);
}
