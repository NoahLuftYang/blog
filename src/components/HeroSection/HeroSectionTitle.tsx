import { css } from '@emotion/react';
import { useState } from 'react';
import { useInterval } from 'react-use';

const sentences = [
  '의현입니다.',
  '프론트엔드 엔지니어입니다.',
  '심플함을 추구합니다.',
  '변화에 열려있습니다.',
] as const;

export function HeroSectionTitle() {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex(prevIndex => {
      return (prevIndex + 1) % sentences.length;
    });
  }, 3000);

  return (
    <h1>
      저는 <span css={css(`will-change: opacity`)}>{sentences[index]}</span>
    </h1>
  );
}
