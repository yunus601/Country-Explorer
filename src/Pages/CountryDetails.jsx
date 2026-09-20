import { useParams, useNavigate } from "react-router";
import { useCountries } from "../../Hooks/useCountries";
import Spinner from "../../ui/Spinner";
import DetailsCard from "../../ui/DetailsCard";
import { FaArrowLeft, FaMapMarkedAlt } from "react-icons/fa";

function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5 py-1">
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
        {label}
      </span>
      <span className="text-text-primary font-bold text-xl line-clamp-2">
        {value || "N/A"}
      </span>
    </div>
  );
}

function CountryDetails() {
  const { code } = useParams();
  const { countries = [], isPending, isError, error } = useCountries();
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
    coordinates,
    codes,
  } = country;

  const officialLanguages = languages?.map((language) => language?.name).filter(Boolean).join(", ") || "N/A";
  const formattedPopulation = typeof population === "number" ? population.toLocaleString() : (population || "N/A");
  const areaNumber = area?.kilometers || area?.miles || area;
  const formattedArea = areaNumber ? `${Number(areaNumber).toLocaleString()} km²` : "N/A";
  const flagSrc = flag?.url_png || flag?.url_svg || "";
  const nativeName = names?.native ? Object.values(names.native)[0]?.common : names?.common;
  const lat = coordinates?.lat != null ? `${Math.abs(coordinates.lat).toFixed(2)}° ${coordinates.lat >= 0 ? 'N' : 'S'}` : null;
  const lng = coordinates?.lng != null ? `${Math.abs(coordinates.lng).toFixed(2)}° ${coordinates.lng >= 0 ? 'E' : 'W'}` : null;

  function handleMapClick() {
    navigate("map");
  }

  return (
    <section className="space-y-12 text-text-secondary pb-16 px-4 sm:px-8">
      {/* Back Button */}
      <div>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-neutral-card-bg px-6 py-3.5 text-lg cursor-pointer text-text-primary font-bold shadow-2xs border border-neutral-border transition-all hover:bg-neutral-subtle active:scale-98"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-sm" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Specimen Folio */}
      <div className="rounded-3xl border border-neutral-border bg-neutral-card-bg p-6 sm:p-10 shadow-xs grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[minmax(0,48rem)_1fr] items-start">
        {/* Left: Flag Folio */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-neutral-border bg-neutral-subtle aspect-[16/10] shadow-sm">
            <img
              src={flagSrc}
              alt={`${names?.common} flag`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-text-secondary px-1">
            <span>ISO-3166: <strong className="text-text-primary">{codes?.alpha_2 || code}</strong></span>
            {lat && lng && <span>{lat}, {lng}</span>}
          </div>
        </div>

        {/* Right: Demographic Dossier */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue bg-neutral-subtle px-3 py-1.5 rounded-md border border-neutral-border inline-block">
              {region} &bull; {subregion || "Territory"}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              {names?.common}
            </h1>

            {names?.official && names.official !== names.common && (
              <p className="text-sm text-text-secondary italic">
                Official: {names.official}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-border">
            <div className="space-y-5">
              <DetailRow label="Native Name" value={nativeName} />
              <DetailRow label="Population" value={formattedPopulation} />
              <DetailRow label="Sub Region" value={subregion} />
              <DetailRow label="Capital City" value={capitals?.[0]?.name} />
            </div>

            <div className="space-y-5">
              <DetailRow label="Top Level Domain" value={tlds?.[0]} />
              <DetailRow label="Currency" value={currencies?.[0]?.name ? `${currencies[0].name} (${currencies[0].code || currencies[0].symbol || ''})` : null} />
              <DetailRow label="Languages" value={officialLanguages} />
              <DetailRow label="Total Surface Area" value={formattedArea} />
            </div>
          </div>
        </div>
      </div>

      {/* Triad Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        <DetailsCard label="region" value={subregion || region} />
        <DetailsCard label="population" value={formattedPopulation} />
        <DetailsCard label="official language" value={officialLanguages} />
      </div>

      {/* Map Action Button */}
      <div className="text-center pt-4">
        <button
          onClick={handleMapClick}
          className="cursor-pointer inline-flex items-center gap-3 px-8 py-5 text-blue-50 hover:bg-blue-900 transition-colors text-xl uppercase font-bold rounded-xl shadow-xs bg-brand-blue border border-brand-blue"
        >
          <FaMapMarkedAlt className="text-lg" />
          <span>See Country on Map</span>
        </button>
      </div>
    </section>
  );
}

export default CountryDetails;
