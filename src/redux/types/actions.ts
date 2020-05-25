import { Action } from 'redux';

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

interface SignInStartAction extends Action {
  type: typeof SIGN_IN_START;
  payload: object;
}
interface SignInSuccessAction extends Action {
  type: typeof SIGN_IN_SUCCESS;
  payload: object;
}
interface SignInFailureAction extends Action {
  type: typeof SIGN_IN_FAILURE;
  payload: Error;
}
interface SignOutStartAction extends Action {
  type: typeof SIGN_OUT_START;
}
interface SignOutSuccessAction extends Action {
  type: typeof SIGN_OUT_SUCCESS;
}
interface SignOutFailureAction extends Action {
  type: typeof SIGN_OUT_FAILURE;
  payload: Error;
}
interface SignUpStartAction extends Action {
  type: typeof SIGN_UP_START;
  payload: object;
}
interface SignUpSuccessAction extends Action {
  type: typeof SIGN_UP_SUCCESS;
  payload: any;
}
interface SignUpFailureAction extends Action {
  type: typeof SIGN_UP_FAILURE;
  payload: Error;
}
interface UpdateProfileAction extends Action {
  type: typeof UPDATE_PROFILE;
  payload: object;
}
interface UpdatePasswordAction extends Action {
  type: typeof UPDATE_PASSWORD;
  payload: string;
}

interface UpdateFailureAction extends Action {
  type: typeof UPDATE_FAILURE;
  payload: Error;
}
interface UpdateSuccessAction extends Action {
  type: typeof UPDATE_SUCCESS;
}

export type SignInActionTypes =
  | SignInStartAction
  | SignInSuccessAction
  | SignInFailureAction;

export type SignUpActionTypes =
  | SignUpStartAction
  | SignUpSuccessAction
  | SignUpFailureAction;

export type SignOutActionTypes =
  | SignOutStartAction
  | SignOutSuccessAction
  | SignOutFailureAction;

export type UpdateActionTypes =
  | UpdateProfileAction
  | UpdatePasswordAction
  | UpdateFailureAction
  | UpdateSuccessAction;

export type AppActions =
  | SignInActionTypes
  | SignUpActionTypes
  | SignOutActionTypes
  | UpdateActionTypes;
