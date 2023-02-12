import React, {FC} from 'react';

import {QueryClientProvider} from '~config/queryClient';
import {ThemeProvider} from '~config/themes';
import Navigation from '~navigation/Navigation';

const App: FC = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <Navigation />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
