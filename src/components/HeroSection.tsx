import inkSplatter from "@/assets/ink-splatter-hero.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${inkSplatter})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tighter animate-fade-up">
          TEACHER<br />COPILOT
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-ink-light font-medium animate-fade-up animation-delay-200">
          Team LOOPERS
        </p>
        <p className="mt-2 text-muted-foreground animate-fade-up animation-delay-400">
          Harish Kumar 25BAI11056 · Manthan Awaya 25BAI11050
        </p>
        <div className="mt-10 flex gap-4 justify-center animate-fade-up animation-delay-600">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/dashboard")}>
            Try Dashboard
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => {
            document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
