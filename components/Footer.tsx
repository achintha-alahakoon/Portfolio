import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaBitbucket } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent">
              Achintha Alahakoon
            </h2>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Software Engineer passionate about building modern web
              applications and intelligent systems with clean design
              and scalable architecture.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-sky-400">About</Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-sky-400">Experience</Link>
              </li>
              <li>
                <Link href="/techstack" className="hover:text-sky-400">Tech Stack</Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-sky-400">Education</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-sky-400 cursor-pointer">Web Development</li>
              <li className="hover:text-sky-400 cursor-pointer">AI / ML Solutions</li>
              <li className="hover:text-sky-400 cursor-pointer">UI / UX Design</li>
            </ul>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-sm text-slate-400">
              Creating meaningful digital experiences through code,
              design, and innovation. Focused on delivering high-quality,
              user-centered solutions.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Achintha Alahakoon. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-sky-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sky-400">Terms of Use</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaGithub size={14} />
            </a>

            <a
              href="https://bitbucket.com"
              target="_blank"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaBitbucket size={14} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="rounded-full border border-white/10 p-2 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaInstagram size={14} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}