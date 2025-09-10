// src/components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {currentYear} Eduhubnet. All rights reserved.</p>
    </footer>
  );
}