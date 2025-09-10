// src/app/terms/page.js
export default function TermsAndConditions() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-2">
        This is where the terms and conditions for a specific agency or
        merchant will be loaded.
      </p>
      {/* Later, this content will be fetched from your backend */}
      <p>Last Updated: September 10, 2025</p>
    </div>
  );
}