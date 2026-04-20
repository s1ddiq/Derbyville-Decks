// components/SiteHeader.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SiteHeaderProps {
  showPrivacyLink?: boolean;
  showTermsLink?: boolean;
}

function SiteHeader({
  showPrivacyLink = true,
  showTermsLink = true,
}: SiteHeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks = [
    { href: "/#services", label: "SERVICES" },
    { href: "/#about", label: "ABOUT US" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#get-a-quote", label: "GET A QUOTE" },
    ...(showPrivacyLink ? [{ href: "/privacy-policy", label: "PRIVACY" }] : []),
    ...(showTermsLink ? [{ href: "/terms-of-service", label: "TERMS" }] : []),
  ];

  const sidebarLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About Us" },
    { href: "/#projects", label: "Projects" },
    { href: "/#get-a-quote", label: "Get a Quote" },
    ...(showPrivacyLink
      ? [{ href: "/privacy-policy", label: "Privacy Policy" }]
      : []),
    ...(showTermsLink
      ? [{ href: "/terms-of-service", label: "Terms of Service" }]
      : []),
  ];

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 w-full px-6 py-3 z-50 bg-white/5 backdrop-blur-sm rounded-lg p-6 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
          <Link href="/">
            {/* Optional logo placeholder */}
            <Image
              src="/gold-rec.svg"
              width={180}
              height={128}
              alt="Derbyville Decks Logo"
            />
          </Link>

          <ul className="hidden md:flex gap-6 text-xl flex-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.label}
                  className={`hover:text-primary tracking-tight ${
                    link.href === "/privacy-policy" ||
                    link.href === "/terms-of-service"
                      ? "text-white/70"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button
              onClick={openSidebar}
              variant="ghost"
              className="flex items-center gap-2 text-xl text-white hover:text-white/80"
            >
              <Menu size={24} />
              <span>MENU</span>
            </Button>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full w-72 bg-white/5 backdrop-blur-sm rounded-lg p-6 border-r border-white/10 transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-6">
          <Button onClick={closeSidebar} variant="ghost" size="icon">
            <X size={24} />
          </Button>
        </div>
        <ul className="px-6 space-y-4 text-lg">
          {sidebarLinks.map((link) => (
            <li key={link.href} className="hover:text-primary">
              <Link href={link.href} onClick={closeSidebar}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default SiteHeader;
