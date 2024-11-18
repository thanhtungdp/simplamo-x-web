import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, BarChart, Heart } from 'lucide-react';

const features = [
  {
    title: "Performance Management",
    description: "Set and track goals, conduct reviews, and provide continuous feedback to drive employee growth.",
    icon: Target
  },
  {
    title: "Employee Engagement",
    description: "Measure and improve engagement with surveys, recognition, and actionable insights.",
    icon: Heart
  },
  {
    title: "Team Development",
    description: "Build stronger teams with 1:1s, career planning, and development tracking.",
    icon: Users
  },
  {
    title: "People Analytics",
    description: "Make data-driven decisions with comprehensive workforce analytics and reporting.",
    icon: BarChart
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build high-performing teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform helps you manage the entire employee lifecycle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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