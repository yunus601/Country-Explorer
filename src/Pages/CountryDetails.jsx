import { useParams, useNavigate } from "react-router";
import { useCountries } from "../../Hooks/useCountries";
import Spinner from "../../ui/Spinner";
import DetailsCard from "../../ui/DetailsCard";

function DetailRow({ label, value }) {
  return (
    <p className="flex flex-col gap-4 leading-6">
      <span className="text-xl font-bold uppercase tracking-wide text-text-secondary">
        {label}
      </span>
      <span className="text-text-primary font-bold text-xl lg:text-2xl line-clamp-2">
        {value || "N/A"}
      </span>
    </p>
  );
}

function CountryDetails() {
  const { code } = useParams();
  const { countries, isPending, isError, error } = useCountries();
  const navigate = useNavigate();

  const country = countries?.find(
    (c) =>
      c.codes?.alpha_2?.toUpperCase() === code?.toUpperCase() ||
      c.codes?.alpha_3?.toUpperCase() === code?.toUpperCase()
  );

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500 text-center py-12">{error?.message || "Error loading country"}</p>;
  if (!country) return <p className="text-2xl text-center py-12 text-text-secondary">Country cannot be found</p>;

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
  } = country;

  const officialLanguages = languages?.map((language) => language?.name).filter(Boolean).join(", ") || "N/A";
  const formattedPopulation = typeof population === "number" ? population.toLocaleString() : (population || "N/A");
  const areaNumber = area?.kilometers || area?.miles || area;
  const formattedArea = areaNumber ? `${Number(areaNumber).toLocaleString()} km²` : "N/A";
  const flagSrc = flag?.url_png || flag?.url_svg || "";
  const nativeName = names?.native ? Object.values(names.native)[0]?.common : names?.common;

  function handleMapClick() {
    navigate("map");
  }

  return (
    <section className="space-y-16 text-text-secondary pb-16 px-4 sm:px-8 lg:px-16">
      <button
        className="inline-flex items-center gap-2 rounded-lg bg-neutral-card-bg px-6 py-4 text-lg cursor-pointer text-text-primary font-semibold shadow-sm border border-neutral-border transition-all hover:bg-brand-light hover:text-brand-blue active:scale-95"
        onClick={() => navigate(-1)}
      >
        <span aria-hidden="true">&larr;</span>
        <span>Back</span>
      </button>

      <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-[minmax(0,56rem)_1fr] items-start lg:items-center">
        <div className="w-full">
          <img
            src={flagSrc}
            alt={`${names?.common} flag`}
            className="w-full max-h-[420px] rounded-xl object-cover shadow-lg border border-neutral-border"
          />
        </div>

        <div className="space-y-8 lg:space-y-10 h-full">
          <div className="space-y-4">
            <p className="text-xl font-bold uppercase tracking-widest text-text-primary bg-neutral-card-bg inline-block px-4 py-2 rounded-lg border border-neutral-border shadow-sm">
              {region}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary uppercase tracking-wide">
              {names?.common}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <DetailRow
                label="Native name"
                value={nativeName}
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
                value={officialLanguages}
              />
              <DetailRow label="Area" value={formattedArea} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        <DetailsCard label="region" value={subregion || region} />
        <DetailsCard label="population" value={formattedPopulation} />
        <DetailsCard
          label="official language"
          value={officialLanguages}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleMapClick}
          className="cursor-pointer inline-flex items-center justify-center px-8 py-5 text-slate-50 hover:bg-brand-light hover:text-brand-blue transition-all duration-300 ease-in-out text-xl uppercase font-semibold rounded-lg shadow-sm bg-brand-accent border-neutral-border"
        >
          See country on map
        </button>
      </div>
    </section>
  );
}

export default CountryDetails;
