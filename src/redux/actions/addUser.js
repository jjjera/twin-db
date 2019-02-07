import { db } from '../../firebase';
import {
  ADD_USER_STARTED,
  ADD_USER_COMPLETED,
  ADD_USER_ERROR
} from '../actionTypes/actionTypes';

export const addUserStart = () => ({
  type: ADD_USER_STARTED
});
export const addUserSuccess = (data) => ({
  type: ADD_USER_COMPLETED,
  payLoad: data
});
export const addUserFailure = () => ({
  type: ADD_USER_ERROR
});

export const addUser = (values) => {
  return (dispatch) =>
    new Promise(function(resolve, reject) {
      dispatch(addUserStart());
      console.log('values are',values);
      db.addUser(values)
        .then(() => {
          resolve('User added successfully');
        })
        .catch((error) => {
          console.log('error is',error);
          dispatch(addUserFailure(error));
          reject(error);
        });
    });
};
