import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import NavbarClient from "./NavbarClient";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              UICT Blog
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <NavbarClient key={link.href} {...link} />
            ))}
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <NavbarClient isMobile={true} links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
