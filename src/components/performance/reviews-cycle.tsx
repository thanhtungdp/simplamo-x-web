import React from 'react';
import { Button } from "@/components/ui/button";

export function ReviewsCycle() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamline your review cycles
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Make performance reviews more meaningful and less time-consuming with our automated workflow engine.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Customizable review templates",
                "Automated review cycles",
                "360° feedback collection",
                "Performance calibration tools",
                "Review analytics and insights"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80"
              alt="Review Process"
              className="relative rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}