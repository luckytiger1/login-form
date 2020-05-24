import * as firebase from 'firebase';
import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { getSnapshotFromUserAuth } from './user.sagas';
import { UPDATE_PROFILE, UPDATE_PASSWORD } from '../types/actions';
import { updateFailure } from '../actions/updateProfile';
import { auth, updateUserProfileDoc } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../selectors/users.selector';

function* updatePasswordData({ payload: { newPassword } }: any) {
  const { password, email } = yield select(selectCurrentUser);

  try {
    const credential = yield firebase.auth.EmailAuthProvider.credential(
      email,
      password,
    );
    yield auth.currentUser?.reauthenticateWithCredential(credential);
    yield auth.currentUser?.updatePassword(newPassword);
  } catch (error) {
    yield put(updateFailure(error));
  }
}

function* updateProfileData({
  payload: { newEmail, newFirstName, newLastName, newPassword },
}: any) {
  const { password, email } = yield select(selectCurrentUser);
  try {
    const credential = yield firebase.auth.EmailAuthProvider.credential(
      email,
      password,
    );
    yield auth.currentUser?.reauthenticateWithCredential(credential);
    yield auth.currentUser?.updateEmail(newEmail);
    const newPass = newPassword.length > 0 ? newPassword : password;

    yield getSnapshotFromUserAuth(
      auth.currentUser,
      {
        newFirstName,
        newLastName,
        newPass,
      },
      updateUserProfileDoc,
    );
  } catch (error) {
    yield put(updateFailure(error));
  }
}

function* onUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, updateProfileData);
}
function* onUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD, updatePasswordData);
}

export default function* updateProfileSagas() {
  yield all([call(onUpdateProfile), call(onUpdatePassword)]);
}
