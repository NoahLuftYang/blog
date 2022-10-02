import { graphqlSDK } from "@app/apis/graphql";

export async function getStories(categoryName?: string) {
  const result = await graphqlSDK.getStories({
    where:
      categoryName == null ? undefined : { category: { name: categoryName } },
  });

  return result.stories;
}

export async function getStory(slug: string) {
  const result = await graphqlSDK.getStory({ slug });

  return result.story;
}
