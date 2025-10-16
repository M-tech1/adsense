import Header from "@/components/header";
import NavBar from "@/components/navBar";
import { Metadata } from "next";
import img from "@/assets/image5.jpeg";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | Toolbox - Connect with Our Team",
  description:
    "Reach out to the Toolbox support team. We’re here to answer your questions, take feedback, and provide assistance with any of our online tools.",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <Header image={img} title="Contact" />

      <main className="min-h-screen bg-gray-50 py-20 px-6">
        {/* Header Section */}
        <section className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Get in Touch with <span className="text-cyan-600">Toolbox</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We value every message from our users. Whether you have a question,
            feedback, or partnership inquiry, our team is ready to assist you
            with professionalism and care.
          </p>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto  rounded-2xl shadow-lg overflow-hidden md:grid md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-5 sm:p-14">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              📬 Send Us a Message
            </h2>

            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
              method="POST"
              className="space-y-6 w-full"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white font-medium py-3 rounded-lg shadow hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree that Toolbox may contact you in
              response to your message. We respect your privacy and never share
              personal information.
            </p>
          </div>

          {/* Sidebar Info */}
          <div className="bg-gray-100 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                📞 Contact Information
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Email:</strong> support@toolbox.com
                </li>
                <li>
                  <strong>Business Hours:</strong> Mon – Fri, 9 AM – 6 PM (UTC)
                </li>
                <li>
                  <strong>Response Time:</strong> Typically within 1–2 business
                  days
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                💡 Need a Custom Tool?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Have a tool idea or feature request? Send us a message through
                the form and let’s discuss how we can build something that helps
                the community.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            We’re Here to Help
          </h2>
          <p className="text-gray-600 mb-6">
            Toolbox exists to make your online tasks faster and easier. We
            appreciate your support and look forward to hearing from you.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition"
          >
            Return to Home
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
