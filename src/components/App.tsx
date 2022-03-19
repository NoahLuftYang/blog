import { useEnvironment } from '@app/relay/environment';
import { GlobalErrorBoundary, ThemeProvider } from '@stillmine/react-components';
import { globalCss } from '@stitches/react';
import { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { SEO } from './SEO';

const fontFamily = `-apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

const globalStyles = globalCss({
  '*': { wordBreak: 'keep-all' },
  body: { fontFamily },
  'a, button, textarea': { fontFamily },
  'a, button': { cursor: 'pointer' },
});

export function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <ThemeProvider resetCSS={true}>
      <GlobalErrorBoundary>
        <RelayEnvironmentProvider environment={environment}>
          <SEO.Default />
          <Component {...pageProps} />
        </RelayEnvironmentProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
}
