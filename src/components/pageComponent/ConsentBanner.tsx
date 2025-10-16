"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("toolbox_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("toolbox_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full p-4 md:p-5 border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0 md:space-x-4 animate-slide-up">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          By using this website, you agree to our{" "}
          <Link
            href="/terms-and-conditions"
            className="text-cyan-600 hover:underline font-medium"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-cyan-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          . We use cookies to improve your browsing experience.
        </p>

        <button
          onClick={handleAccept}
          className="bg-cyan-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-cyan-700 transition w-full md:w-auto"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
