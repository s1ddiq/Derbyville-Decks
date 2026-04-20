// app/terms-of-service/page.tsx
import TermsOfServiceView from "@/components/views/TermsOfServiceView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Derbyville Deck Company",
  description:
    "Review the terms and conditions for using Derbyville Decks' services. Learn about our policies, warranties, and customer responsibilities.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceView />;
}