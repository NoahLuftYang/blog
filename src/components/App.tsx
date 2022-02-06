import { environment } from '@app/relay/environment';
import { GlobalErrorBoundary, ThemeProvider } from '@product/react-components';
import { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { GlobalStyles } from './GlobalStyles';
import { SEO } from './SEO';

export function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalErrorBoundary>
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider resetCSS={true}>
          <SEO.Default />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </GlobalErrorBoundary>
  );
}
