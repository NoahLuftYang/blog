import { css } from '@emotion/react';
import { useEvent, useToggle } from 'react-use';

export const ScrollTopButton = () => {
  const [visible, toggle] = useToggle(false);

  useEvent(
    'scroll',
    () => {
      toggle(pageYOffset > 0);
    },
    window
  );

  if (!visible) {
    return null;
  }

  return (
    <button
      css={css`
        bottom: 3rem;
        position: fixed;
        right: 3rem;
      `}
      onClick={() => {
        scrollTo({ behavior: 'smooth', top: 0 });
      }}
    >
      scroll to top
    </button>
  );
};
