import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="text-center p-6 flex items-center border-t border-white/20 bg-background justify-between">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} - Derbyville Decks Company. All rights
        reserved.
      </p>
      <div className="flex gap-x-3 text-sm">
        <Link href="/privacy-policy" className="hover:text-primary">
          Privacy Policy{" "}
        </Link>

        <Link href="/terms-of-service" className="hover:text-primary">
          Terms of Service
        </Link>
      </div>

      <div className="hover:underline text-sm">
        <Link href="https://github.com/s1ddiq">
          Made with 💖 in Stamford, Connecticut
        </Link>
      </div>
    </footer>
  );
};

export default SiteFooter;
