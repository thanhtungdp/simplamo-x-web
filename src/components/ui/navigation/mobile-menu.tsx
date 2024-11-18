import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, LayoutGrid, Users, Wrench, Target, LineChart, Calendar, Brain, Bot, ClipboardList } from 'lucide-react';

interface MobileNavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const MobileNavItem = ({ icon: Icon, title, description }: MobileNavItemProps) => (
  <div className="flex items-start gap-3 p-3 hover:bg-accent rounded-md">
    <div className="rounded-[4px] bg-background p-1.5 shadow-sm border border-border/50">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <div className="space-y-1">
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

interface MobileMenuSectionProps {
  title: string;
  items: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
}

const MobileMenuSection = ({ title, items }: MobileMenuSectionProps) => (
  <div className="space-y-2">
    <h4 className="text-sm font-medium text-muted-foreground px-3">{title}</h4>
    {items.map((item, index) => (
      <MobileNavItem
        key={index}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
);

export function MobileMenu() {
  const [openProducts, setOpenProducts] = React.useState(false);
  const [openSolutions, setOpenSolutions] = React.useState(false);
  const [openResources, setOpenResources] = React.useState(false);

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[450px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-8 mt-6">
            <Collapsible open={openProducts} onOpenChange={setOpenProducts}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                <span className="text-lg font-semibold">Products</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openProducts ? "rotate-180" : ""
                )} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6 mt-4">
                <MobileMenuSection
                  title="Concept"
                  items={[
                    {
                      icon: LayoutGrid,
                      title: "Simplamo Process",
                      description: "Win win standard process"
                    },
                    {
                      icon: Users,
                      title: "Simplamo Partner",
                      description: "Help partner win"
                    },
                    {
                      icon: Wrench,
                      title: "Simplamo Implementation",
                      description: "Hire professional consultants services"
                    }
                  ]}
                />
                <MobileMenuSection
                  title="Business Execution"
                  items={[
                    {
                      icon: ClipboardList,
                      title: "Plan",
                      description: "Organization chart, vision, whiteboard"
                    },
                    {
                      icon: Target,
                      title: "Execute",
                      description: "OKRs, scoreboard, meetings, I.D.S, process"
                    },
                    {
                      icon: LineChart,
                      title: "Analytics & Adapt",
                      description: "Report, dashboard, headlines, realtime timeline"
                    },
                    {
                      icon: Calendar,
                      title: "Performance",
                      description: "1:1, annual review"
                    }
                  ]}
                />
                <MobileMenuSection
                  title="Simplamo AI"
                  items={[
                    {
                      icon: Brain,
                      title: "AI In Planning",
                      description: "Smart planning assistance"
                    },
                    {
                      icon: Bot,
                      title: "AI for Chat",
                      description: "Intelligent conversation support"
                    }
                  ]}
                />
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSolutions} onOpenChange={setOpenSolutions}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                <span className="text-lg font-semibold">Solutions</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openSolutions ? "rotate-180" : ""
                )} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                {/* Add Solutions content here */}
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openResources} onOpenChange={setOpenResources}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                <span className="text-lg font-semibold">Resources</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openResources ? "rotate-180" : ""
                )} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                {/* Add Resources content here */}
              </CollapsibleContent>
            </Collapsible>

            <div className="flex flex-col gap-4 mt-4">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}