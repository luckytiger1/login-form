import {
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
  AppActions,
} from '../types/actions';

export const updateProfile = (newData: object) => ({
  type: UPDATE_PROFILE,
  payload: newData,
});

export const updatePassword = (newPassword: string): AppActions => ({
  type: UPDATE_PASSWORD,
  payload: newPassword,
});

export const updateFailure = (error: Error): AppActions => ({
  type: UPDATE_FAILURE,
  payload: error,
});
export const updateSuccess = (): AppActions => ({
  type: UPDATE_SUCCESS,
});
