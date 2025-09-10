// src/app/student/page.js
export default function StudentProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p><strong>Name:</strong> Jane Doe (Placeholder)</p>
        <p><strong>Email:</strong> jane.doe@example.com (Placeholder)</p>
        <p className="mt-4">
          <strong>Application Status:</strong>{' '}
          <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm">
            Doc Ready
          </span>
        </p>
      </div>
    </div>
  );
}