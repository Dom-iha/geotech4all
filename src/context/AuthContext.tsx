import { createContext } from 'react';

export const INITIAL_STATE = {
  authenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextValues>({
  authenticated: false,
  user: null,
  authenticate: () => {},
});

export default AuthContext;
