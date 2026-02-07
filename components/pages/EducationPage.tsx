// const educationItems = [
//   {
//     title: "Bachelor of Science in Computer Science",
//     place: "Demo University",
//     period: "2019 — 2023",
//     details:
//       "Coursework in algorithms, web development, databases, and software engineering.",
//   },
//   {
//     title: "Online Certifications",
//     place: "Various platforms",
//     period: "Ongoing",
//     details:
//       "Completed multiple online courses related to modern web development and UI/UX.",
//   },
// ];

// export default function EducationPage() {
//   return (
//     <main className="mx-auto max-w-5xl px-6 py-16">
//       <header className="mb-8 space-y-3">
//         <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
//           Education
//         </p>
//         <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
//           Education
//         </h1>
//         <p className="max-w-3xl text-sm text-slate-300 md:text-base">
//           A brief overview of my formal education and learning background.
//         </p>
//       </header>

//       <section className="space-y-4">
//         {educationItems.map((item) => (
//           <article
//             key={item.title}
//             className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200"
//           >
//             <div className="flex flex-wrap items-baseline justify-between gap-2">
//               <h2 className="text-sm font-semibold text-slate-50">
//                 {item.title}
//               </h2>
//               <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
//                 {item.period}
//               </span>
//             </div>
//             <p className="mt-1 text-xs text-slate-400">{item.place}</p>
//             <p className="mt-3 text-sm text-slate-300">{item.details}</p>
//           </article>
//         ))}
//       </section>
//     </main>
//   );
// }


import EducationItem from "../EducationItem";
import {
  degreeItems,
  schoolItems,
  certificationItems,
} from "../EducationData";

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Education
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Education & Learning
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 md:text-base">
          A summary of my academic background, formal education, and professional
          certifications.
        </p>
      </header>

      {/* Degree */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">
          University Education
        </h2>
        {degreeItems.map((item) => (
          <EducationItem key={item.title} {...item} />
        ))}
      </section>

      {/* School */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">
          Secondary Education
        </h2>
        {schoolItems.map((item) => (
          <EducationItem key={item.title} {...item} />
        ))}
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">
          Certifications & Training
        </h2>
        {certificationItems.map((item) => (
          <EducationItem key={item.title} {...item} />
        ))}
      </section>
    </main>
  );
}
