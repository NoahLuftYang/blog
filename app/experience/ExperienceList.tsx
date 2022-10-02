export function ExperienceList({ experiences }) {
  if (experiences.length === 0) {
    return <p>경력이 없습니다.</p>;
  }

  return (
    <>
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
    </>
  );
}
