export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          A bit about me
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          I&apos;m a front-end developer who enjoys turning ideas into
          interactive, accessible, and visually clean web experiences. I care a
          lot about details, performance, and keeping interfaces simple and
          intuitive.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
        <div className="space-y-4 text-sm text-slate-300 md:text-base">
          <p>
            I like working across the full front-end stack: from planning UX
            flows and component structures, to implementing them in code with
            modern frameworks like Next.js and styling systems like Tailwind
            CSS.
          </p>
          <p>
            I enjoy collaborating with designers and other developers, breaking
            complex problems into smaller pieces, and shipping features that
            feel polished.
          </p>
        </div>

        <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
          <h2 className="text-sm font-semibold text-slate-50">At a glance</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between gap-4">
              <span className="text-slate-400">Role</span>
              <span>Front-end Developer</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-slate-400">Location</span>
              <span>Sri Lanka</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-slate-400">Focus</span>
              <span>UI, UX, and modern web</span>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}


