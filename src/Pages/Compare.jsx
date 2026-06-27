import { useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import CompareCard from "../../ui/CompareCard";
import CompareTable from "../../ui/CompareTable";
import Spinner from "../../ui/Spinner";

function Compare() {
  const { countries, isPending, isError, error } = useCountries();
  const [selectedCountryA, setSelectedCountryA] = useState(null);
  const [selectedCountryB, setSelectedCountryB] = useState(null);
  const defaultcountryA = countries?.find(
    (country) => country?.names?.common === "Argentina",
  );
  const defaultcountryB = countries?.find(
    (country) => country?.names?.common === "Canada",
  );

  const activeCountryA = selectedCountryA || defaultcountryA;
  const activeCountryB = selectedCountryB || defaultcountryB;

  if (isPending) return <Spinner />;
  if (isError) return <p>Error loading countries:{error?.message}</p>;
  return (
    <div className="py-6 px-6 md:px-12 lg:px-16 space-y-12">
      <div className="flex mx-auto flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl text-text-primary">
          Compare Countries
        </h2>
        <p className="text-xl text-text-secondary font-medium text-center max-w-3xl">
          Analyze the demographic differences between two different countries
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-16 space-y-8 sm:flex-row sm:flex-wrap sm:gap-8 lg:gap-24 relative">
        <CompareCard
          value="A"
          defaultCountry={activeCountryA}
          selectedCountry={selectedCountryA}
          onSelectCountry={setSelectedCountryA}
        />
        <div className="uppercase bg-violet-950 text-bold rounded-full p-6 text-violet-50 text-2xl lg:p-10 lg:text-3xl tracking-wider flex items-center justify-center  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
