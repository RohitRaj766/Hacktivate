import { combineReducers } from 'redux';
import userauth from './userReducer';

const rootReducer = combineReducers({
  userauth
});

export default rootReducer;
