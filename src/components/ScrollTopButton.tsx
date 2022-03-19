import { css } from '@emotion/react';
import useEvent from 'react-use/lib/useEvent';
import useToggle from 'react-use/lib/useToggle';

export function ScrollTopButton() {
  const [visible, toggle] = useToggle(false);

  useEvent(
    'scroll',
    () => {
      toggle(scrollY > 0);
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
      type="button"
      onClick={() => {
        scrollTo({ behavior: 'smooth', top: 0 });
      }}
    >
      scroll to top
    </button>
  );
}
