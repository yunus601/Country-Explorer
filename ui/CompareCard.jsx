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
  const { names, flag, capitals, region, population } = activeCountry || {};
  const src = flag?.url_png || activeCountry?.flag?.url_svg || "";
  const commonName = names?.common || "Select Country";
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

  const isA = value === "A";

  return (
    <div
      ref={dropdownRef}
      className="w-full max-w-2xl px-6 py-8 md:px-10 bg-neutral-card-bg rounded-2xl border border-neutral-border shadow-xs relative flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className={`font-mono text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-md border ${
            isA
              ? "bg-blue-50 text-brand-blue border-blue-200"
              : "bg-orange-50 text-brand-accent border-orange-200"
          }`}
        >
          Territory {value}
        </span>
        <span className="font-mono text-xs text-text-secondary">
          {activeCountry?.codes?.alpha_2 || ""}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
        <div className="h-28 w-44 rounded-xl overflow-hidden border border-neutral-border bg-neutral-subtle shrink-0 shadow-2xs">
          {src ? (
            <img
              loading="lazy"
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center font-mono text-xs text-text-secondary">
              No Flag
            </div>
          )}
        </div>

        <div className="space-y-1 min-w-0">
          <h2 className="font-display font-bold text-3xl text-text-primary tracking-tight truncate" title={commonName}>
            {commonName}
          </h2>
          <p className="text-sm font-medium text-text-secondary">
            {region || "N/A"} &bull; {capitals?.[0]?.name || "N/A"}
          </p>
          <p className="font-mono text-xs font-bold text-text-primary pt-1">
            Pop: {typeof population === "number" ? population.toLocaleString() : (population || "N/A")}
          </p>
        </div>
      </div>

      <p className="text-text-secondary text-base sm:text-lg mt-8 font-medium">
        Search to benchmark another territory against {commonName}.
      </p>

      <div className="relative mt-4">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => {
            if (searchInput.trim()) setShowDropdown(true);
          }}
          className="w-full rounded-xl border border-neutral-border bg-neutral-card-bg px-5 py-3.5 text-text-primary font-semibold text-lg shadow-2xs outline-none transition focus:border-brand-blue"
          placeholder="Search nation name..."
        />

        {showDropdown && matchingCountries.length > 0 && (
          <ul className="absolute left-0 right-0 top-full mt-2 bg-neutral-card-bg border border-neutral-border rounded-xl shadow-xl z-30 max-h-60 overflow-y-auto py-2">
            {matchingCountries.map((c) => (
              <li
                key={c.uuid || c.codes?.alpha_2}
                onClick={() => handleSelect(c)}
                className="px-5 py-3 hover:bg-neutral-subtle cursor-pointer flex items-center justify-between transition-colors text-base"
              >
                <span className="font-semibold text-text-primary">
                  {c.names?.common}
                </span>
                <span className="font-mono text-xs text-text-secondary uppercase">
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
