// src/components/SearchSection.js
export default function SearchSection() {
  return (
    <section className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Find Your Opportunity
        </h2>
        {/* Search Input */}
        <div className="flex rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Search for programs, universities, or agencies..."
            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-6 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <span className="ml-2 text-gray-700">Universities</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <span className="ml-2 text-gray-700">Agencies</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <span className="ml-2 text-gray-700">Language Centers</span>
          </label>
        </div>
      </div>
    </section>
  );
}