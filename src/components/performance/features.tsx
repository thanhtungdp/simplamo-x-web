import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, MessageSquare, BarChart3, ClipboardCheck, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Goal Management",
    description: "Set, track, and align goals across your organization. Enable employees to create and manage OKRs that drive business success."
  },
  {
    icon: MessageSquare,
    title: "Continuous Feedback",
    description: "Foster a culture of ongoing feedback with real-time recognition, peer feedback, and structured 1:1 meetings."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Get insights into team performance with comprehensive analytics and reporting tools."
  },
  {
    icon: ClipboardCheck,
    title: "Review Cycles",
    description: "Streamline performance reviews with customizable templates, automated workflows, and 360° feedback."
  },
  {
    icon: Users,
    title: "Development Plans",
    description: "Create personalized growth plans that align individual aspirations with organizational needs."
  },
  {
    icon: Trophy,
    title: "Recognition & Rewards",
    description: "Celebrate achievements and reinforce positive behaviors with built-in recognition tools."
  }
];

export function PerformanceFeatures() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need for modern performance management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you build a high-performance culture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}