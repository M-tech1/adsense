import NavBar from "@/components/navBar";
import Header from "@/components/header";
import { Metadata } from "next";
import img from "@/assets/image5.jpeg";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Disclaimer | Toolbox - Transparency & Responsibility Statement",
  description:
    "Read the Toolbox Disclaimer to understand the limits of liability, accuracy of content, and responsibility regarding external links and third-party tools.",
};

export default function DisclaimerPage() {
  return (
    <>
      <NavBar />
      <Header image={img} title="Disclaimers" />

      <main className="min-h-screen bg-gray-50 py-20 px-6">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <p className="text-gray-600 text-center mb-10">
            Last updated: <strong>October 3, 2025</strong>
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1. General Information
              </h2>
              <p>
                The information provided by <strong>MitCrux-ToolBox</strong>{" "}
                (“we,” “us,” or “our”) on this website is for general
                informational and educational purposes only. All information on
                the Site is provided in good faith; however, we make no
                representation or warranty of any kind regarding the accuracy,
                adequacy, validity, reliability, availability, or completeness
                of any information on the Site.
              </p>
            </section>

            {/* No Professional Advice */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                2. No Professional Advice
              </h2>
              <p>
                The content and tools provided by Toolbox are not intended to
                replace professional advice. Before making any business, legal,
                financial, or technical decisions based on the information
                provided here, we recommend consulting with a qualified
                professional.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                3. Limitation of Liability
              </h2>
              <p>
                Under no circumstance shall Toolbox or its team be held liable
                for any direct, indirect, incidental, special, or consequential
                damages arising out of or in any way connected with the use of
                our website, tools, or services.
              </p>
              <p className="mt-3">
                Your use of the Site and your reliance on any information
                provided is solely at your own risk.
              </p>
            </section>

            {/* External Links Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                4. External Links Disclaimer
              </h2>
              <p>
                The Toolbox website may contain (or you may be sent through the
                Site to) links to other websites or content belonging to or
                originating from third parties, or links to websites and
                features in banners or other advertising.
              </p>
              <p className="mt-3">
                Such external links are not investigated, monitored, or checked
                for accuracy or completeness by us. We do not warrant, endorse,
                guarantee, or assume responsibility for the accuracy or
                reliability of any information offered by third-party websites
                linked through the Site.
              </p>
            </section>

            {/* Affiliate & Advertising Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                5. Advertising & Affiliate Disclaimer
              </h2>
              <p>
                Toolbox may contain advertisements, sponsored content, or
                affiliate links. This means we may earn a small commission when
                you click or make purchases through certain links, at no
                additional cost to you.
              </p>
              <p className="mt-3">
                We are a participant in the Google AdSense Program, which uses
                cookies to display relevant advertisements. For more details,
                please read our{" "}
                <a
                  href="/privacy-policy"
                  className="text-cyan-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* No Warranties */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                6. “Use at Your Own Risk”
              </h2>
              <p>
                All tools, calculators, and utilities provided on Toolbox are
                made available “as is” and “as available.” We do not guarantee
                that our website or any of its content will always be accurate,
                reliable, or uninterrupted.
              </p>
              <p className="mt-3">
                Users are responsible for verifying the accuracy and suitability
                of the information or tools before relying on them.
              </p>
            </section>

            {/* Changes to This Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                7. Changes to This Disclaimer
              </h2>
              <p>
                We reserve the right to update, amend, or make changes to this
                Disclaimer at any time and for any reason. Any modifications
                will be effective immediately upon posting the updated version
                on this page.
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Disclaimer, please contact
                us:
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
      <Footer />
    </>
  );
}
