import { getCategories } from '@app/category/Categories.service';
import { getStories } from '@app/story/Stories.service';
import { GetStaticProps } from 'next';

export { StoriesPage as default } from '@app/components/StoriesPage';

export const getStaticProps: GetStaticProps = async () => {
  const [{ categories }, { stories }] = await Promise.all([getCategories(), getStories()]);

  return { props: { categories, stories } };
};
