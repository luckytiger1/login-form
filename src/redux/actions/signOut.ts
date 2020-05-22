import {
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../types/actions';

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error: any) => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};
