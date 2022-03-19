import { position } from '@app/utils/position';
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
      css={position.fixed({ bottom: 24, right: 24 })}
      type="button"
      onClick={() => {
        scrollTo({ behavior: 'smooth', top: 0 });
      }}
    >
      scroll to top
    </button>
  );
}
