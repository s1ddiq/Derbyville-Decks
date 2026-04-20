"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
      // @ts-ignore faf
      initial={{ opacity: 0, ...(directions[direction] as any) }}
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
      <section className="relative min-h-screen flex items-center justify-center pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10 relative flex flex-col items-center"
        >
          <Image
            src="/EMBLEM003.svg"
            width={156}
            height={156}
            alt="Derbyville Decks Emblem"
          />
          <h1 className="text-5xl md:text-8xl leading-tight">WE BUILD DECKS</h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 text-center text-xl md:text-2xl max-w-3xl"
          >
            We build, restore, and design strong and practical decks that make
            sense for your home and your budget. No over designed luxury
            projects and no unnecessary upgrades. Just solid construction, clean
            finishes, and layouts that actually improve how you use this area of
            your home functionally.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <RevealOnScroll direction="up">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-4xl">90+ projects in 2025</h2>
            <Image
              src="/line.svg"
              alt="Divider"
              width={80}
              height={24}
              className="h-6 hidden md:block"
            />
            <p className="text-xl text-white/90 max-w-xl">
              We successfully done 90+ projects in 2026, and we&apos;re just
              getting started.
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
            <h2 className="text-4xl md:text-5xl">Our Deck Services</h2>
            <p className="text-xl text-white/90 mt-4">
              Custom decks, porches, and outdoor living spaces
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
              <Card className="relative overflow-hidden transition-all hover:scale-[1.02] flex flex-col h-full  backdrop-blur-sm ">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col grow relative">
                  <p className="text-base opacity-90 grow">
                    {service.description}
                  </p>
                  <p className="absolute text-[4rem] -bottom-12 right-2 opacity-10 select-none pointer-events-none z-0">
                    {service.badge}
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Button
            variant="outline"
            className="relative z-10 mt-auto backdrop-blur-sm w-full md:w-4/8 card-shadow text-primary hover:text-primary/90 border-primary"
          >
            TALK TO US TODAY →
          </Button>
        </div>
      </section>

      {/* About Section */}
      <RevealOnScroll direction="up">
        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">About the Company</h2>
              <p className="text-xl text-white/90 mb-4">
                Too often, some of our friends in the industry push upgrades and
                inflate costs by overcomplicating straightforward jobs. We focus
                on what actually makes a deck good: solid framing, smart layout,
                and durable materials that look beautiful forever.
              </p>
              <p className="text-xl text-white/90">
                We specialize in practical builds that repair what can be saved,
                replace what needs to go, and build new decks that are clean and
                professionally done to stand the test of time.
              </p>
            </div>
            <Card className=" backdrop-blur-sm ">
              <CardHeader>
                <CardTitle className="text-2xl">Our Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex flex-col justify-center gap-2">
                    <span className="text-xl">
                      ✓ Clear, Detailed Estimates.
                    </span>
                    <span className="opacity-80">
                      Every project is clearly scoped so you know exactly what
                      is being done and why. No vague pricing or surprises.
                    </span>
                  </li>
                  <li className="flex flex-col justify-center gap-2">
                    <span className="text-xl">✓ Licensed & insured</span>
                    <span className="opacity-80">
                      Fully licensed and insured for your protection and peace
                      of mind.
                    </span>
                  </li>
                  <li className="flex flex-col justify-center gap-2">
                    <span className="text-xl">
                      ✓ Workmanship You Can Rely On
                    </span>
                    <span className="opacity-80">
                      We stand behind our work forever.{" "}
                      <Link
                        href="/workmanship-warranty"
                        className="border-b-2 border-dotted border-background hover:border-white/90"
                      >
                        (What does this mean?)
                      </Link>
                    </span>
                  </li>
                  <li className="flex flex-col justify-center gap-2">
                    <span className="text-xl">✓ Flexible Payment Options</span>
                    <span className="opacity-80">
                      0% financing available, pay-in-4 options, and all standard
                      payment methods accepted.
                    </span>
                  </li>
                  <li className="flex flex-col justify-center gap-2">
                    <span className="text-xl">✓ Quality Where It Matters</span>
                    <span className="opacity-80">
                      We use durable materials and skilled labor where it
                      counts, without pushing unnecessary upgrades.
                    </span>
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
            <h2 className="text-4xl md:text-5xl mb-4">Our Recent Projects</h2>
            <p className="text-xl text-white/90">
              Take a look at some of our favorite builds
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i, index) => (
              <RevealOnScroll key={i} direction="up" delay={index * 0.05}>
                <Card className="aspect-square  backdrop-blur-sm  flex items-center justify-center 0 transition-colors">
                  <p className="text-base opacity-60">Deck Project {i}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Quote Section */}
      <RevealOnScroll direction="up">
        <section id="get-a-quote" className="max-w-7xl mx-auto px-6 py-20">
          <Card className="text-center p-8 md:p-12 ">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl">
                Get a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Ready to transform your backyard? Get a free quote today and
                discover why homeowners trust Derbyville Decks for quality,
                craftsmanship, and exceptional service.
              </p>
              <Button className="bg-background text-primary hover:bg-background/90 text-xl">
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
