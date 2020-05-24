import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

const saga = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares, saga)),
);

saga.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
