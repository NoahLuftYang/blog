import { Date } from '@app/components/Date';
import { Layout } from '@app/components/Layout';
import { SEO } from '@app/components/SEO';
import { StoryQueryResponse } from '@app/story/__generated__/StoryQuery.graphql';
import { Comments } from '@app/story/Comments';
import { Content } from '@app/story/Content';
import { css } from '@emotion/react';
import { Container, Flex, Grid, GridItem, Heading } from '@stillmine/react-components';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Header } from './Header';

interface Props {
  story: StoryQueryResponse['story'] & {
    content: MDXRemoteSerializeResult;
  };
}

export function StoryPage({ story: { content, publishedAt, seo, title } }: Props) {
  return (
    <Layout>
      <SEO openGraph={seo?.image?.url == null ? undefined : { images: [{ url: seo.image.url }] }} title={title} />
      <Container
        css={css`
          margin-top: ${Header.HEIGHT}px;
          padding: 32px 64px 100px;
        `}
        maxWidth="container.lg"
      >
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem
            as="article"
            colEnd={11}
            colStart={3}
            css={css`
              & > * ~ * {
                margin-top: 32px;
              }
            `}
          >
            <Heading as="h1">{title}</Heading>
            <Flex as={Date} isoDate={publishedAt} justify="flex-end" />
            <Content content={content} />
            <Comments />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
}
