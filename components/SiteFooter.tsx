import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="text-center pt-6 flex-center border-t border-white/20">
      <p className="mb-4 text-sm flex-center">
        &copy; {new Date().getFullYear()} - Derbyville Decks Company. All rights
        reserved.
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 mx-2"
        >
          Privacy Policy{" "}
        </Link>
        &
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
  );
};

export default SiteFooter;
