import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createUserProfileDoc, auth } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from '../actions/signIn';
import { signUpFailure, signUpSuccess } from '../actions/signUp';
import {
  SIGN_IN_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_OUT_START,
} from '../types/actions';
import { signOutSuccess, signOutFailure } from '../actions/signOut';

export function* getSnapshotFromUserAuth(
  userAuth: any,
  additionalData: any,
  func: any,
) {
  try {
    const userRef = yield call(func, userAuth, additionalData);
    console.log(userRef);

    const userSnapshot = yield userRef.get();
    console.log(userSnapshot);
    console.log(userSnapshot.data());

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }: any) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    console.log(user);

    yield getSnapshotFromUserAuth(user, null, createUserProfileDoc);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signUp({ payload: { email, password, firstName, lastName } }: any) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({
        user,
        additionalData: { firstName, lastName, password },
      }),
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }: any) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData, createUserProfileDoc);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* onSignInStart() {
  yield takeLatest(SIGN_IN_START, signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
