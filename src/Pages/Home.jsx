import { useState } from "react";
import CountryList from "../../ui/CountryList";
import Search from "../../ui/Search";
import { useDebounce } from "../../utils/debounce";
import { useCountries } from "../../Hooks/useCountries";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const { countries, isPending, isError, error } = useCountries(region);

  const debouncedValue = useDebounce(searchTerm, 100);

  const targetText = debouncedValue.toLowerCase();

  const filteredCountries = countries.filter((country) => {
    if (!targetText) return country;

    const name = country.names?.common?.toLowerCase() || "";
    const region = country?.region?.toLowerCase() || "";
    const capitals = country?.capitals?.[0]?.name?.toLowerCase() || "";

    return (
      name.includes(targetText) ||
      region.includes(targetText) ||
      capitals.includes(targetText)
    );
  });
  return (
    <div className="space-y-12">
      <Search
        searchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
        region={region}
        onSetRegion={setRegion}
      />
      <CountryList
        filteredCountries={filteredCountries}
        isError={isError}
        isPending={isPending}
        error={error}
        region={region}
        onSetRegion={setRegion}
      />
    </div>
  );
}

export default Home;
