import { useEnvironment } from '@app/relay/environment';
import { GlobalErrorBoundary, ThemeProvider } from '@stillmine/react-components';
import { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { GlobalStyles } from './GlobalStyles';
import { SEO } from './SEO';

export function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <ThemeProvider resetCSS={true}>
      <GlobalStyles />
      <GlobalErrorBoundary>
        <RelayEnvironmentProvider environment={environment}>
          <SEO.Default />
          <Component {...pageProps} />
        </RelayEnvironmentProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
}
