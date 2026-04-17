// app/terms-of-service/page.tsx
"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

function RevealOnScroll({ children, delay = 0 }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function TermsOfService() {
  const sections = [
    {
      number: "1",
      title: "Acceptance of Terms",
      content:
        'By accessing or using the Derbyville Decks website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service.',
    },
    {
      number: "2",
      title: "Services Provided",
      content:
        "Derbyville Decks provides professional deck building, restoration, inspection, and consultation services. Our services include but are not limited to wood and composite deck construction, deck restoration and resurfacing, stairs/railings/finishing work, inspections and consultations, and free detailed estimates. All services are subject to availability and project-specific terms outlined in individual contracts.",
    },
    {
      number: "3",
      title: "Estimates and Quotes",
      content:
        "Any estimate or quote provided by Derbyville Decks is valid for 30 days from the date of issue. Final pricing may vary based on changes in material costs, unforeseen site conditions discovered during construction, changes to project scope requested by the customer, or permit requirements/local code changes. We provide free, no-obligation estimates. A detailed written contract will be provided before any work begins.",
    },
    {
      number: "4",
      title: "Customer Responsibilities",
      content:
        "As a customer, you agree to provide safe and reasonable access to the work area, obtain necessary permits where required (unless otherwise arranged), disclose any known property issues including underground utilities/easements/soil conditions, ensure the work area is clear of personal belongings/vehicles/obstacles, make timely payments as outlined in your contract, and communicate any concerns promptly during the project.",
    },
    {
      number: "5",
      title: "Payment Terms",
      content:
        "Payment terms will be specified in your individual contract. Generally, a deposit may be required before work begins, progress payments may be scheduled for larger projects, and final payment is due upon completion and your approval of the work. We accept cash, check, credit card, and 0% financing options (subject to approval). Late payments may incur interest charges at the rate of 1.5% per month or the maximum allowed by law.",
    },
    {
      number: "6",
      title: "Warranty Information",
      content:
        "Derbyville Decks offers a Lifetime Workmanship Warranty on our workmanship for as long as you own your home. Material warranties vary by manufacturer (wood, composite, hardware) and will be provided upon request. Warranty covers defects in installation and workmanship but does not cover normal wear and tear, weather damage, neglect, or modifications by others. To make a warranty claim, contact us within 30 days of discovering the issue.",
    },
    {
      number: "7",
      title: "Project Timeline",
      content:
        "Estimated project timelines are provided in good faith but are not guaranteed. Delays may occur due to weather conditions (rain, snow, extreme temperatures), material availability or supplier delays, unforeseen site conditions, permit processing times, or changes requested by the customer. We will communicate any anticipated delays promptly and work to complete your project as efficiently as possible.",
    },
    {
      number: "8",
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Derbyville Decks shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the total amount paid by you to Derbyville Decks in the 12 months preceding the claim.",
    },
    {
      number: "9",
      title: "Cancellation and Refunds",
      content:
        "You may cancel a project according to the terms in your contract. Cancellation before materials are ordered: Full refund of deposit. Cancellation after materials ordered: Deposit retained to cover material costs. Cancellation after work has begun: Payment due for work completed and materials purchased. We reserve the right to cancel a project if site conditions make construction unsafe or impossible.",
    },
    {
      number: "10",
      title: "Intellectual Property",
      content:
        "The Service and its original content, features, and functionality are owned by Derbyville Decks and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or transmit any content from our Service without our prior written consent.",
    },
    {
      number: "11",
      title: "User Content",
      content:
        "By submitting reviews, photos, testimonials, or other content to us, you grant Derbyville Decks a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with our business. You represent that you have all necessary rights to grant this license.",
    },
    {
      number: "12",
      title: "Prohibited Conduct",
      content:
        "When using our website or services, you agree not to violate any applicable laws or regulations, infringe on the rights of others, submit false or misleading information, interfere with or disrupt our services or servers, attempt to gain unauthorized access to any part of the Service, use automated systems to access or scrape our website, or harass, abuse, or harm others.",
    },
    {
      number: "13",
      title: "Third-Party Links",
      content:
        "Our Service may contain links to third-party websites or services that are not owned or controlled by Derbyville Decks. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible for any damage or loss caused by your use of such sites.",
    },
    {
      number: "14",
      title: "Indemnification",
      content:
        "You agree to defend, indemnify, and hold harmless Derbyville Decks and its employees, contractors, and affiliates from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to your use of our services, violation of these Terms, or infringement of any third-party rights.",
    },
    {
      number: "15",
      title: "Governing Law",
      content:
        "These Terms shall be governed and construed in accordance with the laws of the State of Kentucky, without regard to its conflict of law provisions. Any legal action arising from these terms shall be brought exclusively in the state or federal courts located in Jefferson County, Kentucky.",
    },
    {
      number: "16",
      title: "Dispute Resolution",
      content:
        "Before filing a claim against Derbyville Decks, you agree to first contact us to attempt to resolve the dispute informally. If the dispute cannot be resolved informally, you agree to submit to binding arbitration administered by the American Arbitration Association. The arbitration shall take place in Louisville, Kentucky. Each party shall bear its own costs and attorneys' fees.",
    },
    {
      number: "17",
      title: "Modifications to Terms",
      content:
        "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.",
    },
    {
      number: "18",
      title: "Severability",
      content:
        "If any provision of these Terms is held to be unenforceable or invalid, such provision shall be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions shall continue in full force and effect.",
    },
    {
      number: "19",
      title: "Entire Agreement",
      content:
        "These Terms, together with your project contract and our Privacy Policy, constitute the entire agreement between you and Derbyville Decks regarding our services and supersede all prior agreements and understandings, whether written or oral.",
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl mb-4">
              Terms of Service
            </h1>
            <p className="text-white/70 text-lg">
              Last Updated: April 17th, 2026
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <RevealOnScroll key={section.number} delay={0.02 * index}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h2 className="font-serif text-2xl mb-3">
                  {section.number}. {section.title}
                </h2>
                <p className="text-white/80 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="bg-primary/30 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-8">
            <h2 className="font-serif text-2xl mb-3">20. Contact Us</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="space-y-2 text-white/80">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                legal@derbyvilledecks.com
              </p>
              <p>
                <strong className="text-white">Phone:</strong> (555) 123-4567
              </p>
              <p>
                <strong className="text-white">Mail:</strong> 123 Deck Builder
                Lane, Suite 100, Derbyville, KY 40000
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-12 text-center text-white/50 text-sm">
            <p>
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default TermsOfService;
