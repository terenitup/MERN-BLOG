import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import message from './messageReducer';

const rootReducer = combineReducers({
  message,
  form
});

export default rootReducer;