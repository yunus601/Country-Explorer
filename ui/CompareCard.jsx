import { useEffect, useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { useDebounce } from "../utils/debounce";
import Spinner from "./Spinner";

function CompareCard({
  value,
  defaultCountry,
  selectedCountry,
  onSelectCountry,
}) {
  const { countries } = useCountries();
  console.log(countries);
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebounce(searchInput, 400);

  const targetText = debouncedSearchInput.toLowerCase();

  const targetCountry = countries.find((country) => {
    if (!targetText) return null;

    const name = country?.names?.common?.toLowerCase() || "";

    return name.includes(targetText);
  });

  useEffect(() => {
    if (targetCountry) {
      onSelectCountry(targetCountry);
    }
  }, [targetCountry, onSelectCountry]);

  const activeCountry = selectedCountry || defaultCountry;

  const { names, flag } = activeCountry || {};

  const src = flag?.url_png || activeCountry?.flag?.url_png;
  const alt = `${names?.common || activeCountry?.names?.common} flag`;

  return (
    <div className="w-full max-w-2xl px-6 py-6 md:px-10 bg-neutral-card-bg rounded-lg">
      <h3
        className={`text-lg uppercase font-bold mb-6 ${value === "A" ? "text-blue-700" : "text-green-700"}`}
      >
        country {value}
      </h3>
      <div className="flex md:flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="h-32 w-full max-w-xs object-cover rounded-lg shadow-md lg:w-48"
        />
        <div className="flex flex-col gap-6 items-start h-full w-full">
          <h2 className="font-bold text-3xl text-text-primary mt-0 self-start">
            {names?.common || activeCountry?.names?.common}
          </h2>
        </div>
      </div>
      <p className="text-text-secondary text-base sm:text-lg mt-8 font-semibold">
        Search for another country to compare with{" "}
        {names?.common || activeCountry?.names?.common}.
      </p>
      <input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className="mt-5 w-full max-w-full rounded-xl border border-neutral-border bg-neutral-card-bg px-6 py-4 text-text-primary font-semibold text-lg shadow-md outline-none transition focus:border-brand-blue"
        placeholder="Search for a country"
      />
    </div>
  );
}

export default CompareCard;
