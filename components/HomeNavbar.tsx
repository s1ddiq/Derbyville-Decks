import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const HomeNavbar = () => {
  return (
    <header className="px-6 py-4 w-full border-b-2 sticky top-0 z-50 bg-background">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo - left */}
        <Link href="/" className="text-2xl font-bold shrink-0 w-1/3">
          Derbyville Decks
        </Link>

        {/* Navigation - center (flex-grow pushes it to center) */}
        <nav
          aria-label="Main navigation"
          className="flex-1 flex justify-center w-1/3"
        >
          <ul className="flex gap-8">
            <li>
              <Link href="#" className="transition-colors font-medium">
                Decks
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors font-medium">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons - right */}
        <menu className="flex gap-3 shrink-0 w-1/3 justify-end">
          <li>
            <Button variant="outline">Call Now</Button>
          </li>
          <li>
            <Button>Free Quote</Button>
          </li>
        </menu>
      </div>
    </header>
  );
};

export default HomeNavbar;
