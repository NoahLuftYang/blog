import { Layout } from "@app/components/Layout";
import { getStories } from "@app/story/story.server";
import { StoryList } from "@app/story/StoryList";
import { useLoaderData } from "@remix-run/react";
import { Container, Grid, GridItem } from "@stillmine/react-components";
import { Header } from "./Header";

export function HomePage() {
  const { data: stories } = useLoaderData<{
    data: Awaited<ReturnType<typeof getStories>>;
  }>();

  return (
    <Layout>
      <Container
        as="main"
        css={{
          marginTop: Header.HEIGHT,
          padding: "32px 64px 100px",
        }}
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
