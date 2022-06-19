import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (user) => {
    const { displayName, email, photoURL } = user;
    setUser({ displayName, email, photoURL });
    setIsLoggedIn(true);
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
