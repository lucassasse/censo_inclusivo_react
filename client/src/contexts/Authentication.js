import { useState, createContext, useCallback, useContext } from 'react';
import AuthService from '../services/AuthService';

const AuthenticationContext = createContext({});

const tokenName = 'token';
/*
0 || '' // ''
false || '' // ''
'' || true // true
undefined || true // true
null || true // true

// nullish coalescing operator
0 ?? '' // 0
false ?? '' // false
'' ?? true // ''
undefined ?? true // true
null ?? true // true
 */

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(tokenName) ?? '');

  const login = useCallback(async (cpf, password) => {
    const response = await AuthService.login(cpf, password);
    setToken(response.token);
    localStorage.setItem(tokenName, response.token);
  }, []);

  const logout = useCallback(() => {
    setToken('');
    localStorage.removeItem(tokenName);
  });
  return (
    <AuthenticationContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
