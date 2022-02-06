import { css } from '@emotion/react';
import { Container, Flex, HStack } from '@product/react-components';
import mailgo from 'mailgo';
import { useEffect } from 'react';

import { Anchor } from './Anchor';
import { Icon } from './Icon/mod';

export const Footer = () => {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <footer>
      <Flex as={Container} css={css(`padding: 32px 0`)} justify="flex-end" maxWidth="container.lg">
        <HStack gutter={4}>
          <p>의현 © 2021</p>
          <Anchor.External data-address="euihyun.yang.9x" data-domain="gmail.com" href="#mailgo">
            <Icon.Mail />
          </Anchor.External>
          <Anchor.External href="https://github.com/noahluftyang">
            <Icon.Github />
          </Anchor.External>
          <Anchor.External href="https://www.linkedin.com/in/noahluftyang">
            <Icon.Linkedin />
          </Anchor.External>
        </HStack>
      </Flex>
    </footer>
  );
};
