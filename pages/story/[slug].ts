import { getStories } from '@app/story/Stories.service';
import { getStoryAndAdjacentStories } from '@app/story/Story.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

export { StoryPage as default } from '@app/components/StoryPage';

export const getStaticPaths: GetStaticPaths = async () => {
  const { stories } = await getStories();

  return {
    fallback: false,
    paths: stories.map(({ slug }) => ({ params: { slug } })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== 'string') {
    throw new Error('Invalid [slug].');
  }

  const { moreStories, story } = await getStoryAndAdjacentStories(params.slug);

  if (story == null) {
    return { notFound: true };
  }

  const mdxSource = await serialize(story.content);

  return {
    props: {
      moreStories,
      story: {
        ...story,
        content: mdxSource,
      },
    },
  };
};
