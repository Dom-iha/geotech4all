import { Reducer } from 'react';

const AuthReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        authenticated: true,
        user: action.payload,
      };
    }

    case 'LOGOUT': {
      return {
        authenticated: false,
        user: null,
        // remove user from localstorage as well
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default AuthReducer;
