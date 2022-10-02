import { getCategories } from "@app/category/category.server";
import { getStories } from "@app/story/story.server";
import { json, MetaFunction } from "@remix-run/node";

export { StoriesPage as default } from "@app/components/StoriesPage";

export async function loader() {
  const [categories, stories] = await Promise.all([
    getCategories(),
    getStories(),
  ]);

  return json({
    categories,
    stories,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "스토리",
  };
};
