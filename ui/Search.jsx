function Search({ searchTerm, onSetSearchTerm, region, onSetRegion }) {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-4 text-text-secondary text-xl">
      <input
        value={searchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
        className="w-full sm:max-w-xl rounded-md border border-neutral-border bg-neutral-card-bg px-4 py-4 outline-none focus:border-brand-accent transition-colors"
        placeholder="Search for a country"
      />
      <select
        value={region}
        onChange={(e) => onSetRegion(e.target.value)}
        className="w-full sm:w-72 rounded-md border border-neutral-border bg-neutral-card-bg px-4 py-4 outline-none focus:border-brand-accent transition-colors cursor-pointer"
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
