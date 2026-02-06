const projects = [
  {
    title: "Modern Portfolio Website",
    description:
      "A responsive portfolio built with Next.js and Tailwind CSS, focusing on clean UI and smooth navigation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Dashboard UI Concept",
    description:
      "A minimal analytics dashboard with cards, charts, and dark mode design language.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Landing Page Exploration",
    description:
      "A set of landing page layouts exploring typography, spacing, and color palettes.",
    tech: ["HTML", "CSS", "Figma"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Selected work
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          A collection of interfaces and experiences I&apos;ve designed and
          developed. Each project focuses on clarity, performance, and
          attention to detail.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition hover:border-sky-500/60 hover:bg-slate-900"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}


