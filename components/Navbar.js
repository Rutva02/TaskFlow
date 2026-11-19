
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <a href="#features" className="text-gray-600 hover:text-indigo-600">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
        </div>

        <Link
          href="/login"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
