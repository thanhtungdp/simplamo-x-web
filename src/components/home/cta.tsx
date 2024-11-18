import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to transform your workplace?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies using PeopleFirst to build stronger teams and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}