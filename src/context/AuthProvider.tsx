import { useState, useReducer, useEffect } from 'react';
import AuthContext, { INITIAL_STATE } from './AuthContext';
import AuthReducer from './AuthReducer';

function AuthProvider({ children }: { children: React.ReactNode }) {
  
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [authenticated, setauthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('USER');
    const possibleUser = storedUser ? JSON.parse(storedUser) : '';
    setUser(possibleUser)
  }, [])

  const authenticate = (userDetails: User) => {
    dispatch({ type: 'LOGIN', payload: userDetails });
  };

  const logout = (userData: UserData) => {
    dispatch({ type: 'LOGOUT', payload: userData });
  };

  const authValues = {
    authenticated,
    user,
    authenticate,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
