import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getSnapshotFromUserAuth } from './user.sagas';
import { UPDATE_PROFILE } from '../types/actions';
import { updateFailure } from '../actions/updateProfile';
import { auth } from '../../firebase/firebase.utils';

function* updateProfileData({
  payload: { newEmail, newFirstName, newLastName },
}: any) {
  try {
    yield auth.currentUser?.updateEmail(newEmail);
    yield getSnapshotFromUserAuth(auth.currentUser, {
      newFirstName,
      newLastName,
    });
  } catch (error) {
    yield put(updateFailure(error));
  }
}

function* onUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, updateProfileData);
}

export default function* updateProfileSagas() {
  yield all([
    //   call(onSignInStart),
    //   call(onSignUpStart),
    call(onUpdateProfile),
  ]);
}
