import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "15",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 25 employees",
      "Performance reviews",
      "1:1 meetings",
      "Goal tracking",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "29",
    description: "Ideal for growing companies",
    popular: true,
    features: [
      "Up to 100 employees",
      "Everything in Starter",
      "Engagement surveys",
      "Career development",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited employees",
      "Everything in Professional",
      "Custom integrations",
      "Dedicated success manager",
      "SSO & advanced security",
      "Custom reporting",
      "24/7 phone support",
      "SLA guarantees"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border bg-card p-8 ${
                tier.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-muted-foreground mt-2">{tier.description}</p>
                <div className="mt-4 flex items-baseline">
                  {tier.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground ml-2">/ user / month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">Custom</span>
                  )}
                </div>
              </div>

              <Button 
                className="w-full mb-8" 
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>

              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include unlimited updates and basic support
          </p>
          <Button variant="link" className="text-primary">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
}