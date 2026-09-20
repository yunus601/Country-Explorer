import { useState, useRef, useEffect } from "react";
import { useCountries } from "../Hooks/useCountries";
import { useDebounce } from "../utils/debounce";

function CompareCard({
  value,
  defaultCountry,
  selectedCountry,
  onSelectCountry,
}) {
  const { countries = [] } = useCountries();
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const debouncedSearchInput = useDebounce(searchInput, 200);
  const dropdownRef = useRef(null);

  const activeCountry = selectedCountry || defaultCountry;
  const { names, flag } = activeCountry || {};
  const src = flag?.url_png || activeCountry?.flag?.url_png || "";
  const commonName = names?.common || activeCountry?.names?.common || "Country";
  const alt = `${commonName} flag`;

  const targetText = debouncedSearchInput.trim().toLowerCase();

  const matchingCountries = countries.filter((c) => {
    if (!targetText) return false;
    const name = c?.names?.common?.toLowerCase() || "";
    return name.includes(targetText);
  }).slice(0, 6);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(country) {
    onSelectCountry(country);
    setSearchInput("");
    setShowDropdown(false);
  }

  return (
    <div
      ref={dropdownRef}
      className="w-full max-w-2xl px-6 py-6 md:px-10 bg-neutral-card-bg rounded-2xl border border-neutral-border shadow-sm relative"
    >
      <h3
        className={`text-lg uppercase font-bold mb-6 ${
          value === "A" ? "text-blue-700" : "text-green-700"
        }`}
      >
        country {value}
      </h3>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="h-32 w-full max-w-xs object-cover rounded-lg shadow-md lg:w-48 bg-neutral-100"
        />
        <div className="flex flex-col gap-4 items-start h-full w-full">
          <h2 className="font-bold text-3xl text-text-primary mt-0 self-start">
            {commonName}
          </h2>
        </div>
      </div>

      <p className="text-text-secondary text-base sm:text-lg mt-8 font-semibold">
        Search for another country to compare with {commonName}.
      </p>

      <div className="relative mt-5">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => {
            if (searchInput.trim()) setShowDropdown(true);
          }}
          className="w-full max-w-full rounded-xl border border-neutral-border bg-neutral-card-bg px-6 py-4 text-text-primary font-semibold text-lg shadow-xs outline-none transition focus:border-brand-blue"
          placeholder="Search for a country"
        />

        {showDropdown && matchingCountries.length > 0 && (
          <ul className="absolute left-0 right-0 top-full mt-2 bg-neutral-card-bg border border-neutral-border rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto py-2">
            {matchingCountries.map((c) => (
              <li
                key={c.uuid || c.codes?.alpha_2}
                onClick={() => handleSelect(c)}
                className="px-6 py-3 hover:bg-brand-light cursor-pointer flex items-center justify-between transition-colors text-lg"
              >
                <span className="font-semibold text-text-primary">
                  {c.names?.common}
                </span>
                <span className="text-sm text-text-secondary uppercase">
                  {c.region}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CompareCard;
