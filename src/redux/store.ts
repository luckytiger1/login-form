import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducers';
// import thunkMiddleware from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import reducer from './reducers/reducers';
// import { AppActions } from '../types/actions';

// const stringMiddleWare = () => (dispatch: Dispatch<AppActions>) => (
//   action: AppActions,
// ) => {
//   if (typeof action === 'string') {
//     return dispatch({
//       type: action,
//     });
//   }
//   return dispatch(action);
// };

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
