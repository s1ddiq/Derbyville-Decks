// app/layout.tsx
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Derbyville Decks - Professional Deck Building",
  description:
    "We build, restore, and design strong and practical decks that make sense for your home and your budget.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.className} ${instrumentSerif.variable}`}
    >
      <body className="bg-[url('/background1.png')] bg-cover bg-fixed text-white font-sans min-h-screen">
        <SiteHeader showPrivacyLink={false} showTermsLink={false} />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
