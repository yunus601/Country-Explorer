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

  const { countries = [], isPending, isError, error } = useCountries(regionParam);

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
    <div className="space-y-12">
      <Search
        searchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
        region={regionParam}
        onSetRegion={handleSetRegion}
      />
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
