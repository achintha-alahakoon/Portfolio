import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/courses", label: "Courses" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M4.98 3.5C4.98 4.61 4.09 5.5 2.98 5.5C1.87 5.5 0.98 4.61 0.98 3.5C0.98 2.39 1.87 1.5 2.98 1.5C4.09 1.5 4.98 2.39 4.98 3.5ZM5 8H1V22H5V8ZM13.5 8H9.5V22H13.5V14.8C13.5 11.8 17.5 11.6 17.5 14.8V22H21.5V13.5C21.5 7.9 15.5 8.1 13.5 10.9V8Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.28 5.69.41.36.77 1.08.77 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    href: "https://bitbucket.org",
    label: "Bitbucket",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M3.27 3.02A.75.75 0 0 0 2.53 3.6l2.46 16.8c.06.4.4.7.81.7h12.4c.4 0 .74-.29.8-.69l2.47-16.8a.75.75 0 0 0-.73-.87H3.27Zm11.03 12.4H9.7L9 9h6l-.7 6.42Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <header className="border-b border-sky-500/20 bg-slate-950/80 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
        
        {/* LEFT: Name */}
        <div className="flex-1">
          <Link href="/" className="text-xl font-semibold tracking-tight md:text-2xl">
            <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
              Achintha Alahakoon
            </span>
          </Link>
        </div>

        {/* CENTER: Nav links */}
        <nav className="flex flex-1 justify-center gap-6 text-base font-medium text-slate-200 md:gap-8 md:text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Social icons */}
        <div className="flex flex-1 justify-end items-center gap-3 text-slate-200">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full border border-slate-700/80 bg-slate-900/70 p-1.5 text-slate-300 transition hover:border-sky-400 hover:bg-slate-900 hover:text-sky-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </header>
  );
}

