import formatArea from "../utils/formatArea";
import formatPopulation from "../utils/formatPopulation";
import { Link } from "react-router";

function RegionsCard({ region = [], src, countries = 0, name }) {
  const regionName = name || region[0]?.region || "Unknown Region";

  const totalPopulation = region.reduce(
    (total, curr) => total + (Number(curr?.population) || 0),
    0
  );

  const totalArea = region.reduce(
    (total, curr) => total + (Number(curr?.area?.miles || curr?.area?.kilometers || curr?.area) || 0),
    0
  );

  const formattedPopulation = formatPopulation(totalPopulation);
  const formattedArea = formatArea(totalArea);

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-lg bg-neutral-card-bg shadow-md transition-shadow duration-200 hover:shadow-lg flex flex-col justify-between border border-neutral-border">
      <div className="relative">
        <p className="absolute bg-brand-blue px-3 py-3 text-center left-2 top-2 uppercase rounded-lg text-blue-50 font-semibold text-lg">
          {countries} countries
        </p>
        <img
          src={src}
          alt={regionName}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 p-6 flex-1 flex flex-col justify-between">
        <div className="py-4 border-b-2 border-text-primary">
          <h3 className="text-2xl font-semibold text-slate-900 uppercase tracking-wider">
            {regionName}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-4 gap-6 border-b-2 border-text-primary py-6">
          <div className="flex flex-col items-start gap-2 justify-center">
            <p className="uppercase text-text-secondary font-semibold">
              population
            </p>
            <p className="italic font-bold text-2xl text-text-primary">
              {formattedPopulation}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase text-text-secondary font-semibold">area</p>
            <p className="italic font-bold text-2xl text-text-primary">
              {formattedArea}
            </p>
          </div>
        </div>

        <Link
          to={`/?region=${encodeURIComponent(regionName)}`}
          className="w-full bg-brand-blue hover:bg-blue-800 text-blue-50 font-semibold py-3 px-4 mt-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-xl"
        >
          View Countries
        </Link>
      </div>
    </div>
  );
}

export default RegionsCard;
