import { fetchQuery } from '@app/relay/fetchQuery';
import { graphql } from 'react-relay';

import { StoriesQuery } from './__generated__/StoriesQuery.graphql';

const query = graphql`
  query StoriesQuery($where: StoryWhereInput) {
    stories(first: 10, orderBy: publishedAt_DESC, stage: PUBLISHED, where: $where) {
      title
      slug
      publishedAt
      coverImage {
        url
      }
      category {
        name
      }
      excerpt
    }
  }
`;

export async function getStories(categoryName?: string) {
  const response = await fetchQuery<StoriesQuery>(
    query,
    categoryName != null ? { category: { name: categoryName } } : undefined
  );

  if (response == null) {
    throw new Error();
  }

  return response;
}
