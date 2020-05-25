import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  AppActions,
} from '../types/actions';

export const signInStart = (emailAndPassword: object): AppActions => ({
  type: SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: object): AppActions => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error): AppActions => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});
