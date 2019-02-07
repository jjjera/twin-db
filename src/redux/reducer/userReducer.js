import {
  ADD_USER_STARTED,
  ADD_USER_COMPLETED,
  ADD_USER_ERROR,
  FETCH_USERS_STARTED,
  FETCH_USERS_COMPLETED,
  FETCH_USERS_ERROR
} from '../actionTypes/actionTypes';

const INITIAL_STATE = {
  submitted: false,
  success: false,
  error: false,
  users: {}
};

function userReducer(state = INITIAL_STATE, action) {
  // console.log('userReducer called',action);
  switch (action.type) {
    case ADD_USER_STARTED: {
      return {
        ...state,
        submitted: true
      };
    }
    case ADD_USER_COMPLETED: {
      let key = action.payLoad.id;
      let data = action.payLoad.data;
      state.users[key] = data;
      return {
        ...state,
        submitted: false,
        success: true
      };
    }
    case ADD_USER_ERROR: {
      return {
        ...state,
        submitted: false,
        error: true
      };
    }
    case FETCH_USERS_STARTED: {
      return {
        ...state,
        submitted: true
      };
    }
    case FETCH_USERS_COMPLETED: {
      if (action.payLoad) {
        return {
          ...state,
          users: { ...action.payLoad },
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
    case FETCH_USERS_ERROR: {
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

export default userReducer;
