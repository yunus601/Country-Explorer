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
    <div className="py-6 px-4 sm:px-8 lg:px-16 space-y-12">
      <div className="flex mx-auto flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl text-text-primary">
          Compare Countries
        </h2>
        <p className="text-xl text-text-secondary font-medium text-center max-w-3xl">
          Analyze the demographic differences between two different countries
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-8 lg:gap-24 relative">
        <CompareCard
          value="A"
          defaultCountry={activeCountryA}
          selectedCountry={selectedCountryA}
          onSelectCountry={setSelectedCountryA}
        />

        <div className="uppercase bg-violet-950 font-bold rounded-full p-6 text-violet-50 text-2xl lg:p-10 lg:text-3xl tracking-wider flex items-center justify-center shrink-0 shadow-md sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
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
