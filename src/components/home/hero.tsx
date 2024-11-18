import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-8">
            <span className="text-sm font-medium">New Feature</span>
            <span className="text-sm text-muted-foreground">AI-Powered Performance Insights →</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            Transform Your Workplace Culture
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empower your teams with modern performance management and engagement tools designed for today's workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-32 z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80" 
              alt="Platform Dashboard" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}