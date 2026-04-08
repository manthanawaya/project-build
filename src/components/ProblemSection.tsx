import { Clock, BarChart3, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time Drain",
    description: "Hours spent on repetitive feedback cycles leave less time for lesson planning and student interaction.",
  },
  {
    icon: BarChart3,
    title: "Consistency Challenge",
    description: "Maintaining consistent quality and tone across hundreds of student responses becomes increasingly difficult.",
  },
  {
    icon: Users,
    title: "Personalization Gap",
    description: "Despite best intentions, truly personalized feedback for each student remains aspirational rather than achievable.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter text-center mb-8">
          THE PROBLEM
        </h2>
        <p className="text-center text-ink-light text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          Educators spend countless hours providing feedback on student work. For a class of 30 students, 
          grading a single assignment can take 3-5 hours. Multiply this across multiple classes, assignments, 
          and assessments, and teachers quickly find themselves overwhelmed.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border border-border rounded-xl p-8 bg-card hover:shadow-lg transition-shadow"
            >
              <problem.icon className="w-10 h-10 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
