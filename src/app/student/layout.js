// src/app/student/layout.js
import Sidebar from '../../components/dashboard/Sidebar';

export default function StudentDashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}