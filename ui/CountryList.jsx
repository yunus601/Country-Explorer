import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

import CountryCard from "./CountryCard";

import Spinner from "./Spinner";

function CountryList({ filteredCountries, isError, isPending, error }) {
  const [showAll, setShowAll] = useState(false);

  const displayCountries = filteredCountries?.slice(0, 12);

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <p className="text-xl text-red-500">{error.message}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-18">
        {showAll
          ? filteredCountries.map((country) => (
              <CountryCard country={country} key={country.uuid} />
            ))
          : displayCountries.map((country) => (
              <CountryCard country={country} key={country.uuid} />
            ))}
      </div>
      <div className="text-center">
        <ButtonPrimary onClick={() => setShowAll((show) => !show)}>
          <span>Load more countries</span>
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default CountryList;
