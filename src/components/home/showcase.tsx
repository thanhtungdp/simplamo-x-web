import React from 'react';
import { Button } from "@/components/ui/button";

export function Showcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Powerful tools for modern teams
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Drive engagement and performance with our comprehensive suite of HR tools designed for today's workplace.
            </p>
            <div className="space-y-6 mb-8">
              {[
                "Real-time performance tracking",
                "360° feedback and reviews",
                "Employee engagement surveys",
                "Goal management and OKRs",
                "Career development planning"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2850&q=80"
              alt="Platform Features"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}