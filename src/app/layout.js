// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header"; // <-- 1. Import Header
import Footer from "../components/Footer"; // <-- 2. Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduhubnet",
  description: "Your global education journey starts here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />      {/* <-- 3. Add Header here */}
        {children}      {/* This is your page content */}
        <Footer />      {/* <-- 4. Add Footer here */}
      </body>
    </html>
  );
}