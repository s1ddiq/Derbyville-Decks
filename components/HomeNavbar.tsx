"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 sm:px-6 py-3 sm:py-4 w-full border-b-2 sticky top-0 z-50 bg-background">
      <div className="mx-auto flex items-center justify-between gap-4">
        {/* Logo - left */}
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-bold shrink-0"
        >
          Derbyville Decks
        </Link>

        {/* Desktop Navigation - center */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex flex-1 justify-center"
        >
          <ul className="flex gap-6 lg:gap-8">
            <li>
              <Link
                href="#"
                className="transition-colors font-medium text-sm lg:text-base"
              >
                Decks
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors font-medium text-sm lg:text-base"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors font-medium text-sm lg:text-base"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors font-medium text-sm lg:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons - right */}
        <menu className="hidden sm:flex gap-2 lg:gap-3 shrink-0 items-center">
          <li>
            <Button
              variant="outline"
              className="text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-1 sm:py-2"
            >
              Call Now
            </Button>
          </li>
          <li>
            <Button className="text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-1 sm:py-2">
              Free Quote
            </Button>
          </li>
        </menu>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b-2 shadow-lg z-50">
          <nav className="flex flex-col p-4 sm:p-6">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Decks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 mt-6 pt-4 border-t">
              <Button variant="outline" className="w-full text-sm">
                Call Now
              </Button>
              <Button className="w-full text-sm">Free Quote</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HomeNavbar;
