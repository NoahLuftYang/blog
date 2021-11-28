import { Container, Flex, HStack } from '@chakra-ui/react';
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
      <Flex as={Container} justify="space-between" maxWidth="container.lg">
        <p>의현 © 2020</p>
        <HStack gutter={4}>
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
