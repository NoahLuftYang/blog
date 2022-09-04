import { graphqlSDK } from "@app/apis/graphql";

export async function getExperiences() {
  const result = await graphqlSDK.getExperiences();

  return result.experiences.map((experience) => {
    return {
      ...experience,
      description: experience.description.html,
    };
  });
}
