import { createContext, useState } from 'react';
import {
  checkAuthentication,
  loginRequest,
  logout,
  registerRequest,
} from './AuthenticationService';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  checkAuthentication((usr) => {
    if (usr) {
      setUser(usr);
    } else {
      setUser(null);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setError(null);
    const isPasswordsEqual = password === repeatedPassword;

    if (!isPasswordsEqual) {
      setError({ message: 'Error: Passwords are not match' });
      return;
    }

    setIsLoading(true);

    registerRequest(email, password)
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    logout()
      .then((result) => {
        setUser(null);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
