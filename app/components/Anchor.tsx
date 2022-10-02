import { externalLinkAttributes } from "@app/utils/externalLinkAttributes";
import { Link } from "@remix-run/react";
import { Link as StillmineLink } from "@stillmine/react-components";
import { ComponentProps, forwardRef } from "react";

interface Props extends ComponentProps<typeof StillmineLink> {
  href: string;
}

const BaseAnchor = forwardRef<HTMLAnchorElement, Props>(function BaseAnchor(
  { href, ...props },
  ref
) {
  return (
    <Link to={href}>
      <StillmineLink ref={ref} {...props} />
    </Link>
  );
});

const ExternalAnchor = forwardRef<HTMLAnchorElement, Props>(
  function ExternalAnchor(props, ref) {
    return <StillmineLink ref={ref} {...externalLinkAttributes} {...props} />;
  }
);

type AnchorType = typeof BaseAnchor & {
  External: typeof ExternalAnchor;
};

export const Anchor = BaseAnchor as AnchorType;

Anchor.External = ExternalAnchor;
