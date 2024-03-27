'use client'
import { useState, useReducer, useEffect, useLayoutEffect } from 'react';
import AuthContext, { INITIAL_STATE } from './AuthContext';
import AuthReducer from './AuthReducer';
import { usePathname, redirect } from 'next/navigation';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const pathname = usePathname();
  const adminPages = pathname.includes('/admin');

  
  
  useEffect(() => {
    setAuthenticated(state.authenticated);
    setUser(state.user);
  }, [state]);

  useEffect(() => {
    const storedPass = localStorage.getItem('PASS');
    if (storedPass) {
      const pass = JSON.parse(storedPass);
      setAuthenticated(true);
      setToken(pass.token);
    } 
  }, []);

  // i'm going to change this and use next cookies
  if (adminPages && !authenticated) {
    redirect('/auth/login');
  } 

  const authenticate = (userDetails: User) => {
    dispatch({ type: 'LOGIN', payload: userDetails });
  };
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const authValues = {
    authenticated,
    user,
    authenticate,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
