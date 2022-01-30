import { Layout } from '@app/components/Layout';
import { StoriesQueryResponse } from '@app/story/__generated__/StoriesQuery.graphql';
import { StoryList } from '@app/story/StoryList';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from './Header';

interface Props {
  stories: StoriesQueryResponse['stories'];
}

export function HomePage({ stories }: Props) {
  return (
    <Layout>
      <Container
        as="main"
        css={css`
          margin-top: ${Header.HEIGHT}px;
          padding: 32px 64px 100px;
        `}
        maxWidth="container.lg"
      >
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colEnd={11} colStart={3}>
            <StoryList stories={stories} />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
}
