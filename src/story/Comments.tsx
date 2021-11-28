import { useEffect, useRef } from 'react';

const utteranc = {
  'async': 'true',
  'crossorigin': 'anonymous',
  'issue-term': 'pathname',
  'repo': 'noahluftyang/product',
  'src': 'https://utteranc.es/client.js',
  'theme': 'github-light',
};

export const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    Object.entries(utteranc).forEach(entry => {
      script.setAttribute(...entry);
    });

    commentsRef.current?.appendChild(script);
  }, []);

  return <div className="utterance" ref={commentsRef} />;
};
