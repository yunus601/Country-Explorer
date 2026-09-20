import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

function CountryCard({ country }) {
  const {
    names,
    flag,
    population,
    capitals,
    region,
    subregion,
    codes,
  } = country || {};

  const commonName = names?.common || "Unknown Territory";
  const alpha_2 = codes?.alpha_2 || codes?.alpha_3 || "";
  const flagSrc = flag?.url_png || flag?.url_svg || "";
  const formattedPopulation = typeof population === "number" ? population.toLocaleString() : (population || "N/A");
  const capitalName = capitals?.[0]?.name || "N/A";

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-neutral-border bg-neutral-card-bg shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Flag Specimen Window */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-subtle border-b border-neutral-border">
        {flagSrc ? (
          <img
            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300"
            src={flagSrc}
            alt={`${commonName} flag`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-text-secondary font-mono text-xs">
            No Flag Record
          </div>
        )}

        {/* Monospaced Geographic Stamp */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {alpha_2 && (
            <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-2xs border border-neutral-border text-text-primary shadow-2xs">
              {alpha_2}
            </span>
          )}
        </div>
      </div>

      {/* Folio Metadata Body */}
      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-baseline justify-between gap-2">
            <h2
              className="font-display text-2xl font-bold text-text-primary tracking-tight truncate group-hover:text-brand-blue transition-colors"
              title={commonName}
            >
              {commonName}
            </h2>
          </div>
          {subregion && (
            <p className="text-xs text-text-secondary font-medium tracking-wide">
              {subregion}
            </p>
          )}
        </div>

        {/* Demographic Folio Rows */}
        <div className="space-y-3 pt-3 border-t border-neutral-border text-lg">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-text-secondary">
              Population
            </span>
            <span className="font-bold text-text-primary text-xl">
              {formattedPopulation}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-border/60">
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-text-secondary block">
                Region
              </span>
              <span className="font-semibold text-text-primary text-base truncate block">
                {region || "N/A"}
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-text-secondary block">
                Capital
              </span>
              <span className="font-semibold text-text-primary text-base truncate block" title={capitalName}>
                {capitalName}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/country/${alpha_2}`}
          className="mt-2 w-full bg-brand-blue hover:bg-blue-900 text-blue-50 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-150 text-lg shadow-2xs group/btn"
        >
          <span>View Country</span>
          <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default CountryCard;
