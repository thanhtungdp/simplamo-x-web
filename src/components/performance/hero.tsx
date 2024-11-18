import React from 'react';
import { Button } from "@/components/ui/button";

export function PerformanceHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transform performance management
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Drive employee growth with continuous feedback, goal tracking, and meaningful performance reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=2850&q=80" 
              alt="Performance Dashboard" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}