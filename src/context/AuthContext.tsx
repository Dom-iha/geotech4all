import { createContext } from 'react';

export const INITIAL_STATE = {
  authenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextValues>({
  user: null,
  token: null,
  authenticated: false,
  logout : () => {},
  authenticate: () => {},
});

export default AuthContext;
