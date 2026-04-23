import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="text-center p-4 md:p-6 flex flex-col md:flex-row items-center border-t border-white/20 bg-background gap-4 md:gap-0">
      <p className="text-xs md:text-sm w-full md:w-1/3 text-center md:text-left order-2 md:order-1">
        &copy; {new Date().getFullYear()} - Derbyville Decks Company. All rights
        reserved.
      </p>

      <div className="flex justify-center gap-x-4 md:gap-x-3 text-xs md:text-sm w-full md:w-1/3 order-1 md:order-2">
        <Link
          href="/privacy-policy"
          className="hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-border">|</span>
        <Link
          href="/terms-of-service"
          className="hover:text-primary transition-colors"
        >
          Terms of Service
        </Link>
      </div>

      <div className="text-xs md:text-sm w-full md:w-1/3 text-center md:text-right order-3">
        <Link
          href="https://github.com/s1ddiq"
          className="hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with <span className="text-red-500">❤️</span> in Stamford, Conn.
        </Link>
      </div>
    </footer>
  );
};

export default SiteFooter;
