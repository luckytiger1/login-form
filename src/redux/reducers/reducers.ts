import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, reducer);
