import { getStories } from "@app/story/story.server";
import { json } from "@remix-run/node";

export { HomePage as default } from "@app/components/HomePage";

export async function loader() {
  const stories = await getStories();

  return json({ data: stories });
}
