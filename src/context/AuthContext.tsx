import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, ReactNode} from 'react';

interface AuthContextType {
  test: string;
  isLoading: boolean;
  userToken: string | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [test, setTest] = useState('Test Value');
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = () => {
    setIsLoading(true);
    setUserToken('DummyToken');
    AsyncStorage.setItem('userToken', 'DummyToken');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(false);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const contextValue: AuthContextType = {
    test,
    isLoading,
    userToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
