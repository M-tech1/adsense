import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bottom-0 bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex flex-row justify-center gap-5">
          <Link className="hover:text-cyan-500" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="hover:text-cyan-500" href="/disclaimer">
            Disclaimer
          </Link>
          <Link className="hover:text-cyan-500" href="/terms-and-conditions">
            Terms & Condition
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Toolbox. All rights reserved.</p>
      </div>
    </footer>
  );
}
