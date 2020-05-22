import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../types/actions';

export const signInSuccess = (user: object) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});
