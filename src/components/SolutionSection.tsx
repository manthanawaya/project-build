import { Brain, MessageSquare, CheckCircle, Send } from "lucide-react";

const steps = [
  { icon: Brain, title: "Smart Analysis", desc: "AI processes student answers and identifies key themes" },
  { icon: MessageSquare, title: "Feedback Generation", desc: "Creates personalized feedback suggestions for review" },
  { icon: CheckCircle, title: "Teacher Review", desc: "Educator approves, edits, or customizes feedback" },
  { icon: Send, title: "Student Delivery", desc: "Quality feedback reaches students faster" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-8">
          THE SOLUTION
        </h2>
        <p className="text-center text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          Teacher Copilot is an intelligent feedback assistant that works alongside educators, not instead of them. 
          It analyzes student responses, identifies patterns, and generates thoughtful feedback suggestions—always 
          keeping the teacher in control.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
