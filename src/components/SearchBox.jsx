import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function SearchBox({ onSearch, defaultZip }) {
  const [zipcode, setZipcode] = useState(defaultZip || '');

  useEffect(() => {
    setZipcode(defaultZip);
  }, [defaultZip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipcode.trim()) {
      onSearch(zipcode.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder="Enter ZIP code"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
        pattern="[0-9]{5}"
        maxLength="5"
        required
      />
      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      <button
        type="submit"
        className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
