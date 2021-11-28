import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <section css={css(`min-height: 100vh`)}>
        <Header />
        {children}
      </section>
      <Footer />
    </>
  );
};
