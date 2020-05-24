import {
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
} from '../types/actions';

export const updateProfile = (newData: object) => ({
  type: UPDATE_PROFILE,
  payload: newData,
});

export const updatePassword = (newPassword: string) => ({
  type: UPDATE_PASSWORD,
  payload: newPassword,
});

export const updateFailure = (error: Error) => ({
  type: UPDATE_FAILURE,
  payload: error,
});
export const updateSuccess = () => ({
  type: UPDATE_SUCCESS,
});
