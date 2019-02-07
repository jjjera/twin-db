import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import employeeReducer from '../reducer/employeeReducer';
import userReducer from '../reducer/userReducer';

const rootReducer = combineReducers({
  form: reducerForm,
  employeeState:employeeReducer,
  userState:userReducer
});

export default rootReducer;
