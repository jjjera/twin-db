import { realtimeDb } from '../../firebase';
import {
  ADD_EMPLOYEE_STARTED,
  ADD_EMPLOYEE_COMPLETED,
  ADD_EMPLOYEE_ERROR
} from '../actionTypes/actionTypes';

export const addEmployeeStart = () => ({
  type: ADD_EMPLOYEE_STARTED
});
export const addEmployeeSuccess = (data) => ({
  type: ADD_EMPLOYEE_COMPLETED,
  payLoad: data
});
export const addEmployeeFailure = () => ({
  type: ADD_EMPLOYEE_ERROR
});

export const addEmployees = (values) => {
  return (dispatch) =>
    new Promise(function(resolve, reject) {
      dispatch(addEmployeeStart());
      realtimeDb.addEmployee(values)
        .then((snapshot) => {
          let data = {id: snapshot.key, data: values};
          dispatch(addEmployeeSuccess(data));
          resolve('Employee added successfully');
        })
        .catch((error) => {
          dispatch(addEmployeeFailure(error));
          reject(error);
        });
    });
};
