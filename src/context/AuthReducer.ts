import { Reducer } from 'react';

const AuthReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const user = {
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        avatar: action.payload.avatar,
      }
      const pass = {
        token: action.payload.token,
        userId: action.payload.userId,
        expiry: new Date(new Date().getTime() + 1000 * 60 * 60 * 9), // 9 hours
      }
      
      localStorage.setItem('PASS', JSON.stringify(pass)) ;

      const updatedState = {
        ...state,
        authenticated: true,
        user: user,
      };
      return updatedState;
    }

    case 'LOGOUT': {
      localStorage.removeItem('PASS');
      
      const updatedState = {
        ...state,
        authenticated: false,
        user: null,
      };
      return updatedState;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default AuthReducer;
