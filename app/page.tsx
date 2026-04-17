// app/page.tsx
"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Reusable reveal component
function RevealOnScroll({ children, delay = 0, direction = "up" }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const services = [
    {
      title: "Wood Construction",
      description:
        "A true American classic. Traditional pressure-treated or exotic hardwoods. Natural beauty that lasts.",
      badge: "Wood",
    },
    {
      title: "Composite Decking",
      description:
        "Very low-maintenance, eco-friendly, and everlasting. No staining, no sealing, just beautiful modern (or classic!) outdoor spaces.",
      badge: "Comp",
    },
    {
      title: "Deck Restoration and Resurfacing",
      description:
        "Replace worn boards, repair & reinforce sagging or rotting structures, and bring your old deck back to life without full replacement. Composite/wood available.",
      badge: "Deck",
    },
    {
      title: "Stairs, Railings and Finishing Work",
      description:
        "Rebuild or install stairs and railings that meet code. Lattice, trim, and finishing details that give your deck a complete and clean appearance.",
      badge: "Porch",
    },
    {
      title: "Inspections & Consultation",
      description:
        "We can identify structural issues, safety concerns, and cost-effective solutions before problems get more problematic. Schedule a visit today!",
      badge: "Quality",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 text-center scroll-smooth">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10 relative flex-center flex-col"
        >
          <h1 className="font-serif text-5xl md:text-8xl leading-tight">
            WE BUILD DECKS
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 text-center text-xl max-w-3xl"
          >
            We build, restore, and design strong and practical decks that make
            sense for your home and your budget. No over designed luxury
            projects and no unncessary upgrades. Just solid construction, clean
            finishes, and layouts that actually improve how you use this area of
            your home functionally. Whether it is a full rebuild or a targeted
            restoration, every project is approached with durability,
            efficiency, and long-term stable performance in mind. I like to
            think of us being the American Bison!
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <RevealOnScroll direction="up">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
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
            <p className="text-lg text-white/90 max-w-xl">
              We successfully built 150+ custom decks in 2025, and we&apos;re
              just getting started.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Services - 5 Cards */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20 space-y-12"
      >
        <RevealOnScroll direction="up">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl md:text-5xl">
              Our Deck Services
            </h2>
            <p className="text-lg text-white/90 mt-4">
              Custom decks, porches, and outdoor living spaces
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
              <Card className="relative overflow-hidden transition-all hover:scale-[1.02] flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col grow relative">
                  <p className="text-sm opacity-90 grow">
                    {service.description}
                  </p>
                  <p className="absolute text-[4rem] font-serif -bottom-12 right-2 opacity-10 select-none pointer-events-none z-0">
                    {service.badge}
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={0.3}>
          <Button
            variant="default"
            className="w-full relative z-10 mt-auto border-black border-2"
          >
            TALK TO US TODAY →
          </Button>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <RevealOnScroll direction="up">
        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                About the Company
              </h2>
              <p className="text-lg text-white/90 mb-4">
                Too often, some of our friends in the industry push upgrades and
                inflate costs by overcomplicating straightforward jobs. We focus
                on what actually makes a deck good: solid framing, smart layout,
                and durable materials that look beautiful forever.
              </p>
              <p className="text-lg text-white/90">
                We specialize in practical builds that repair what can be saved,
                replace what needs to go, and build new decks that are clean and
                professionally done to stand the test of time. Every job is
                approached the same way: what needs to be done, what does not,
                and how to get the best result. Let us know how we can change
                your deck for the better today by dropping us a ring!
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
      </RevealOnScroll>

      {/* Projects Gallery Section */}
      <RevealOnScroll direction="up">
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-white/90">
              Take a look at some of our favorite builds
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
              <RevealOnScroll key={i} direction="up" delay={index * 0.05}>
                <Card className="aspect-square bg-primary flex items-center justify-center hover:border-gold transition-colors hover:bg-dark/60">
                  <p className="text-sm opacity-60">Deck Project {i}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Career Section */}
      <RevealOnScroll direction="up">
        <section id="get-a-quote" className="max-w-7xl mx-auto px-6 py-20">
          <Card className="text-center p-8 md:p-12 text-background">
            <CardHeader>
              <CardTitle className="font-serif text-4xl md:text-5xl">
                Get a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Ready to transform your backyard? Get a free quote today and
                discover why homeowners trust Derbyville Decks for quality,
                craftsmanship, and exceptional service.
              </p>
              <Button className="hover:/90 font-semibold bg-background text-foreground">
                Get Quote
              </Button>
            </CardContent>
          </Card>
        </section>
      </RevealOnScroll>
    </>
  );
}

export default Home;
