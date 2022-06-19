import { createContext, useState } from 'react';

export const HamburgerContext = createContext({
  isOpen: false,
  setIsOpen: () => {}
});

export const HamburgerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <HamburgerContext.Provider value={{ isOpen, toggle }}>
      {children}
    </HamburgerContext.Provider>
  );
};
