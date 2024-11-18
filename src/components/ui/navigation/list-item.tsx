import React from 'react';
import { cn } from "@/lib/utils";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, description, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
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
        </a>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";