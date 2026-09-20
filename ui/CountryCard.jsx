import { Link } from "react-router";

function CountryCard({ country }) {
  const {
    names,
    flag,
    population,
    capitals,
    region,
    codes,
  } = country || {};

  const commonName = names?.common || "Unknown";
  const alpha_2 = codes?.alpha_2 || codes?.alpha_3 || "";
  const flagSrc = flag?.url_png || flag?.url_svg || "";
  const formattedPopulation = typeof population === "number" ? population.toLocaleString() : (population || "N/A");

  return (
    <article className="flex flex-col justify-between rounded-3xl border border-neutral-border bg-neutral-card-bg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        className="h-64 sm:h-72 w-full object-cover rounded-t-2xl bg-neutral-100"
        src={flagSrc}
        alt={`${commonName} flag`}
        loading="lazy"
      />

      <div className="space-y-3 px-6 py-6 text-text-primary flex-1 flex flex-col justify-between">
        <h2 className="text-2xl font-bold border-b-2 border-neutral-border pb-6 truncate" title={commonName}>
          {commonName}
        </h2>

        <div className="space-y-2 divide-y-2 divide-neutral-border text-xl">
          <p className="py-4 flex flex-col justify-between gap-2">
            <span className="font-semibold uppercase text-text-secondary">Population</span>
            <span className="font-medium">{formattedPopulation}</span>
          </p>
          <div className="flex justify-between my-4 pt-2">
            <p className="flex flex-col justify-between items-center gap-2">
              <span className="font-semibold uppercase text-text-secondary">Region</span>
              <span className="font-medium">{region || "N/A"}</span>
            </p>
            <p className="flex flex-col justify-between items-center gap-2">
              <span className="font-semibold uppercase text-text-secondary">Capital</span>
              <span className="font-medium truncate max-w-[120px]" title={capitals?.[0]?.name}>
                {capitals?.[0]?.name || "N/A"}
              </span>
            </p>
          </div>
        </div>

        <Link
          to={`/country/${alpha_2}`}
          className="w-full bg-brand-blue hover:bg-blue-800 text-blue-50 font-semibold py-3 px-4 mt-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-xl"
        >
          View Country
        </Link>
      </div>
    </article>
  );
}

export default CountryCard;
