const timelineItems = [
    {
      year: "2000",
      title: "Born",
      description: "Born on July 26, 2000 in Sri Lanka.",
    },
    {
      year: "2021",
      title: "Production Supervisor",
      description:
        "Worked as a Production Supervisor at Royal Ceramic Lanka PLC, gaining experience in leadership, operations, and industrial workflows.",
    },
    {
      year: "2022",
      title: "University Studies",
      description:
        "Started university studies in Information Technology and software-related disciplines, focusing on programming and modern web technologies.",
    },
    {
      year: "2024",
      title: "Software Engineering Intern",
      description:
        "Worked as a Software Engineering Intern at Sri Lanka Telecom PLC, contributing to real-world software projects and strengthening full-stack development skills.",
    },
    {
      year: "Future",
      title: "Career Goal",
      description:
        "To become an AI and Full-Stack Engineer building scalable, intelligent systems that create meaningful impact.",
    },
  ];
  
  export default function AboutTimeline() {
    return (
      <section className="space-y-10">
        <h2 className="text-xl font-semibold text-slate-50 text-center">
          My Journey
        </h2>
  
        <div className="relative border-l border-slate-800 pl-6 space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-sky-400" />
  
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <span className="text-sm text-sky-400">{item.year}</span>
                <h3 className="text-slate-50 font-semibold">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }