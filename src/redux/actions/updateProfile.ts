import {
  UPDATE_EMAIL_ADDRESS,
  UPDATE_FIRST_NAME,
  UPDATE_PASSWORD,
  UPDATE_LAST_NAME,
} from '../types/actions';

export const updateEmailAddress = (newEmail: string) => ({
  type: UPDATE_EMAIL_ADDRESS,
  payload: newEmail,
});

export const updatePassword = (newPassword: string) => ({
  type: UPDATE_PASSWORD,
  payload: newPassword,
});

export const updateFirstName = (newName: string) => ({
  type: UPDATE_FIRST_NAME,
  payload: newName,
});
export const updateLastName = (newLastName: string) => ({
  type: UPDATE_LAST_NAME,
  payload: newLastName,
});
