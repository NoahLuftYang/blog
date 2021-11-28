import { getCategories } from '@app/category/Categories.service';
import { getStories } from '@app/story/Stories.service';
import { GetStaticPaths, GetStaticProps } from 'next';

export { StoriesPage as default } from '@app/components/StoriesPage';

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await getCategories();

  return {
    fallback: false,
    paths: categories.map(({ name }) => {
      return { params: { categoryName: name } };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.categoryName !== 'string') {
    return { notFound: true };
  }

  const [{ categories }, { stories }] = await Promise.all([
    getCategories(),
    getStories(params.categoryName),
  ]);

  return { props: { categories, stories } };
};
