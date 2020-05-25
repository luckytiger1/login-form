import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  AppActions,
} from '../types/actions';

type UserReducerInitialState = {
  currentUser: null | object;
  error: null | Error;
};

const initialState: UserReducerInitialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action: AppActions): any => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
