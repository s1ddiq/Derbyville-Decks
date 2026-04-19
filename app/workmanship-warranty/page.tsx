// app/workmanship-warranty/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkmanshipWarrantyPage() {
  const coverageItems = [
    {
      title: "Structural Integrity",
      description:
        "All framing, posts, beams, joists, and structural connections are warrantied against failure due to improper installation or defective workmanship.",
    },
    {
      title: "Decking & Surface Materials",
      description:
        "Deck boards, fascia, and trim installed by our crew are covered against warping, splitting, or loosening caused by improper fastening or spacing.",
    },
    {
      title: "Railings & Stairs",
      description:
        "Railings, balusters, handrails, and stair stringers are warrantied for secure attachment and proper code-compliant installation.",
    },
    {
      title: "Fastening & Hardware",
      description:
        "All screws, hidden fasteners, brackets, and connectors used in your deck build are covered against corrosion or failure due to improper selection or installation.",
    },
  ];

  const exclusions = [
    "Normal settling, minor cracking, or cosmetic changes in wood or composite materials due to natural weathering",
    "Damage caused by improper maintenance, neglect, or failure to clean/seal wood decks as recommended",
    "Structural damage from ground movement, floods, fires, acts of God, or pests (termites, carpenter ants, etc.)",
    "Alterations, repairs, or additions made by anyone other than Derbyville Decks without prior written approval",
    "Pre-existing conditions on decks that were restored or resurfaced (we'll document these before starting)",
  ];

  const claimSteps = [
    {
      step: "01",
      title: "Contact Us",
      description:
        "Call or email us with your name, address, and a description of the issue. Photos help us understand the situation faster.",
    },
    {
      step: "02",
      title: "Inspection",
      description:
        "We'll schedule a site visit to assess the workmanship concern within 14 business days.",
    },
    {
      step: "03",
      title: "Resolution",
      description:
        "If the issue is covered under our warranty, we'll repair or replace the affected work at no cost to you.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10 relative"
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            Our Workmanship Warranty
          </h1>
          <p className="text-white/90 text-center text-xl max-w-3xl mx-auto">
            We stand behind our work. Period.
          </p>
        </motion.div>
      </section>

      {/* Introduction Card */}

      {/* What's Covered */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">What's Covered</h2>
          <p className="text-lg text-white/90 mt-4 max-w-2xl mx-auto">
            To be filled
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageItems.map((item, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  To be filled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80">To be filled</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Warranty Period Breakdown */}
    </>
  );
}
