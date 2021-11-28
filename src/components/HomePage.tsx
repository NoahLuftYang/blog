import { Layout } from '@app/components/Layout';
import { StoriesQueryResponse } from '@app/story/__generated__/StoriesQuery.graphql';
import { StoryList } from '@app/story/StoryList';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { Header } from './Header';

interface Props {
  stories: StoriesQueryResponse['stories'];
}

export const HomePage = ({ stories }: Props) => {
  return (
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
          <GridItem colStart={3} colEnd={11}>
            <StoryList stories={stories} />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};
