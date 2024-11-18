import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BarChart, Heart, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Goal Alignment",
    description: "Align individual goals with company objectives through OKRs and continuous tracking."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Foster collaboration with integrated tools for feedback, recognition, and communication."
  },
  {
    icon: Heart,
    title: "Employee Engagement",
    description: "Measure and improve engagement with pulse surveys and actionable insights."
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Make data-driven decisions with comprehensive workforce analytics."
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Leverage AI to identify trends and provide personalized recommendations."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security with SSO, encryption, and compliance features."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Everything you need to excel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools designed to enhance performance and engagement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-none">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}