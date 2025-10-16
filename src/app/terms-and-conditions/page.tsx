import NavBar from "@/components/navBar";
import { Metadata } from "next";
import img from "@/assets/image5.jpeg";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Terms and Conditions | Toolbox - User Agreement",
  description:
    "Read the Terms and Conditions of Toolbox. Understand the user agreement, acceptable use policy, and your rights and responsibilities while using our website and tools.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <NavBar />
      <Header image={img} title="Terms & Condition" />

      <main className="min-h-screen bg-gray-50 py-20 px-6">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <p className="text-gray-600 text-center mb-10">
            Last updated: <strong>October 3, 2025</strong>
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using <strong>MitCrux-ToolBox</strong> ( “we,”
                “us,” or “our”), you agree to comply with and be bound by these
                Terms and Conditions. If you do not agree with these terms,
                please discontinue using our Website immediately.
              </p>
              <p className="mt-3">
                These Terms constitute a legally binding agreement between you
                and Toolbox regarding your use of our site and services.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                2. Changes to Terms
              </h2>
              <p>
                We reserve the right to update, modify, or replace any part of
                these Terms at our sole discretion. Updates will take effect
                immediately upon posting on this page. It is your responsibility
                to review these Terms periodically for changes.
              </p>
            </section>

            {/* Use of the Website */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                3. Use of the Website
              </h2>
              <p>
                Toolbox provides free online tools and resources for
                informational and educational purposes only. You agree to use
                the Website lawfully and in accordance with these Terms.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Do not use the site for any unlawful purpose.</li>
                <li>
                  Do not attempt to hack, disrupt, or interfere with the
                  Website’s functionality or security.
                </li>
                <li>
                  Do not upload or transmit harmful, malicious, or offensive
                  material.
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content, features, and functionality on Toolbox — including
                but not limited to text, graphics, logos, icons, code, and
                software — are the exclusive property of Toolbox or its
                licensors and are protected by copyright, trademark, and other
                intellectual property laws.
              </p>
              <p className="mt-3">
                You may use the Website and its content for personal and
                non-commercial purposes only. Unauthorized reproduction,
                distribution, or modification is strictly prohibited.
              </p>
            </section>

            {/* User-Generated Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                5. User-Generated Content
              </h2>
              <p>
                If the Website allows users to submit content or data, you
                retain ownership of your content but grant us a worldwide,
                royalty-free, and non-exclusive license to use, display, and
                distribute such content solely to operate the Website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                6. Third-Party Links and Services
              </h2>
              <p>
                Toolbox may contain links to third-party websites, tools, or
                services. These are provided solely for convenience. We do not
                control or endorse these external sites and are not responsible
                for their content, privacy policies, or practices.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p>
                The Website and its tools are provided on an “as-is” and “as
                available” basis. We make no representations or warranties of
                any kind, express or implied, regarding the operation of the
                Website or the accuracy of its content.
              </p>
              <p className="mt-3">
                You use the Website at your own risk. We do not guarantee that
                the Website will always be available, error-free, or secure.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                In no event shall Toolbox, its owners, or affiliates be liable
                for any indirect, incidental, or consequential damages resulting
                from your use of the Website or any tools provided herein.
              </p>
              <p className="mt-3">
                Your sole remedy for dissatisfaction with the Website is to stop
                using it.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                9. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Toolbox, its
                owners, affiliates, and contributors from and against any
                claims, damages, losses, or expenses arising from your use of
                the Website or violation of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                10. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate access to the
                Website at any time, with or without notice, for conduct that
                violates these Terms or is harmful to other users or Toolbox.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of your local jurisdiction, without regard to conflict
                of law principles.
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                12. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact us:
              </p>
              <p className="mt-2">
                📧 <strong>Email:</strong> support@toolbox.com
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition"
            >
              Back to Home
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
