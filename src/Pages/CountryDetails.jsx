import { useParams, useNavigate } from "react-router";
import { useCountries } from "../../Hooks/useCountries";
import Spinner from "../../ui/Spinner";
import DetailsCard from "../../ui/DetailsCard";
import Map from "./Map";
import { useState } from "react";

function DetailRow({ label, value }) {
  return (
    <p className="flex flex-col gap-4  leading-6 ">
      <span className="text-xl font-bold uppercase tracking-wide text-text-secondary">
        {label}
      </span>
      <span className=" text-text-primary font-bold text-xl lg:text-2xl line-clamp-2">
        {value || "N/A"}
      </span>
    </p>
  );
}

function CountryDetails() {
  const { code } = useParams();
  const { countries, isPending, isError, error } = useCountries();
  const country = countries.find((country) => country.codes.alpha_2 === code);
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500">{error.message}</p>;
  if (!country) return <p>Country cannot be found</p>;

  const {
    names,
    region,
    capitals,
    flag,
    population,
    languages,
    area,
    currencies,
    subregion,
    tlds,
    coordinates: { lat, lng },
  } = country;

  const officialLanguages = languages?.map((language) => language?.name);
  const formattedPopulation = population?.toLocaleString();
  const formattedArea = area?.kilometers.toLocaleString();

  function handleCick() {
    setShowMap((show) => !show);
    navigate("map");
  }

  return (
    <section className="space-y-16 text-text-secondary pb-16 px-6 sm:px-12 lg:px-24">
      <button
        className="inline-flex items-center gap-2 rounded-lg bg-neutral-card-bg px-6 py-4 text-lg cursor-pointer text-text-primary font-semibold shadow-sm border border-neutral-border transition-all hover:bg-brand-light hover:text-brand-blue active:scale-95"
        onClick={() => navigate(-1)}
      >
        <span aria-hidden="true">&larr;</span>
        <span>Back</span>
      </button>
      <div className="grid gap-12 lg:row-[2/-2] lg:gap-16  grid-cols-1 lg:grid-cols-[minmax(0,64rem)_1fr] items-start lg:items-center">
        <div className="lg:col-span-1">
          <img
            src={flag.url_png}
            alt={`${names.common} flag`}
            className="w-full h-full rounded-xl object-cover shadow-lg border border-neutral-border lg:col-span-1"
          />
        </div>

        <div className="space-y-8 lg:space-y-10 h-full">
          <div className="space-y-4">
            <p className="text-xl lg:mt-0 font-bold uppercase tracking-widest b text-text-primary bg-neutral-card-bg inline-block px-4 py-2 rounded-lg border  border-neutral-border shadow-sm">
              {region}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary lg:mt-0 uppercase tracking-wide">
              {names.common}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12  ">
            <div className="space-y-8">
              <DetailRow
                label="Native name"
                value={names?.native?.eng?.common}
              />
              <DetailRow label="Population" value={formattedPopulation} />
              <DetailRow label="Sub region" value={subregion} />
              <DetailRow label="Capital" value={capitals?.[0]?.name} />
            </div>

            <div className="space-y-8">
              <DetailRow label="Top level domain" value={tlds?.[0]} />
              <DetailRow label="Currencies" value={currencies?.[0]?.name} />
              <DetailRow
                label="Languages"
                value={officialLanguages?.join(", ")}
              />
              <DetailRow label="Area" value={`${formattedArea} km2`} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        <DetailsCard label="region" value={subregion} />
        <DetailsCard label="population" value={formattedPopulation} />
        <DetailsCard
          label="official language"
          value={officialLanguages.join(", ")}
        />
      </div>
      <button
        onClick={handleCick}
        className=" cursor-pointer flex items-center justify-center px-6 py-6 text-slate-50 hover:bg-brand-light hover:text-brand-blue transition-all duration-300 ease-in-out mt-6 text-xl uppercase font-semibold rounded-lg shadow-sm bg-brand-accent border-neutral-border mx-auto w-auto align-middle"
      >
        {!showMap ? "See country on map" : "Hide Map"}
      </button>{" "}
      */
      {/* <div className={`w-full h-96 ${showMap ? "block" : "hidden"}`}>
        {showMap && (
          <Map lat={lat} lng={lng} name={names.common} flag={flag.url_png} />
        )}
      </div>
      <button
        onClick={() => setShowMap((show) => !show)}
        className=" cursor-pointer flex items-center justify-center px-6 py-6 text-slate-50 hover:bg-brand-light hover:text-brand-blue transition-all duration-300 ease-in-out mt-6 text-xl uppercase font-semibold rounded-lg shadow-sm bg-brand-accent border-neutral-border mx-auto w-auto align-middle"
      >
        {!showMap ? "See country on map" : "Hide Map"}
      </button> */}
    </section>
  );
}

export default CountryDetails;
