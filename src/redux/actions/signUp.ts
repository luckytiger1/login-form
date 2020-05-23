import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../types/actions';

export const signUpStart = (userCreds: any) => {
  return {
    type: SIGN_UP_START,
    payload: userCreds,
  };
};

export const signUpSuccess = ({ user, additionalData }: any) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailure = (error: any) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
