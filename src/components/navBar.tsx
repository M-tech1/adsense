"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Tools",
      href: "/",
      subLinks: [
        { name: "Word Counter", href: "/tool/word-count" },
        { name: "QR Generator", href: "/tool/qr-generator" },
        { name: "Loan Calculator", href: "/tool/loan-calculator" },
      ],
    },

    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-cyan-600">
            MitCrux-ToolBox
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 font-medium flex items-center gap-1 transition"
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown
                    size={16}
                    className="mt-[2px] text-gray-400 group-hover:text-cyan-500 transition"
                  />
                )}
              </Link>

              {/* Dropdown for desktop */}
              {link.subLinks && (
                <div className="absolute left-0 top-full hidden group-hover:block">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white shadow-lg rounded-lg mt-2 border border-gray-100 py-2 w-48"
                  >
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/"
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-cyan-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="px-4 py-3 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-left text-gray-700 hover:text-cyan-600 font-medium transition"
                    onClick={() =>
                      link.subLinks
                        ? setOpenDropdown(
                            openDropdown === link.name ? null : link.name
                          )
                        : setIsOpen(false)
                    }
                  >
                    <Link href={link.href}>{link.name}</Link>
                    {link.subLinks && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile sub-links */}
                  <AnimatePresence>
                    {openDropdown === link.name && link.subLinks && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 border-l border-gray-200 pl-3 space-y-2"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-gray-600 hover:text-cyan-600 text-sm transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/"
                className="mt-2 bg-cyan-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
