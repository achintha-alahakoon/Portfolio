const experiences = [
  {
    role: "Front-end Developer",
    company: "Demo Company",
    period: "2023 — Present",
    description:
      "Building responsive interfaces, reusable components, and improving performance for web applications.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2021 — 2023",
    description:
      "Designed and developed small business websites and landing pages with a focus on clarity and conversions.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Experience
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Work experience
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          A snapshot of my professional journey so far. These roles helped me
          grow as a developer and collaborator.
        </p>
      </header>

      <section className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.role + exp.company}
            className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200 md:flex-row md:items-start md:gap-6"
          >
            <div className="w-full md:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {exp.period}
              </p>
              <p className="mt-1 font-medium text-slate-100">{exp.company}</p>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-sm font-semibold text-slate-50">
                {exp.role}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{exp.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}



