import { db } from '../../firebase';
import {
  FETCH_USERS_STARTED,
  FETCH_USERS_COMPLETED,
  FETCH_USERS_ERROR
} from '../actionTypes/actionTypes';

export const fetchUsersStart = () => ({
  type: FETCH_USERS_STARTED
});
export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_COMPLETED,
  payLoad: data
});
export const fetchUsersFailure = () => ({
  type: FETCH_USERS_ERROR
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());
    db.getUsers().then((snapshot) => {
      let users = {};
            snapshot.docs.forEach((doc) => {
              users[doc.id] = doc.data();
            });
      dispatch(fetchUsersSuccess(users));
    });
  };
};
