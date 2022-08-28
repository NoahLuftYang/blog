import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function AboutPage() {
  const { data: experiences } = useLoaderData();

  return (
    <div>
      <h1>About</h1>
      {experiences.map(({ companyName, jobTitle }) => {
        return <section key={companyName}>{companyName}</section>;
      })}
    </div>
  );
}

export function loader() {
  return json({
    data: [
      {
        companyName: "토스페이먼츠",
        jobTitle: "Frontend Developer",
      },
      {
        companyName: "샌드박스네트워크",
        jobTitle: "Software Engineer",
      },
      {
        companyName: "옴니어스",
        jobTitle: "Frontend Developer",
      },
    ],
  });
}
