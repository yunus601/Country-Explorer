import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import CountryList from "../../ui/CountryList";
import Search from "../../ui/Search";
import { useDebounce } from "../../utils/debounce";
import { useCountries } from "../../Hooks/useCountries";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const regionParam = searchParams.get("region") || "";
  const [searchTerm, setSearchTerm] = useState("");

  const {
    countries = [],
    isPending,
    isError,
    error,
  } = useCountries(regionParam);

  const debouncedValue = useDebounce(searchTerm, 150);
  const targetText = debouncedValue.trim().toLowerCase();

  function handleSetRegion(newRegion) {
    if (newRegion) {
      setSearchParams({ region: newRegion });
    } else {
      setSearchParams({});
    }
  }

  const filteredCountries = useMemo(() => {
    if (!countries || !Array.isArray(countries)) return [];
    if (!targetText) return countries;

    return countries.filter((country) => {
      const name = country.names?.common?.toLowerCase() || "";
      const reg = country?.region?.toLowerCase() || "";
      const capitals = country?.capitals?.[0]?.name?.toLowerCase() || "";
      const subregion = country?.subregion?.toLowerCase() || "";

      return (
        name.includes(targetText) ||
        reg.includes(targetText) ||
        capitals.includes(targetText) ||
        subregion.includes(targetText)
      );
    });
  }, [countries, targetText]);

  return (
    <div className="space-y-8">
      {/* Editorial Index Masthead */}
      <header className="border-b border-neutral-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-rise-in">
        <div className="space-y-2">
          <span className="font-mono text-[11px] uppercase font-bold tracking-[0.18em] text-brand-accent block">
            Almanac &bull; Geopolitical Index
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text-primary leading-[0.95] max-w-3xl">
            Sovereign Nations Directory
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Examine international demographics, territorial divisions, and
            geopolitical data across all five continents.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="shrink-0">
          <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-text-secondary bg-neutral-card-bg px-3 py-2 rounded-sm border border-neutral-border shadow-sm">
            {filteredCountries.length}{" "}
            {filteredCountries.length === 1 ? "Territory" : "Territories"}
          </span>
        </div>
      </header>

      {/* Search & Filtering */}
      <Search
        searchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
        region={regionParam}
        onSetRegion={handleSetRegion}
      />

      {/* Countries Grid */}
      <CountryList
        filteredCountries={filteredCountries}
        isError={isError}
        isPending={isPending}
        error={error}
        region={regionParam}
        onSetRegion={handleSetRegion}
      />
    </div>
  );
}

export default Home;
