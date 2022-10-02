import { graphqlSDK } from "@app/apis/graphql";

export async function getCategories() {
  const result = await graphqlSDK.getCategories();

  return result.categories;
}
