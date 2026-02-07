export default function AboutDetails() {
    return (
        <section className="grid gap-8 md:grid-cols-2">
            {/* Background */}
            <div className="space-y-4 text-slate-300">
                <h2 className="text-xl font-semibold text-slate-50">
                    Who I am
                </h2>
                <p className="mx-auto max-w-3xl text-slate-300">
                    I’m someone who enjoys turning ideas into real, working software. My main
                    interests are in{" "}
                    <span className="text-sky-300 font-medium">AI-driven systems</span> and{" "}
                    <span className="text-emerald-300 font-medium">full-stack web development</span>,
                    where I get to combine logic, creativity, and problem-solving in one
                    place.
                </p>
                <p className="mx-auto max-w-3xl text-slate-400">
                    I enjoy working across the full development lifecycle - from designing
                    user-friendly interfaces to developing efficient backend systems and
                    experimenting with AI-driven approaches to solve real-world problems.
                </p>
            </div>

            {/* Personal Info */}
            <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold text-slate-50">Personal Details</h3>
                <ul className="mt-4 space-y-2 text-slate-200">
                    <li className="flex justify-between">
                        <span className="text-slate-400">Name</span>
                        <span>Achintha Isuru Alahakoon</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-slate-400">Date of Birth</span>
                        <span>July 26</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-slate-400">Location</span>
                        <span>Sri Lanka</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-slate-400">Gender</span>
                        <span>Male</span>
                    </li>
                </ul>
            </aside>
        </section>
    );
}