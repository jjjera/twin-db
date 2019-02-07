import {
  ADD_EMPLOYEE_STARTED,
  ADD_EMPLOYEE_COMPLETED,
  ADD_EMPLOYEE_ERROR,
  FETCH_EMPLOYEES_STARTED,
  FETCH_EMPLOYEES_COMPLETED,
  FETCH_EMPLOYEES_ERROR
} from '../actionTypes/actionTypes';

const INITIAL_STATE = {
  submitted: false,
  success: false,
  error: false,
  employees: {}
};

function employeeReducer(state = INITIAL_STATE, action) {
  // console.log('employeeReducer called',action);
  switch (action.type) {
    case ADD_EMPLOYEE_STARTED: {
      return {
        ...state,
        submitted: true
      };
    }
    case ADD_EMPLOYEE_COMPLETED: {
      let key = action.payLoad.id;
      let data = action.payLoad.data;
      state.employees[key] = data;
      return {
        ...state,
        submitted: false,
        success: true
      };
    }
    case ADD_EMPLOYEE_ERROR: {
      return {
        ...state,
        submitted: false,
        error: true
      };
    }
    case FETCH_EMPLOYEES_STARTED: {
     return {
       ...state,
       submitted: true
     };
   }
   case FETCH_EMPLOYEES_COMPLETED: {
     if (action.payLoad) {
       return {
         ...state,
         employees: {...action.payLoad},
         submitted: false,
         success: true
       };
     } else {
       return {
         ...state,
         submitted: false,
         success: true
       };
     }
   }
   case FETCH_EMPLOYEES_ERROR: {
     return {
       ...state,
       submitted: false,
       error: true
     };
   }
    default:
      return state;
  }
}

export default employeeReducer;
