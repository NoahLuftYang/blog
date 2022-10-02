import type { LinksFunction, MetaFunction } from "@remix-run/node";

export { App as default } from "@app/components/App";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "의현",
    description: "Personal engineering blog",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const link: LinksFunction = () => {
  return [
    {
      href: "/favicon/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      href: "/favicon/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      href: "/favicon/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    { href: "/favicon/site.webmanifest", rel: "manifest" },
    { href: "/favicon/favicon.ico", rel: "shortcut icon" },
  ];
};
