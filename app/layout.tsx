// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import localFont from "next/font/local";

const mainFont = localFont({
  src: "./fonts/InstrumentSerif-Regular.ttf",
  variable: "--font-mf",
});

const mainFontItalic = localFont({
  src: "./fonts/InstrumentSerif-Italic.ttf",
  variable: "--font-mf-italic",
});

const secondaryFont = localFont({
  src: "./fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-sf",
});

const secondaryFontItalic = localFont({
  src: "./fonts/InstrumentSans-Italic-VariableFont_wdth,wght.ttf",
  variable: "--font-sf-italic",
});

export const metadata: Metadata = {
  title: "The Derbyville Deck Company",
  description:
    "We build, restore, and design strong and practical decks that make sense for your home and your budget.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mainFont.className}`}>
      <body className="bg-[url('/background1.png')] bg-cover bg-fixed text-white font-sans min-h-screen">
        <SiteHeader showPrivacyLink={false} showTermsLink={false} />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
