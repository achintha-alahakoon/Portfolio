import AboutIntro from "../AboutIntro"
import AboutDetails from "../AboutDetails";
import AboutTimeline from "../AboutTimeline";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 space-y-20">
      <AboutIntro />
      <AboutDetails />
      <AboutTimeline />
    </main>
  );
}