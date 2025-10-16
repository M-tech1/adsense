"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "./navBar";

const tools = [
  {
    title: "Word Counter",
    description: "Count words, characters, and paragraphs instantly.",
    link: "/tool/word-count",
  },
  // {
  //   title: "Text Case Converter",
  //   description: "Easily convert text to uppercase, lowercase, or title case.",
  //   link: "/tools/text-converter",
  // },
  {
    title: "QR Code Generator",
    description: "Create and download QR codes for links or text.",
    link: "/tool/qr-generator",
  },
  {
    title: "Loan Calculator",
    description: "Calculate loan repayment schedules easily.",
    link: "/tool/loan-calculator",
  },
  // {
  //   title: "Character Counter",
  //   description: "Accurately count every character in your text.",
  //   link: "/tools/character-counter",
  // },
];

const testimonials = [
  {
    name: "David O.",
    role: "Freelance Writer",
    message:
      "This toolbox has made my work so much easier. The word counter and text tools are just perfect for daily use!",
  },
  {
    name: "Sophia M.",
    role: "Marketing Specialist",
    message:
      "I love how everything works instantly. The clean design and fast loading make it my go-to site for quick tasks.",
  },
  {
    name: "Emmanuel K.",
    role: "Software Developer",
    message:
      "Super useful! The QR generator and loan calculator are well built. It’s like having multiple tools in one place.",
  },
  {
    name: "Fatima A.",
    role: "Student",
    message:
      "Simple, reliable, and easy to use. I use the case converter every day for assignments!",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  // Auto-slide testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        {/* Hero Section */}
        <section className="text-center py-24 px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Your All-in-One{" "}
            <span className="text-cyan-500">Online Toolbox</span>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Simplify your daily tasks with professional utilities — from text
            tools to finance calculators. Smart. Fast. Reliable.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#tools"
              className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
            >
              Explore Tools
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Tools?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                title="Fast & Lightweight"
                description="Optimized for performance — no waiting, no clutter."
              />
              <FeatureCard
                title="Privacy-Friendly"
                description="We never store your data. Everything runs in your browser."
              />
              <FeatureCard
                title="Completely Free"
                description="All tools are accessible to everyone at no cost."
              />
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 max-w-7xl mx-auto px-6" id="tools">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Current Tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.title}
                whileHover={{ scale: 1.05 }}
                // className="bg-white p-6 shadow-md rounded-xl border hover:shadow-lg transition"
                className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Link
                  href={tool.link}
                  // className="text-cyan-500 font-semibold hover:underline"
                  className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition"
                >
                  Open Tool →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Testimonial Slider Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md rounded-2xl p-8 md:p-12 mx-auto max-w-3xl"
            >
              <p className="text-lg text-gray-700 italic mb-6">
                “{testimonials[current].message}”
              </p>
              <h3 className="text-xl font-semibold text-cyan-600">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-500">{testimonials[current].role}</p>
            </motion.div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index ? "bg-cyan-500 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 bg-cyan-500 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Start Using Our Free Tools Today
          </h2>
          <p className="text-lg mb-8">
            No registration required. Quick, reliable, and completely free to
            use.
          </p>
          <Link
            href="#tools"
            className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore All Tools
          </Link>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-500 text-sm border-t">
          <p>
            © {new Date().getFullYear()} MitCrux-ToolBox. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
