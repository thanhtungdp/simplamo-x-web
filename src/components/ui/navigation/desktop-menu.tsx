import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from './list-item';
import { ChevronDown, LayoutGrid, Users, Wrench, Target, LineChart, Calendar, Brain, Bot, ClipboardList } from 'lucide-react';

export function DesktopMenu() {
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group">
              Products
              <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="relative w-[850px] p-6">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-popover border-t border-l border-border" />
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-muted-foreground">Concept</h4>
                    <ul className="space-y-4">
                      <ListItem
                        href="#"
                        icon={LayoutGrid}
                        title="Simplamo Process"
                        description="Win win standard process"
                      />
                      <ListItem
                        href="#"
                        icon={Users}
                        title="Simplamo Partner"
                        description="Help partner win"
                      />
                      <ListItem
                        href="#"
                        icon={Wrench}
                        title="Simplamo Implementation"
                        description="Hire professional consultants services"
                      />
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-muted-foreground">Business Execution</h4>
                    <ul className="space-y-4">
                      <ListItem
                        href="#"
                        icon={ClipboardList}
                        title="Plan"
                        description="Organization chart, vision, whiteboard"
                      />
                      <ListItem
                        href="#"
                        icon={Target}
                        title="Execute"
                        description="OKRs, scoreboard, meetings, I.D.S, process"
                      />
                      <ListItem
                        href="#"
                        icon={LineChart}
                        title="Analytics & Adapt"
                        description="Report, dashboard, headlines, realtime timeline"
                      />
                      <ListItem
                        href="#"
                        icon={Calendar}
                        title="Performance"
                        description="1:1, annual review"
                      />
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-muted-foreground">Simplamo AI</h4>
                    <ul className="space-y-4">
                      <ListItem
                        href="#"
                        icon={Brain}
                        title="AI In Planning"
                        description="Smart planning assistance"
                      />
                      <ListItem
                        href="#"
                        icon={Bot}
                        title="AI for Chat"
                        description="Intelligent conversation support"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group">
              Solutions
              <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="relative w-[850px] p-6">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-popover border-t border-l border-border" />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group">
              Resources
              <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="relative w-[850px] p-6">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-popover border-t border-l border-border" />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}