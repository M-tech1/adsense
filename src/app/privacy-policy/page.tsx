import Header from "@/components/header";
import NavBar from "@/components/navBar";
import { Metadata } from "next";
import img from "@/assets/image5.jpeg";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Toolbox - Data & Advertising Transparency",
  description:
    "Read the Toolbox Privacy Policy to understand how we collect, use, and protect your information, and how Google AdSense and cookies are used on our site.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <Header image={img} title="Privacy Policy" />

      <main className="min-h-screen bg-gray-50 sm:py-20 py-5 px-6">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-2 sm:p-12">
          <p className="text-gray-600 text-center mb-10">
            Last updated: <strong>October 3, 2025</strong>
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>MitCrux-ToolBox</strong> Your privacy is
                important to us. This Privacy Policy explains how we collect,
                use, and safeguard your information when you visit our website
                or use any of our online tools.
              </p>
              <p className="mt-3">
                By using Toolbox, you agree to this policy and consent to the
                collection and use of information in accordance with it.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                2. Information We Collect
              </h2>
              <p>
                Toolbox is designed to be used without requiring account
                creation or login. However, we may collect limited information
                automatically through analytics and advertising technologies.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong>Usage Data:</strong> Includes your browser type, IP
                  address (anonymized), device information, and pages visited.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies to enhance
                  functionality and deliver personalized advertising
                  experiences.
                </li>
                <li>
                  <strong>Contact Form Data:</strong> If you contact us, we
                  collect your name, email, and message content solely for
                  communication purposes.
                </li>
              </ul>
            </section>

            {/* Cookies Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                3. Use of Cookies
              </h2>
              <p>
                Toolbox uses cookies and similar tracking technologies to
                improve user experience and analyze site performance. Cookies
                help us remember your preferences and understand how visitors
                interact with our content.
              </p>
              <p className="mt-3">
                You can control or delete cookies at any time through your
                browser settings. Please note that disabling cookies may affect
                certain website features.
              </p>
            </section>

            {/* Google AdSense Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                4. Google AdSense and Advertising
              </h2>
              <p>
                Toolbox displays advertisements served by Google AdSense and its
                partners. Google may use cookies or web beacons to serve ads
                based on your visits to this and other websites.
              </p>
              <p className="mt-3 w-full">
                <strong>Google’s use of the DART cookie</strong> enables it to
                serve ads to users based on their visit to Toolbox and other
                sites on the Internet. Users may opt out of personalized
                advertising by visiting Google’s Ads Settings page:
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline ml-1"
                >
                  https://adssettings.google.com/
                </a>
              </p>
              <p className="mt-3 w-full">
                For more information on how Google uses data, visit:
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline ml-1"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                5. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>To improve and personalize user experience.</li>
                <li>To analyze site traffic and optimize performance.</li>
                <li>To communicate with users who submit inquiries.</li>
                <li>
                  To serve relevant ads and prevent fraudulent activities.
                </li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                6. Data Security
              </h2>
              <p>
                We take reasonable steps to protect your data against
                unauthorized access or disclosure. However, please note that no
                method of data transmission over the Internet is completely
                secure.
              </p>
            </section>

            {/* Third-party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                7. Third-party Links
              </h2>
              <p>
                Toolbox may contain links to third-party websites. We are not
                responsible for the content or privacy practices of these
                external sites. We recommend reviewing their privacy policies
                before providing any personal information.
              </p>
            </section>

            {/* User Consent */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                8. Your Consent
              </h2>
              <p>
                By using our website, you consent to our Privacy Policy and
                agree to its terms.
              </p>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                9. Policy Updates
              </h2>
              <p>
                Toolbox may update this Privacy Policy from time to time. We
                will post the revised version on this page with an updated date.
                Please review this page periodically to stay informed about how
                we protect your data.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mt-2">
                📧 <strong>Email:</strong>
                <a
                  href="mailto:support@toolbox.com"
                  className="text-blue-600 hover:underline"
                >
                  support@toolbox.com
                </a>
              </p>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-600 mt-20">
              🛡️ CCPA Privacy Policy (Do Not Sell My Personal Information)
            </h2>

            <p className="mt-4">
              This section applies to users residing in California and explains
              your rights under the CCPA.
            </p>

            <h3 className="text-lg font-semibold mt-6">1. Your Rights</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Right to Know:</strong> Request details about personal
                data we collect, use, or share.
              </li>
              <li>
                <strong>Right to Delete:</strong> Request deletion of your
                personal data, subject to legal exceptions.
              </li>
              <li>
                <strong>Right to Opt-Out of Sale:</strong> You can opt-out of
                the sale of your personal data.
                <br />
                <em>Toolbox does not sell personal information.</em>
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising your privacy rights.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">
              2. Information We Collect
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Device and browser details</li>
              <li>IP address (for analytics and security)</li>
              <li>Usage patterns (tools accessed, timestamps)</li>
              <li>Voluntary data (e.g., when you contact us)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">
              3. How We Use the Information
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Improve website functionality and performance</li>
              <li>Enhance user experience</li>
              <li>Ensure security and prevent abuse</li>
              <li>Provide customer support</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">
              4. How to Exercise Your Rights
            </h3>
            <p className="mt-2">
              To exercise your CCPA rights, contact us at:{" "}
              <a
                href="mailto:support@toolbox.com"
                className="text-cyan-300 hover:underline"
              >
                support@toolbox.com
              </a>
              . We may need to verify your identity before processing requests.
            </p>
          </section>

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

      <Footer />
    </>
  );
}
