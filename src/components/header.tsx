import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <nav className="flex h-16 items-center justify-end px-4">
      <ThemeToggle />
    </nav>
  );
};

export default Header;
