// src/components/ThemeToggle.js
import { useTheme } from '../contexts/ThemeContext';
import { Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch isChecked={colorMode === 'dark'} onChange={() => {
      toggleTheme();
      toggleColorMode();
    }} />
  );
};

export default ThemeToggle;
