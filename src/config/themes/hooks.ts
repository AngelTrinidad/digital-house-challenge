import {useContext} from 'react';

import {ThemeContext} from './ThemeContext';

/**
 * Custom hook to get current theme value
 */
export const useTheme = () => {
  const {theme} = useContext(ThemeContext);
  return {...theme};
};

/**
 * Custom hook to get current theme value and change method
 */
export const useThemeContext = () => useContext(ThemeContext);
