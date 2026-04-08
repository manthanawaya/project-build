import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, FileText, AlertTriangle, Users, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sampleFeedback = [
  {
    student: "Alice M.",
    answer: "Photosynthesis is when plants use sunlight to make food from water and carbon dioxide.",
    score: 85,
    feedback: "Good understanding of the basic concept! To improve, mention the role of chlorophyll and the products (glucose and oxygen). Consider explaining the light-dependent and light-independent reactions.",
    status: "reviewed" as const,
  },
  {
    student: "Bob K.",
    answer: "Plants eat sunlight and grow.",
    score: 40,
    feedback: "This shows a basic awareness but needs significant development. Plants don't 'eat' sunlight—they convert light energy into chemical energy. Review the photosynthesis equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
    status: "pending" as const,
  },
  {
    student: "Carol T.",
    answer: "Photosynthesis is a process used by plants to convert light energy into chemical energy stored in glucose. It occurs in chloroplasts using chlorophyll, combining CO2 and H2O.",
    score: 95,
    feedback: "Excellent and comprehensive answer! You've correctly identified the location, pigment, reactants, and product. For a perfect score, mention that oxygen is released as a byproduct.",
    status: "approved" as const,
  },
];

const commonMistakes = [
  { mistake: "Confusing photosynthesis with respiration", count: 8 },
  { mistake: "Missing the role of chlorophyll", count: 12 },
  { mistake: "Incomplete chemical equation", count: 6 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [studentAnswer, setStudentAnswer] = useState("");
  const [generatedFeedback, setGeneratedFeedback] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!studentAnswer.trim()) return;
    setIsGenerating(true);
    setGeneratedFeedback("");
    
    const feedback = "Your answer demonstrates a foundational understanding of the topic. Here are some specific points:\n\n✅ Strengths: You've identified the core concept correctly.\n\n📝 Areas for improvement: Consider adding more specific terminology and examples to strengthen your response.\n\n💡 Suggestion: Review the key vocabulary and try to incorporate at least 3 technical terms in your answer.";
    
    let i = 0;
    const interval = setInterval(() => {
      setGeneratedFeedback(feedback.slice(0, i + 1));
      i++;
      if (i >= feedback.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 15);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <span className="text-xl font-black tracking-tighter text-foreground">DASHBOARD</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline">Biology 101</Badge>
            <Badge>30 Students</Badge>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Students", value: "30", icon: Users },
            { label: "Pending Review", value: "12", icon: Clock },
            { label: "Reviewed", value: "15", icon: CheckCircle },
            { label: "Avg Score", value: "78%", icon: Sparkles },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feedback Generator */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> AI Feedback Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste a student's answer here..."
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <Button onClick={handleGenerate} disabled={isGenerating || !studentAnswer.trim()}>
                  {isGenerating ? "Generating..." : "Generate Feedback"}
                </Button>
                {generatedFeedback && (
                  <div className="p-4 rounded-lg bg-accent border border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Generated Feedback:</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{generatedFeedback}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Student Responses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Student Responses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleFeedback.map((item) => (
                  <div key={item.student} className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{item.student}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">{item.score}%</span>
                        <Badge variant={item.status === "approved" ? "default" : item.status === "reviewed" ? "secondary" : "outline"}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 italic">"{item.answer}"</p>
                    <p className="text-sm text-foreground bg-accent/50 p-3 rounded">{item.feedback}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {commonMistakes.map((m) => (
                  <div key={m.mistake} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <span className="text-sm text-foreground">{m.mistake}</span>
                    <Badge variant="outline">{m.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  📊 Export Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📧 Send All Feedback
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📋 View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
