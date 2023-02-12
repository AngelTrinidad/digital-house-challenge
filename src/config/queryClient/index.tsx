import React, {FC, PropsWithChildren} from 'react';

import {QueryClient, QueryClientProvider as RQProvider} from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const QueryClientProvider: FC<PropsWithChildren> = ({children}) => (
  <RQProvider client={queryClient}>{children}</RQProvider>
);
