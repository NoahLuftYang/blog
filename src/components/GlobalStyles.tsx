import 'sanitize.css';

import { css, Global } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          word-break: keep-all;
        }

        body {
          font-family: -apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans',
            sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        a,
        button,
        textarea {
          font-family: -apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans',
            sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        a,
        button {
          cursor: pointer;
        }
      `}
    />
  );
};
