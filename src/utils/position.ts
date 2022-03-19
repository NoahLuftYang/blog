import { CSSProperties } from 'react';

interface Options {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  x?: number;
  y?: number;
}

export function position(position: CSSProperties['position'], options: Options | number) {
  const spacing: Record<string, number> = {};

  if (typeof options === 'number') {
    spacing.bottom = options;
    spacing.left = options;
    spacing.right = options;
    spacing.top = options;
  } else {
    const { bottom, left, right, top, x, y } = options;

    if (x != null) {
      spacing.left = x;
      spacing.right = x;
    }

    if (y != null) {
      spacing.bottom = y;
      spacing.top = y;
    }

    if (bottom != null) {
      spacing.bottom = bottom;
    }

    if (left != null) {
      spacing.left = left;
    }

    if (right != null) {
      spacing.right = right;
    }

    if (top != null) {
      spacing.top = top;
    }
  }

  return {
    position,
    ...Object.fromEntries(Object.entries(spacing).map(([direction, unit]) => [direction, `${unit}px`])),
  };
}

position.absolute = function absolute(options: Options) {
  return position('absolute', options);
};

position.fixed = function fixed(options: Options) {
  return position('fixed', options);
};
