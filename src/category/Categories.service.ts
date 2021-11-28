import { fetchQuery } from '@app/relay/fetchQuery';
import { graphql } from 'relay-runtime';

import { CategoriesQuery } from './__generated__/CategoriesQuery.graphql';

const query = graphql`
  query CategoriesQuery {
    categories {
      id
      name
    }
  }
`;

export async function getCategories() {
  const response = await fetchQuery<CategoriesQuery>(query);

  if (response == null) {
    throw new Error();
  }

  return response;
}
