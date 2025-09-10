// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Eduhubnet
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-blue-600">
            Terms
          </Link>
          {/* We will build these pages later */}
          <Link href="/login" className="bg-gray-200 px-4 py-2 rounded text-gray-800 hover:bg-gray-300">
            Login
          </Link>
          <Link href="/signup" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}