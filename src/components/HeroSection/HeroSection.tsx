import { Anchor } from '@app/components/Anchor';
import { Icon } from '@app/components/Icon/mod';
import { 링크 } from '@app/constants/Link';
import { css } from '@emotion/react';
import { Button, HStack, VStack } from '@product/react-components';

import { HeroSectionTitle } from './HeroSectionTitle';
import { Interests } from './Interests';

export const HeroSection = () => {
  return (
    <VStack spacing={16}>
      <HeroSectionTitle />
      <Interests />
      <HStack as="section" spacing={8}>
        <Button as={Anchor} href={링크.github}>
          Follow me on <Icon.Github css={css(`color: #fff`)} height={24} width={24} />
        </Button>
        <Button as={Anchor} href={링크.linkedin}>
          Follow me on <Icon.Linkedin css={css(`color: #fff`)} height={24} width={24} />
        </Button>
      </HStack>
    </VStack>
  );
};
