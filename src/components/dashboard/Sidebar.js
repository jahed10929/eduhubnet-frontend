// src/components/dashboard/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Student Portal</h2>
      <nav>
        <ul>
          <li className="mb-2"><Link href="/student" className="block p-2 rounded hover:bg-gray-700">Profile</Link></li>
          <li className="mb-2"><Link href="/student/documents" className="block p-2 rounded hover:bg-gray-700">Documents</Link></li>
          <li className="mb-2"><Link href="/student/applications" className="block p-2 rounded hover:bg-gray-700">Applications</Link></li>
          <li className="mb-2"><Link href="/student/visa" className="block p-2 rounded hover:bg-gray-700">Visa Timeline</Link></li>
          <li className="mb-2"><Link href="/student/offers" className="block p-2 rounded hover:bg-gray-700">Offers</Link></li>
          <li className="mb-2"><Link href="/student/bookings" className="block p-2 rounded hover:bg-gray-700">Bookings</Link></li>
          <li className="mb-2"><Link href="/student/messages" className="block p-2 rounded hover:bg-gray-700">Messages</Link></li>
        </ul>
      </nav>
    </aside>
  );
}