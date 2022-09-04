import { getExperiences } from "@app/experience/experience.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function AboutPage() {
  const { data: experiences } = useLoaderData<{
    data: Awaited<ReturnType<typeof getExperiences>>;
  }>();

  return (
    <div>
      <h1>안녕하세요, 저는 프론트엔드 엔지니어 양의현입니다.</h1>
      <ul>
        <li>
          기술적 역량을 활용하여 기존에 있던 불편함을 빠르게 해결할 수 있습니다.
        </li>
        <li>
          상황에 맞는 커뮤니케이션 방식을 활용하여 문제를 효율적으로 풀어갈 수
          있습니다.
        </li>
        <li>
          제가 가진 지식들을 동료들에게 전파하여, 개인보다 조직의 역량을 높이고
          있습니다.
        </li>
      </ul>
      <h2>Work Experiences</h2>
      {experiences.map(({ companyName, jobTitle, description }) => {
        return (
          <section key={companyName}>
            <h1>{companyName}</h1>
            <p>{jobTitle}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </section>
        );
      })}
    </div>
  );
}

export async function loader() {
  const experiences = await getExperiences();

  return json({ data: experiences });
}
