import { position } from '@app/utils/position';
import { Container, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useWindowScroll } from 'react-use';

import { Anchor } from './Anchor';

export const Header = () => {
  const { y } = useWindowScroll();

  return (
    <Flex
      as="header"
      css={[
        position.fixed({ left: 0, right: 0, top: 0 }),
        css`
          background-color: ${y > 0 ? '#fff' : 'transparent'};
          height: ${Header.HEIGHT}px;
          padding: 0 16px;
          transition: background-color 0.2s ease-in-out;
        `,
      ]}
    >
      <Flex align="center" as={Container} justify="space-between" maxWidth="container.lg">
        <Anchor fontSize="xl" fontWeight="bold" href="/">
          의현
        </Anchor>
        <nav>
          <Anchor href="/stories">스토리</Anchor>
        </nav>
      </Flex>
    </Flex>
  );
};

Header.HEIGHT = 62;
