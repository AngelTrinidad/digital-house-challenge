export interface ThemeColor {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  screen: {
    primary: string;
    secondary?: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export interface Theme {
  colors: ThemeColor;
}

export enum ThemeOption {
  Basic = 'Basic',
}

export interface ThemeContextValue {
  theme: Theme;
  changeTheme: (value: ThemeOption) => void;
}
