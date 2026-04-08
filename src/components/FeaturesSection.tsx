import { FileText, Sparkles, AlertTriangle, LayoutDashboard } from "lucide-react";

const features = [
  {
    num: "01",
    icon: FileText,
    title: "Student Answer Input",
    desc: "Seamlessly accept responses in various formats—text, code, or structured answers. The system handles diverse input types with intelligent parsing.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "AI Feedback Generation",
    desc: "Generate contextual, constructive feedback using advanced language models. Suggestions adapt to subject matter and student level.",
  },
  {
    num: "03",
    icon: AlertTriangle,
    title: "Common Mistake Detection",
    desc: "Identify recurring errors across the class and surface them for educator attention, enabling targeted intervention strategies.",
  },
  {
    num: "04",
    icon: LayoutDashboard,
    title: "Teacher Dashboard",
    desc: "Centralized view of all assignments, feedback status, and student progress. Make informed decisions with real-time insights.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter text-center mb-16">
          CORE FEATURES
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.num} className="flex gap-6 p-6 rounded-xl hover:bg-accent/50 transition-colors">
              <span className="text-5xl font-black text-muted-foreground/30 shrink-0">{f.num}</span>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <f.icon className="w-5 h-5 text-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
