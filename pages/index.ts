import { getStories } from '@app/story/Stories.service';
import { GetStaticProps } from 'next';

export { HomePage as default } from '@app/components/HomePage';

export const getStaticProps: GetStaticProps = async () => {
  const { stories } = await getStories();

  return { props: { stories } };
};
