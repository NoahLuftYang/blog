import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo';

export const SEO = (props: NextSeoProps) => {
  return <NextSeo {...props} />;
};

SEO.Default = () => {
  return (
    <DefaultSeo
      defaultTitle="의현"
      titleTemplate="%s | 의현"
      description="Personal engineering blog"
      additionalLinkTags={[
        { href: '/favicon/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
        { href: '/favicon/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/favicon/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/favicon/site.webmanifest', rel: 'manifest' },
        { href: '/favicon/favicon.ico', rel: 'shortcut icon' },
      ]}
      additionalMetaTags={[
        { content: '/favicon/browserconfig.xml', name: 'msapplication-config' },
        { content: '#000', name: 'msapplication-TileColor' },
        { content: '#000', name: 'theme-color' },
      ]}
    />
  );
};
