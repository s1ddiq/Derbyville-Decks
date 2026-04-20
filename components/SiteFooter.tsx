import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="text-center p-6 flex items-center border-t border-white/20 bg-background justify-between">
      <p className="text-sm w-1/3 text-left">
        &copy; {new Date().getFullYear()} - Derbyville Decks Company. All rights
        reserved.
      </p>
      <div className="flex-center gap-x-3 text-sm text-center w-1/3">
        <Link href="/privacy-policy" className="hover:text-primary">
          Privacy Policy{" "}
        </Link>

        <Link href="/terms-of-service" className="hover:text-primary">
          Terms of Service
        </Link>
      </div>

      <div className="hover:underline text-sm text-right w-1/3">
        <Link href="https://github.com/s1ddiq">
          Made with 💖 in Stamford, Conn.
        </Link>
      </div>
    </footer>
  );
};

export default SiteFooter;
