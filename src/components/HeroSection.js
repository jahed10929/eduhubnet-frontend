// src/components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="text-center p-12 bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Eduhubnet</h1>
      <p className="mt-4">Your global education journey starts here.</p>
      {/* We'll add the QR code functionality later */}
      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded">
        Get Started via QR
      </button>
    </section>
  );
}