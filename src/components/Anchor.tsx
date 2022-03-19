import { externalLinkAttributes } from '@app/utils/externalLinkAttributes';
import { Link } from '@stillmine/react-components';
import NextLink from 'next/link';
import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<typeof Link> {
  href: string;
}

const BaseAnchor = forwardRef<HTMLAnchorElement, Props>(function BaseAnchor({ href, ...props }, ref) {
  return (
    <NextLink href={href}>
      <Link ref={ref} {...props} />
    </NextLink>
  );
});

const ExternalAnchor = forwardRef<HTMLAnchorElement, Props>(function ExternalAnchor(props, ref) {
  return <Link ref={ref} {...externalLinkAttributes} {...props} />;
});

type AnchorType = typeof BaseAnchor & {
  External: typeof ExternalAnchor;
};

export const Anchor = BaseAnchor as AnchorType;

Anchor.External = ExternalAnchor;
