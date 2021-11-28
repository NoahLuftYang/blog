import { Date } from '@app/components/Date';
import { Layout } from '@app/components/Layout';
import { SEO } from '@app/components/SEO';
import { StoryQueryResponse } from '@app/story/__generated__/StoryQuery.graphql';
import { Comments } from '@app/story/Comments';
import { Content } from '@app/story/Content';
import { Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Header } from './Header';

interface Props {
  story: StoryQueryResponse['story'] & {
    content: MDXRemoteSerializeResult;
  };
}

export const StoryPage = ({ story: { content, publishedAt, seo, title } }: Props) => {
  return (
    <Layout>
      <SEO
        title={title}
        openGraph={seo?.image?.url != null ? { images: [{ url: seo.image.url }] } : undefined}
      />
      <Container
        css={css`
          margin-top: ${Header.HEIGHT}px;
          padding: 0 64px;
        `}
        maxWidth="container.lg"
      >
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem
            as="article"
            colStart={3}
            colEnd={11}
            css={css`
              & > * ~ * {
                margin-top: 32px;
              }
            `}
          >
            <Heading as="h1">{title}</Heading>
            <Flex as={Date} justify="flex-end" isoDate={publishedAt} />
            <Content content={content} />
            <Comments />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};
