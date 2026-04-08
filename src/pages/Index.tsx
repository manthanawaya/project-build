import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import RoadmapSection from "@/components/RoadmapSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-foreground">TEACHER COPILOT</span>
          <Button size="sm" onClick={() => navigate("/dashboard")}>
            Open Dashboard
          </Button>
        </div>
      </nav>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <RoadmapSection />

      <footer className="py-12 px-6 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 Teacher Copilot · Team LOOPERS · Built with ❤️ for educators
        </p>
      </footer>
    </div>
  );
};

export default Index;
