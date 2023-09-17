import React from "react";
import { ThemeToggle } from "./theme-toggle";

const MainNav = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav>
      <ThemeToggle />
    </nav>
  );
};

export default MainNav;
