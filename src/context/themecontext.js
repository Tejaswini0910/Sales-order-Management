// src/contexts/ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const customTheme = extendTheme({
    config: {
      initialColorMode: theme,
      useSystemColorMode: false,
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
