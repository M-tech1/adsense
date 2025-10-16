import Header from "@/components/header";
import NavBar from "@/components/navBar";
import { Metadata } from "next";
import img from "@/assets/image5.jpeg";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | Toolbox - Free Online Utilities",
  description:
    "Learn more about Toolbox, a platform providing free online tools to help you work faster and smarter — from word counting to QR code generation.",
};

export default function About() {
  return (
    <>
      <NavBar />
      <Header image={img} title="About" />
      <main className="min-h-screen bg-gray-50 sm:py-16 py-5 sm:px-6 px-2">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-cyan-600">Toolbox</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Toolbox is your go-to collection of smart, free, and instant online
            utilities — built to make your everyday digital tasks simpler,
            faster, and more efficient.
          </p>
        </section>

        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to create a world where anyone can access powerful
              digital tools — anytime, anywhere, for free. Whether you need to
              count words, convert text, generate QR codes, or calculate a loan,
              Toolbox helps you complete your task instantly without downloads
              or subscriptions.
            </p>
          </div>
          {/* Our Vision */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🚀 Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in simplicity and accessibility. Toolbox was built for
              individuals, students, developers, and professionals who value
              efficiency and accuracy in their daily work. Our goal is to grow a
              global platform that supports millions of users with dependable,
              fast, and ad-supported utilities that enhance productivity.
            </p>
          </div>
          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧰 What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-left">
              <li>Free online tools with no sign-up or hidden costs.</li>
              <li>Fast, lightweight, and mobile-friendly interface.</li>
              <li>Secure, privacy-focused experience — no data tracking.</li>
              <li>Constantly updated tools to improve your productivity.</li>
            </ul>
          </div>
          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Why Choose Toolbox?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 text-left">
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Simple & Accessible
                </h3>
                <p>
                  No logins, no clutter — just instant access to tools that work
                  right from your browser.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Secure & Private
                </h3>
                <p>
                  Your inputs are processed safely in your browser. We never
                  store or share personal data.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Constantly Improving
                </h3>
                <p>
                  We actively add new utilities and update existing ones to
                  maintain accuracy and usability.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800 mb-2">
                  AdSense Supported
                </h3>
                <p>
                  Our free tools are supported by Google AdSense ads, allowing
                  us to keep them available to everyone at no cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the tools that can make your digital life easier — free,
            simple, and reliable.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition"
          >
            Explore Tools
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
