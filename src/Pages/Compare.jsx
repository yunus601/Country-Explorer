import { useState } from "react";
import { useCountries } from "../../Hooks/useCountries";
import CompareCard from "../../ui/CompareCard";
import CompareTable from "../../ui/CompareTable";
import Spinner from "../../ui/Spinner";

function Compare() {
  const { countries = [], isPending, isError, error } = useCountries();
  const [selectedCountryA, setSelectedCountryA] = useState(null);
  const [selectedCountryB, setSelectedCountryB] = useState(null);

  const defaultcountryA = countries?.find(
    (country) => country?.names?.common === "Argentina"
  ) || countries?.[0];

  const defaultcountryB = countries?.find(
    (country) => country?.names?.common === "Canada"
  ) || countries?.[1];

  const activeCountryA = selectedCountryA || defaultcountryA;
  const activeCountryB = selectedCountryB || defaultcountryB;

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500 text-center py-12">Error loading countries: {error?.message}</p>;

  return (
    <div className="py-6 px-4 sm:px-8 space-y-12">
      <div className="flex mx-auto flex-col items-center justify-center gap-3 text-center max-w-3xl">
        <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-blue">
          Comparative Analysis &bull; Bi-National Benchmarking
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary tracking-tight">
          Compare Sovereign Territories
        </h1>
        <p className="text-xl text-text-secondary font-normal">
          Examine demographic distributions, territorial landmass, and administrative systems between two nations.
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-8 lg:gap-16 relative max-w-6xl mx-auto">
        <CompareCard
          value="A"
          defaultCountry={activeCountryA}
          selectedCountry={selectedCountryA}
          onSelectCountry={setSelectedCountryA}
        />

        <div className="uppercase bg-[#0a192f] text-neutral-subtle font-mono font-bold rounded-full w-14 h-14 sm:w-16 sm:h-16 text-lg tracking-widest flex items-center justify-center shrink-0 border border-neutral-border shadow-sm sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
          vs
        </div>

        <CompareCard
          value="B"
          defaultCountry={activeCountryB}
          selectedCountry={selectedCountryB}
          onSelectCountry={setSelectedCountryB}
        />
      </div>

      <CompareTable countryA={activeCountryA} countryB={activeCountryB} />
    </div>
  );
}

export default Compare;
