import React from "react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./navigation/logo";
import { DesktopMenu } from "./navigation/desktop-menu";
import { MobileMenu } from "./navigation/mobile-menu";

export function NavigationHeader() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopMenu />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}