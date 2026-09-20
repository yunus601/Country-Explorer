import formatArea from "../utils/formatArea";
import formatPopulation from "../utils/formatPopulation";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

function RegionsCard({ region = [], src, countries = 0, name }) {
  const regionName = name || region[0]?.region || "Unknown Region";

  const totalPopulation = region.reduce(
    (total, curr) => total + (Number(curr?.population) || 0),
    0,
  );

  const totalArea = region.reduce(
    (total, curr) =>
      total +
      (Number(curr?.area?.miles || curr?.area?.kilometers || curr?.area) || 0),
    0,
  );

  const formattedPopulation = formatPopulation(totalPopulation);
  const formattedArea = formatArea(totalArea);

  return (
    <div className="group w-full max-w-lg overflow-hidden rounded-lg bg-neutral-card-bg shadow-sm border border-neutral-border hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between animate-rise-in">
      {/* Visual Specimen Plate */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-subtle border-b border-neutral-border">
        <img
          src={src}
          alt={regionName}
          className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

        <span className="font-mono text-xs uppercase font-bold tracking-widest absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-2xs border border-neutral-border text-text-primary shadow-2xs">
          {countries} {countries === 1 ? "Territory" : "Territories"}
        </span>

        <h3 className="absolute bottom-3 left-5 font-display text-3xl font-bold text-white drop-shadow-sm">
          {regionName}
        </h3>
      </div>

      {/* Aggregate Stats */}
      <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 py-2">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-text-secondary block">
              Population
            </span>
            <p className="font-bold text-2xl text-text-primary">
              {formattedPopulation}
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-text-secondary block">
              Total Area
            </span>
            <p
              className="font-bold text-2xl text-text-primary truncate"
              title={formattedArea}
            >
              {formattedArea}
            </p>
          </div>
        </div>

        <Link
          to={`/?region=${encodeURIComponent(regionName)}`}
          className="w-full bg-brand-blue hover:bg-blue-900 text-blue-50 font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-150 text-sm shadow-sm group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          <span>View {regionName} Territories</span>
          <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default RegionsCard;
