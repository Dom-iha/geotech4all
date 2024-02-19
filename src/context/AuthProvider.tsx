import { useState, ReactNode } from 'react';
import AuthContext from './AuthContext';

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authenticated, setauthenticated] = useState(false);

  const authValues = {
    authenticated,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
