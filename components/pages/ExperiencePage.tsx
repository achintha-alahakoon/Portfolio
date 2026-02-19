import Image from "next/image";

// Data
const experiences = [
  {
    role: "Intern - Software Engineer",
    company: "Sri Lanka Telecom PLC",
    location: "Head Quarters, Colombo, Sri Lanka",
    period: "2024 - 2025",
    logo: "/images/sltlogo.png",
    description: [
      "Developed and deployed full-stack enterprise applications using React, Spring Boot, and MySQL, including an Intern Management Portal and an Incident Management System.",
      "Implemented secure Role-Based Access Control (RBAC) and integrated OAuth authentication using Azure AD and Google for multi-role access.",
      "Contributed to backend development of the Product Information Hub while collaborating with QA teams to ensure system reliability.",
      "Deployed applications on Microsoft Azure with CI/CD pipelines and SonarQube-based quality analysis.",
    ],
  },
  {
    role: "Production Supervisor",
    company: "Royal Ceramic Lanka PLC (ROCELL)",
    location: "Eheliyagoda, Sri Lanka",
    period: "2021 - 2022",
    logo: "/images/rocell.jpg",
    description: [
      "Supervised daily production operations, ensuring safety compliance, quality standards, and operational efficiency.",
      "Monitored machine performance, conducted troubleshooting, and resolved production issues to minimize downtime.",
      "Led and trained production staff while driving continuous process improvements and cost reduction initiatives.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Experience
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Professional Journey
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          A timeline of roles that shaped my technical expertise and professional
          discipline - from manufacturing leadership to enterprise software
          engineering.
        </p>
      </header>

      <section className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-200 md:flex-row md:gap-6"
          >
            {/* Left section */}
            <div className="w-full md:w-1/3 space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="rounded-md bg-white p-1"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {exp.period}
                  </p>
                  <p className="mt-1 font-medium text-slate-100">
                    {exp.company}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400">{exp.location}</p>
            </div>

            {/* Right section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-sm font-semibold text-slate-50">
                {exp.role}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-300">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}