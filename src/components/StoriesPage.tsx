import { CategoriesQueryResponse } from '@app/category/__generated__/CategoriesQuery.graphql';
import { CategoryTab } from '@app/category/CategoryTab';
import { Layout } from '@app/components/Layout';
import { SEO } from '@app/components/SEO';
import { StoriesQueryResponse } from '@app/story/__generated__/StoriesQuery.graphql';
import { StoryList } from '@app/story/StoryList';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from './Header';

interface Props {
  categories: CategoriesQueryResponse['categories'];
  stories: StoriesQueryResponse['stories'];
}

export const StoriesPage = ({ categories, stories }: Props) => {
  return (
    <>
      <SEO title="스토리" />
      <Layout>
        <Container
          as="main"
          css={css`
            margin-top: ${Header.HEIGHT}px;
            padding: 0 64px;
          `}
          maxWidth="container.lg"
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colStart={2} colEnd={12}>
              <CategoryTab categories={[{ id: 'all', name: 'All' }, ...categories]} />
            </GridItem>
            <GridItem colStart={3} colEnd={11} css={css(`margin-top: 24px`)}>
              <StoryList stories={stories} />
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};
