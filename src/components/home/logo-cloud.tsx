import React from 'react';
import { Building2, Briefcase, Building, Landmark, Library, Factory } from 'lucide-react';

const logos = [
  { icon: Building2, name: "TechCorp" },
  { icon: Briefcase, name: "InnovateCo" },
  { icon: Building, name: "FutureInc" },
  { icon: Landmark, name: "GlobalTech" },
  { icon: Library, name: "DataFlow" },
  { icon: Factory, name: "SmartSys" }
];

export function LogoCloud() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <logo.icon className="h-6 w-6" />
              <span className="font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}