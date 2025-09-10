// src/app/qr/[code]/page.js

export default function QRLandingPage({ params }) {
  // The `params` object contains the dynamic parts of the URL.
  // In this case, it will have a 'code' property.
  const referralCode = params.code;

  return (
    <main className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <p className="mt-4 text-lg">
        You've been referred with the code:
      </p>
      <div className="mt-2 text-2xl font-mono bg-gray-100 p-4 rounded-md inline-block">
        {referralCode}
      </div>
      <p className="mt-6">
        Your signup will be automatically tagged with this referral.
      </p>
      <button className="mt-6 bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700 text-lg">
        Sign Up Now
      </button>
    </main>
  );
}