export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Let&apos;s work together
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          Have an idea, a project, or just want to say hi? Send me a message
          and I&apos;ll get back to you as soon as I can.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <form className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me a bit about your project..."
              className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-sky-400"
          >
            Send Message
          </button>
        </form>

        <aside className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="text-sm font-semibold text-slate-100">
              Contact details
            </h2>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:you@example.com"
                className="text-sky-400 hover:text-sky-300"
              >
                you@example.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-100">
              Social links
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-slate-300 underline-offset-4 hover:text-sky-300 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 underline-offset-4 hover:text-sky-300 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}


