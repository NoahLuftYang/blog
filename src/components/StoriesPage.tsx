import { CategoriesQuery$data } from '@app/category/__generated__/CategoriesQuery.graphql';
import { CategoryTab } from '@app/category/CategoryTab';
import { Layout } from '@app/components/Layout';
import { SEO } from '@app/components/SEO';
import { StoriesQuery$data } from '@app/story/__generated__/StoriesQuery.graphql';
import { StoryList } from '@app/story/StoryList';
import { css } from '@emotion/react';
import { Container, Grid, GridItem } from '@stillmine/react-components';

import { Header } from './Header';

interface Props {
  categories: CategoriesQuery$data['categories'];
  stories: StoriesQuery$data['stories'];
}

export function StoriesPage({ categories, stories }: Props) {
  return (
    <>
      <SEO title="스토리" />
      <Layout>
        <Container
          as="main"
          css={{
            marginTop: Header.HEIGHT,
            padding: '0 64px',
          }}
          maxWidth="container.lg"
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colEnd={12} colStart={2}>
              <CategoryTab categories={[{ id: 'all', name: 'All' }, ...categories]} />
            </GridItem>
            <GridItem colEnd={11} colStart={3} css={css(`margin-top: 24px`)}>
              <StoryList stories={stories} />
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
