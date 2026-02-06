export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Achintha Alahakoon
          </span>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          Front-end developer focused on building clean, modern, and responsive
          web experiences. This portfolio highlights my favorite projects and
          how to get in touch.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-1 justify-center md:mt-0">
        <div className="relative h-52 w-52 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_55%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Based in
            </span>
            <span className="mt-1 text-sm font-semibold text-slate-100">
              Sri Lanka
            </span>
            <span className="mt-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200">
              Front-end Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


