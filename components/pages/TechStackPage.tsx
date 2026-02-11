const techStack = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Spring Boot", "Tailwind CSS", "Node.js"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Microsoft Azure", "Docker", "GitHub Actions"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Postman", "SonarQube", "Figma"],
    },
    {
      category: "AI / Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    },
  ];
  
  export default function TechStackPage() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Tech Stack
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Technologies I Work With
          </h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            A collection of tools, frameworks, and technologies I use to build
            scalable web applications and intelligent systems.
          </p>
        </header>
  
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h2 className="mb-3 text-sm font-semibold text-slate-50">
                {group.category}
              </h2>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    );
  }