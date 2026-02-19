import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend & Backend Development",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Python", icon: SiPython, color: "text-yellow-300" },
    ],
  },
];

export default function TechStackPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 text-center space-y-3">
        <h1 className="text-4xl font-semibold text-slate-50">
          Tools & Technologies
        </h1>
        <p className="text-slate-400">
          I love using modern tools to build scalable and intelligent systems.
        </p>
      </header>

      <section className="space-y-14">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-6 text-center text-lg font-semibold text-slate-200">
              {group.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-indigo-500 transition"
                  >
                    <Icon className={`text-lg ${tech.color}`} />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}