"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Courses", href: "#" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo Only */}
          <Link href="#" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.webp"
              alt="Modern Training Institute"
              width={100}
              height={100}
              className="h-auto w-24 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 transition-all hover:bg-blue-50 hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-blue-50 hover:text-brand-blue md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-blue-50 hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
