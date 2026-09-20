import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import CountryCard from "./CountryCard";
import Spinner from "./Spinner";

function CountryList({ filteredCountries = [], isError, isPending, error }) {
  const [showAll, setShowAll] = useState(false);

  const displayCountries = filteredCountries?.slice(0, 12);

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <p className="text-xl text-red-500 text-center">{error?.message || "Failed to load countries"}</p>;
  }

  if (!filteredCountries || filteredCountries.length === 0) {
    return (
      <div className="text-center py-16 text-text-secondary text-2xl">
        <p>No countries found matching your criteria.</p>
      </div>
    );
  }

  const countriesToRender = showAll ? filteredCountries : displayCountries;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {countriesToRender.map((country, idx) => (
          <CountryCard
            country={country}
            key={country.uuid || country.codes?.alpha_2 || idx}
          />
        ))}
      </div>
      {filteredCountries.length > 12 && (
        <div className="text-center mt-12">
          <ButtonPrimary onClick={() => setShowAll((show) => !show)}>
            <span>{showAll ? "Show less" : "Load more countries"}</span>
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
}

export default CountryList;
