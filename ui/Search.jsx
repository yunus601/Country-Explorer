import { FaSearch, FaTimes } from "react-icons/fa";

function Search({ searchTerm, onSetSearchTerm, region, onSetRegion }) {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-4 text-text-secondary text-xl">
      {/* Search Input with Icon */}
      <div className="relative w-full sm:max-w-xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
          <FaSearch className="text-base" />
        </div>
        <input
          value={searchTerm}
          onChange={(e) => onSetSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-4 rounded-xl border border-neutral-border bg-neutral-card-bg text-text-primary placeholder:text-text-secondary/70 shadow-2xs outline-none focus:border-brand-blue transition-colors text-lg"
          placeholder="Search by country, capital, or territory..."
        />
        {searchTerm && (
          <button
            onClick={() => onSetSearchTerm("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-text-primary cursor-pointer"
            aria-label="Clear search"
          >
            <FaTimes className="text-sm" />
          </button>
        )}
      </div>

      {/* Region Selector */}
      <select
        value={region}
        onChange={(e) => onSetRegion(e.target.value)}
        className="w-full sm:w-72 rounded-xl border border-neutral-border bg-neutral-card-bg px-4 py-4 outline-none focus:border-brand-blue transition-colors cursor-pointer text-text-primary font-medium text-lg shadow-2xs"
      >
        <option value="">Filter by Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Search;
