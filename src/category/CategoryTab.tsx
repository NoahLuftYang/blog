import { 라우트 } from '@app/constants/Route';
import { capitalize } from '@app/utils/capitalize';
import styled from '@emotion/styled';
import { Tab, TabList, Tabs } from '@stillmine/react-components';
import Router from 'next/router';

import { CategoriesQueryResponse } from './__generated__/CategoriesQuery.graphql';

interface Props {
  categories: CategoriesQueryResponse['categories'];
}

export function CategoryTab({ categories }: Props) {
  return (
    <Tabs
      variant="unstyled"
      onChange={index => {
        if (index === 0) {
          Router.push(라우트.stories, undefined, { shallow: true });
          return;
        }

        const categoryName = categories.find((_, categoryIndex) => {
          return categoryIndex === index;
        })?.name;

        if (categoryName == null) {
          throw new Error('Invalid [categoryName]');
        }

        Router.push(
          {
            pathname: 라우트.storiesByCategory,
            query: { categoryName },
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      <TabList>
        {categories.map(({ id, name }) => {
          return <TabItem key={id}>{capitalize(name)}</TabItem>;
        })}
      </TabList>
    </Tabs>
  );
}

const TabItem = styled(Tab)`
  color: transparent;
  font-size: 4.5rem;
  text-align: center;
  -webkit-text-stroke: 1px #333;

  &[aria-selected='true'] {
    color: #333;
    -webkit-text-stroke: 0;
  }
`;
