const phases = [
  { num: 1, title: "Core Platform", desc: "Stable feedback engine with teacher dashboard and analytics" },
  { num: 2, title: "LMS Integration", desc: "Direct connections to Canvas, Moodle, and Google Classroom" },
  { num: 3, title: "Multi-Language Support", desc: "Feedback generation in 20+ languages for global classrooms" },
  { num: 4, title: "Scalability", desc: "Enterprise deployment for entire school districts" },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-16">
          FUTURE SCOPE
        </h2>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20" />
          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={phase.num} className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <h3 className="text-lg font-bold">Phase {phase.num}: {phase.title}</h3>
                  <p className="text-primary-foreground/60 mt-1">{phase.desc}</p>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-lg bg-primary-foreground flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-primary">{phase.num}</span>
                </div>
                <div className="flex-1 md:hidden">
                  <h3 className="text-lg font-bold">Phase {phase.num}: {phase.title}</h3>
                  <p className="text-primary-foreground/60 mt-1">{phase.desc}</p>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
