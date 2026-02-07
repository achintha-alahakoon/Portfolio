const courses = [
  {
    title: "Modern React & Next.js",
    provider: "Online Platform",
    focus: "Building production-ready React and Next.js applications.",
  },
  {
    title: "Advanced CSS & Tailwind",
    provider: "Online Platform",
    focus: "Design systems, responsive layouts, and component-based styling.",
  },
  {
    title: "JavaScript Deep Dive",
    provider: "Online Platform",
    focus: "Core JavaScript concepts, patterns, and best practices.",
  },
];

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Courses
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Courses & Certifications
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          A selection of courses that have shaped my understanding of modern web
          development.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200"
          >
            <h2 className="text-sm font-semibold text-slate-50">
              {course.title}
            </h2>
            <p className="mt-1 text-xs text-slate-400">{course.provider}</p>
            <p className="mt-3 text-sm text-slate-300">{course.focus}</p>
          </article>
        ))}
      </section>
    </main>
  );
}



