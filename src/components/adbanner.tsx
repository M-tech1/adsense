"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  adSlot: string;
  style?: React.CSSProperties;
  format?: string;
}

export default function AdBanner({
  adSlot,
  style = { display: "block" },
  format = "auto",
}: AdBannerProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || [])?.push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  // Prevent loading ads in development mode
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="p-4 bg-gray-100 text-center text-gray-600 border border-gray-300 rounded">
        <p>Ad placeholder — shown in development mode</p>
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-7706360600747560"
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
