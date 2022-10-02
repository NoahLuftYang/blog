import { getCategories } from "@app/category/category.server";
import { CategoryTab } from "@app/category/CategoryTab";
import { Layout } from "@app/components/Layout";
import { getStories } from "@app/story/story.server";
import { StoryList } from "@app/story/StoryList";
import { useLoaderData } from "@remix-run/react";
import { Container, Grid, GridItem } from "@stillmine/react-components";
import { Header } from "./Header";

export function StoriesPage() {
  const { categories, stories } = useLoaderData<{
    categories: Awaited<ReturnType<typeof getCategories>>;
    stories: Awaited<ReturnType<typeof getStories>>;
  }>();

  return (
    <Layout>
      <Container
        as="main"
        css={{
          marginTop: Header.HEIGHT,
          padding: "0 64px",
        }}
        maxWidth="container.lg"
      >
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colEnd={12} colStart={2}>
            <CategoryTab
              categories={[{ id: "all", name: "All" }, ...categories]}
            />
          </GridItem>
          <GridItem colEnd={11} colStart={3} css={{ marginTop: 24 }}>
            <StoryList stories={stories} />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
}
