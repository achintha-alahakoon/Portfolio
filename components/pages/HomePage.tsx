import Image from "next/image";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col items-center justify-center gap-14 px-6 py-20 md:flex-row md:items-center md:justify-between">
      <div className="mt-10 flex flex-1 justify-center md:mt-0">
        <div className="relative h-72 w-72 overflow-hidden rounded-full border border-sky-500/30 bg-slate-900 shadow-2xl md:h-90 md:w-90">
          <Image
            src="/Images/homepic-re.png"
            alt="Portrait of Achintha Alahakoon"
            fill
            priority
            className="object-cover bg-slate-100 text-slate-900"
          />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-sky-400/60" />
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <h1 className="text-center text-5xl font-semibold tracking-tight text-slate-50 md:text-6xl lg:text-6xl">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
            Achintha Alahakoon
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
          An aspiring {" "}
          <span className="font-semibold text-sky-300">
            AI and Full-Stack engineer
          </span>
          , with a strong interest in building{" "}
          <span className="font-semibold text-emerald-300">
            scalable web applications
          </span>
          , and{" "}
          <span className="font-semibold text-violet-300">
            intelligent solutions
          </span>
          , using{" "}
          <span className="font-semibold text-amber-300">
            modern technologies
          </span>
          .
        </p>
        <div className="flex flex-wrap gap-6">
          {/* Gradient button */}
          <a
            href="/projects"
            className="rounded-full bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-md transition hover:opacity-90"
          >
            View Projects
          </a>

          {/* Normal button */}
          <a
            href="/contact"
            className="rounded-full border border-slate-600/80 px-6 py-3 text-base font-semibold text-slate-50 transition hover:border-sky-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}


