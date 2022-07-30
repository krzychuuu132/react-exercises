import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });

      const { token, ...userData } = response.data;

      setUser(userData);
      localStorage.setItem('token', token);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('UseAuth need to bd used inside AuthContext');
  }

  return auth;
};
