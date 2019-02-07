import { realtimeDb } from '../../firebase';
import {
  FETCH_EMPLOYEES_STARTED,
  FETCH_EMPLOYEES_COMPLETED,
  FETCH_EMPLOYEES_ERROR
} from '../actionTypes/actionTypes';

export const fetchEmployeesStart = () => ({
  type: FETCH_EMPLOYEES_STARTED
});
export const fetchEmployeesSuccess = (data) => ({
  type: FETCH_EMPLOYEES_COMPLETED,
  payLoad: data
});
export const fetchEmployeesFailure = () => ({
  type: FETCH_EMPLOYEES_ERROR
});

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(fetchEmployeesStart());
    realtimeDb.getEmployees().then((snapshot) => {
      let employees = {};
      if (snapshot.val()) {
        employees = snapshot.val();
      }
      dispatch(fetchEmployeesSuccess(employees));
    });
  };
};
