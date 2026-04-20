// app/privacy-policy/page.tsx
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

function PrivacyPolicyView() {
  const sections = [
    {
      title: "Introduction",
      content: (
        <p className="text-white/80 leading-relaxed">
          Derbyville Decks ("we," "our," or "us") respects your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website, use our services, or interact with us.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>
              <strong className="text-white">Personal Identifiers:</strong>{" "}
              Name, email address, phone number, and home address
            </li>
            <li>
              <strong className="text-white">Project Information:</strong>{" "}
              Details about your deck or home improvement needs
            </li>
            <li>
              <strong className="text-white">Usage Data:</strong> How you
              interact with our website, including pages visited and time spent
            </li>
            <li>
              <strong className="text-white">Communication Records:</strong>{" "}
              Messages, emails, or phone call logs with our team
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Your information helps us serve you better. We use it to:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Provide accurate estimates and project quotes</li>
            <li>Schedule consultations and site visits</li>
            <li>Communicate about project timelines and updates</li>
            <li>Improve our services and website experience</li>
            <li>
              Send promotional offers and company news (with your consent)
            </li>
            <li>Comply with legal obligations and resolve disputes</li>
          </ul>
        </>
      ),
    },
    {
      title: "Information Sharing",
      content: (
        <>
          <p className="text-white/80 leading-relaxed">
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4 mt-4">
            <li>
              <strong>Service Providers:</strong> Contractors, suppliers, and
              partners who help us complete your project
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to
              protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            All third parties are required to maintain the confidentiality of
            your information.
          </p>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <p className="text-white/80 leading-relaxed">
          We implement industry-standard security measures to protect your
          personal information. This includes encrypted data transmission,
          secure servers, and restricted access to personal data. However, no
          method of transmission over the internet is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      ),
    },
    {
      title: "Your Rights",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>
              Request deletion of your information (subject to legal exceptions)
            </li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            To exercise these rights, contact us at{" "}
            <strong className="text-white">privacy@derbyvilledecks.com</strong>{" "}
            or call us at <strong className="text-white">(555) 123-4567</strong>
            .
          </p>
        </>
      ),
    },
    {
      title: "Cookies & Tracking",
      content: (
        <p className="text-white/80 leading-relaxed">
          Our website uses cookies and similar technologies to enhance your
          browsing experience. Cookies help us understand site usage, remember
          your preferences, and improve functionality. You can control cookie
          settings through your browser preferences. Disabling cookies may
          affect certain website features.
        </p>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <p className="text-white/80 leading-relaxed">
          Our services are not directed to children under 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided us with personal information, please contact us
          immediately.
        </p>
      ),
    },
    {
      title: "Changes to This Policy",
      content: (
        <p className="text-white/80 leading-relaxed">
          We may update this Privacy Policy periodically. The updated version
          will be indicated by a revised "Last Updated" date. We encourage you
          to review this policy regularly to stay informed about how we protect
          your information.
        </p>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="space-y-2 text-white/80">
            <p>
              <strong className="text-white">Email:</strong>{" "}
              privacy@derbyvilledecks.com
            </p>
            <p>
              <strong className="text-white">Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong className="text-white">Mail:</strong> 123 Deck Builder
              Lane, Suite 100, Derbyville, KY 40000
            </p>
          </div>
        </>
      ),
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
            <h1 className=" text-5xl md:text-6xl mb-4">Privacy Policy</h1>
            <p className="text-white/70 text-lg">
              Last Updated: April 17th, 2026
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <RevealOnScroll key={section.title} delay={0.05 * index}>
              <div
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 ${section.title === "Contact Us" ? "bg-primary/30 border-white/20" : ""}`}
              >
                <h2 className=" text-2xl mb-3">{section.title}</h2>
                {section.content}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 text-center text-white/50 text-sm">
            <p>
              By using our website and services, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default PrivacyPolicyView;
