import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-none shadow-xl">
          <CardContent className="p-12">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            <blockquote className="text-2xl font-medium mb-8">
              "PeopleFirst has transformed how we manage performance across our organization. The platform has made it easier to provide continuous feedback and track goals, resulting in more engaged employees and better outcomes."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                alt="Sarah Johnson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-muted-foreground">Chief People Officer, TechCorp</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}