import { createContext, useState } from 'react';
import { loginRequest } from './AuthenticationService';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch((err) => {
        console.log(err)
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
