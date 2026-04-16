// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const services = [
    {
      title: "Wood Decks",
      description:
        "Classic cedar, pressure-treated, or exotic hardwoods. Natural beauty that lasts.",
      badge: "Wood",
      bgClass: "bg-primary",
      buttonVariant: "secondary" as const,
    },
    {
      title: "Composite Decks",
      description:
        "Low-maintenance, eco-friendly. No staining, no sealing, just beautiful outdoor living.",
      badge: "Comp",
      bgClass: "bg-dark text-white border border-gold/30",
      buttonVariant: "default" as const,
    },
    {
      title: "Deck Repair",
      description:
        "Structural repairs, board replacement, and restoration. Bring your old deck back to life.",
      badge: "Fix",
      bgClass: "bg-beige",
      buttonVariant: "secondary" as const,
    },
    {
      title: "Porches",
      description:
        "Screened, three-season, or open porches. Extend your living space outdoors.",
      badge: "Porch",
      bgClass: "",
      buttonVariant: "secondary" as const,
    },
    {
      title: "Railings",
      description:
        "Custom railings, glass panels, cable rail, and more. Safety meets style.",
      badge: "Rail",
      bgClass: "bg-dark text-white border border-gold/30",
      buttonVariant: "default" as const,
    },
  ];

  return (
    <div className="bg-[url('/background1.png')] bg-cover bg-fixed text-white font-sans scroll-smooth min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full px-6 py-3 z-50 backdrop-blur-md bg-dark/50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
          <Button
            onClick={openSidebar}
            variant="ghost"
            className="flex items-center gap-2 text-white hover:text-white/80"
          >
            <Menu size={16} />
            <span>MENU</span>
          </Button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/313-logo.png"
              alt="Derbyville Decks Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <ul className="hidden md:flex gap-6 text-sm">
            <li>
              <a href="#services" className="hover:opacity-80">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#about" className="hover:opacity-80">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:opacity-80">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#career" className="hover:opacity-80">
                CAREER
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-primary text-background transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-6">
          <Image
            src="/313-logo.png"
            alt="313 Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <Button onClick={closeSidebar} variant="ghost" size="icon">
            <X size={24} />
          </Button>
        </div>
        <ul className="px-6 space-y-4 text-lg">
          <li>
            <a href="#services" onClick={closeSidebar}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              About Us
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#career" onClick={closeSidebar}>
              Career
            </a>
          </li>
        </ul>
      </aside>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 text-center">
        <div className="space-y-16 z-10 relative">
          <h1 className="font-serif text-5xl md:text-8xl leading-tight">
            WE BUILD DECKS
          </h1>
          <ArrowDown
            className="arrow-animate mx-auto text-white opacity-70"
            size={32}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center reveal">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <h2 className="font-serif text-4xl">
            150+ decks built in 12 months.
          </h2>
          <Image
            src="/line.svg"
            alt="Divider"
            width={80}
            height={24}
            className="h-6 hidden md:block"
          />
          <p className="text-lg opacity-70 max-w-xl">
            We successfully built 150+ custom decks in 2025, and we&apos;re just
            getting started.
          </p>
        </div>
      </section>

      {/* Services - 5 Cards */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20 space-y-12"
      >
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl">Our Deck Services</h2>
          <p className="text-lg opacity-70 mt-4">
            Custom decks, porches, and outdoor living spaces
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:scale-[1.02] flex flex-col h-full`}
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow relative">
                <p className="text-sm opacity-90 flex-grow">
                  {service.description}
                </p>
                <Button
                  variant="secondary"
                  className="w-full relative z-10 mt-auto"
                >
                  {service.title === "Deck Repair"
                    ? "GET REPAIR"
                    : "EXPLORE MORE"}{" "}
                  →
                </Button>
                <p className="absolute text-[5rem] font-serif -bottom-12 right-2 opacity-10 select-none pointer-events-none z-0">
                  {service.badge}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              About Derbyville Decks Decks
            </h2>
            <p className="text-lg opacity-80 mb-4">
              We&apos;re a family-owned deck building company based in Detroit,
              MI. With over a decade of experience, we&apos;ve transformed
              hundreds of backyards into beautiful outdoor living spaces.
            </p>
            <p className="text-lg opacity-80">
              Our commitment to quality craftsmanship, premium materials, and
              customer satisfaction sets us apart. Every deck we build comes
              with a lifetime warranty on workmanship.
            </p>
          </div>
          <Card className="bg-primary">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold">
                Our Promise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  ✓ Free detailed estimates
                </li>
                <li className="flex items-center gap-2">
                  ✓ Fully licensed & insured
                </li>
                <li className="flex items-center gap-2">
                  ✓ Lifetime workmanship warranty
                </li>
                <li className="flex items-center gap-2">
                  ✓ 0% financing available
                </li>
                <li className="flex items-center gap-2">
                  ✓ Premium materials only
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 reveal">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg opacity-70">
            Take a look at some of our favorite builds
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card
              key={i}
              className="aspect-square bg-primary flex items-center justify-center hover:border-gold transition-colors hover:bg-dark/60"
            >
              <p className="text-sm opacity-60">Deck Project {i}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="max-w-7xl mx-auto px-6 py-20">
        <Card className="text-center p-8 md:p-12  text-background">
          <CardHeader>
            <CardTitle className="font-serif text-4xl md:text-5xl">
              Get a Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg opacity-80 max-w-2xl mx-auto ">
              Ready to transform your backyard? Get a free quote today and
              discover why homeowners trust Derbyville Decks for quality,
              craftsmanship, and exceptional service.
            </p>
            <Button className=" hover:/90 font-semibold bg-background text-foreground">
              Get Quote
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center pt-6 flex-center border-t border-white/20">
        <p className="mb-4 text-sm flex-center">
          &copy; 2025 - Derbyville Decks Decks. All rights reserved.
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 mx-2"
          >
            Privacy Policy{" "}
          </Link>
          and
          <Link
            href="/terms-of-service"
            className="underline underline-offset-2 mx-2"
          >
            Terms of Service
          </Link>
        </p>
        {/* <Image
          src="/313-logo.png"
          alt="313 Logo"
          width={48}
          height={48}
          className="h-12 w-auto mx-auto"
        /> */}
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=Instrument+Serif:ital@0;1&display=swap");

        * {
          font-family: "Instrument Sans", sans-serif;
        }

        .font-serif {
          font-family: "Instrument Serif", serif;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease-out,
            transform 0.8s ease-out;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .arrow-animate {
          animation: upAndDown 0.8s ease-in-out infinite alternate;
        }

        @keyframes upAndDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
