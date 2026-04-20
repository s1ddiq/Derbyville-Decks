// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/views/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | The Derbyville Deck Company",
  description:
    "Learn how Derbyville Decks collects, uses, and protects your personal information. Your privacy matters to us.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
