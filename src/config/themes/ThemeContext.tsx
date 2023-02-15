import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {Theme, ThemeContextValue, ThemeOption} from './interface';
import {basicTheme} from './values/basicTheme';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: basicTheme,
  changeTheme: () => null,
});

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState(basicTheme);

  const handleChangeTheme = useCallback((value: ThemeOption) => {
    let newTheme: Theme;

    switch (value) {
      case ThemeOption.Basic:
      default:
        newTheme = basicTheme;
        break;
    }

    setTheme(newTheme);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      changeTheme: handleChangeTheme,
    }),
    [theme, handleChangeTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
