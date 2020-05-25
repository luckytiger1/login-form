import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  AppActions,
} from '../types/actions';

export const signUpStart = (userCreds: object): AppActions => {
  return {
    type: SIGN_UP_START,
    payload: userCreds,
  };
};

export const signUpSuccess = ({ user, additionalData }: any): AppActions => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailure = (error: Error): AppActions => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
