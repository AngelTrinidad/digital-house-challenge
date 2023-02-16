import React from 'react';

import {render as RNTLRender} from '@testing-library/react-native';

import {QueryClientProvider} from '~config/queryClient';
import {ThemeProvider} from '~config/themes';

export * from '@testing-library/react-native';

export const render = (element: any) => {
  const component = RNTLRender(
    <ThemeProvider>
      <QueryClientProvider>{element}</QueryClientProvider>
    </ThemeProvider>,
  );

  return {
    ...component,
    rerender: (rerenderEl: any) =>
      component.rerender(
        <ThemeProvider>
          <QueryClientProvider>{rerenderEl}</QueryClientProvider>
        </ThemeProvider>,
      ),
  };
};
