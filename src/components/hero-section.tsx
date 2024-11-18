import React from 'react';
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build stronger teams with continuous performance management
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The complete platform for modern HR teams to drive engagement, performance, and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Platform
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80" 
          alt="Team collaboration" 
          className="w-full h-[600px] object-cover"
        />
      </div>
    </section>
  );
}