import {
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  AppActions,
} from '../types/actions';

export const signOutStart = (): AppActions => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = (): AppActions => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error: Error): AppActions => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};
