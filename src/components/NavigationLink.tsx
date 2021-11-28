import styled from '@emotion/styled';

import { Anchor } from './Anchor';

export const NavigationLink = styled(Anchor)`
  &::after {
    background-color: #000;
    border-radius: 50%;
    content: '';
    height: 0.2rem;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 120%;
    transform: translateX(-50%) scale(0.2);
    transition: opacity 0.2s, transform 0.2s;
    width: 0.2rem;
  }

  &:hover::after,
  &.active::after {
    opacity: 1;
    transform: translateX(-50%);
    transition: opacity 0.2s, transform 0.2s;
  }
`;
