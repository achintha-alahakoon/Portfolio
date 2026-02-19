import {
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const services = [
  {
    title: "Website Development",
    description:
      "Crafting captivating web solutions. From sleek corporate websites to dynamic online experiences, we design with a focus on detail and business goals, ensuring stunning visuals and seamless user engagement.",
    icon: SiGit,
  },
  {
    title: "Full Stack Applications",
    description:
      "Building scalable and secure full-stack systems using modern frameworks, clean architecture, and cloud-ready deployments tailored to real-world business needs.",
    icon: SiGithub,
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Designing AI-driven solutions for automation, prediction, and fraud detection using machine learning and data-driven approaches.",
    icon: SiPostman,
  },
];

export default function ServicesSection() {
  return (
    <section className="mt-24 grid gap-12 md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-white leading-tight">
          Services we <br />
          <span className="text-emerald-400">Provide</span>
        </h2>

        <p className="max-w-md text-sm text-slate-400">
          We craft innovative and intuitive solutions that not only meet but
          exceed business goals, seamlessly blending creativity and
          functionality to drive success.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/70 p-6 transition hover:border-emerald-400"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Icon size={20} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}