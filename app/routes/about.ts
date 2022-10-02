import { getExperiences } from "@app/experience/experience.server";
import { json } from "@remix-run/node";

export { AboutPage as default } from "@app/components/AboutPage";

export async function loader() {
  const experiences = await getExperiences();

  return json({ data: experiences });
}
