import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {
  GlobalErrorBoundary,
  ThemeProvider,
} from "@stillmine/react-components";
import { globalCss } from "@stitches/react";
import { ReactNode } from "react";

const fontFamily = `-apple-system, 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

const globalStyles = globalCss({
  "*": { wordBreak: "keep-all" },
  body: { fontFamily },
  "a, button, textarea": { fontFamily },
  "a, button": { cursor: "pointer" },
});

export function App() {
  globalStyles();

  return (
    <Document>
      <ThemeProvider resetCSS={true}>
        <GlobalErrorBoundary>
          <Outlet />
        </GlobalErrorBoundary>
      </ThemeProvider>
    </Document>
  );
}

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
