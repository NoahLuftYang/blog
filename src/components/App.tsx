import { environment } from '@app/relay/environment';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalErrorBoundary } from '@product/react-components';
import { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { GlobalStyles } from './GlobalStyles';
import { SEO } from './SEO';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalErrorBoundary>
      <RelayEnvironmentProvider environment={environment}>
        <ChakraProvider>
          <SEO.Default />
          <GlobalStyles />
          <Component {...pageProps} />
        </ChakraProvider>
      </RelayEnvironmentProvider>
    </GlobalErrorBoundary>
  );
};
