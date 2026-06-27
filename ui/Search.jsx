function Search({ searchTerm, onSetSearchTerm, region, onSetRegion }) {
  return (
    <div className="flex w-full items-center justify-between gap-4 text-text-secondary text-xl">
      <input
        value={searchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
        className="w-full max-w-xl rounded-md border border-neutral-border bg-neutral-card-bg px-4 py-4"
        placeholder="Search for a country"
      />
      <select
        value={region}
        onChange={(e) => onSetRegion(e.target.value)}
        className="w-72 rounded-md border border-neutral-border bg-neutral-card-bg px-4 py-2 outline-none"
      >
        <option value="">Filter by Regions</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia </option>
        <option value="Americas">Americas</option>
        <option value="Africa"> Africa</option>
      </select>
    </div>
  );
}

export default Search;
