import React from "react";
import { ThemeToggle } from "./theme-toggle";

const MainNav = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className="flex h-16 items-center justify-end px-4">
      <ThemeToggle />
    </nav>
  );
};

export default MainNav;
