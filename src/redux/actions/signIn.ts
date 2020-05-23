import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
} from '../types/actions';

export const signInStart = (emailAndPassword: object) => ({
  type: SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: object) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});
