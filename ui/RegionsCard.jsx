import formatArea from "../utils/formatArea";
import formatPopulation from "../utils/formatPopulation";
import { Link } from "react-router";

function RegionsCard({ region, src, countries }) {
  let population = region.reduce((total, curr) => total + curr.population, 0);
  let area = region.reduce((total, curr) => total + curr.area.miles, 0);

  const name = region[0]?.region || "Unknown Region";

  population = formatPopulation(population);
  area = formatArea(area);

  return (
    <div className=" max-w-lg overflow-hidden rounded-lg bg-neutral-card-bg shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="relative">
        <p className="absolute bg-brand-blue px-3 py-3 text-center left-2 top-2 uppercase rounded-lg text-blue-50 font-semibold text-lg">
          {countries} countries
        </p>
        <img src={src} alt="Product" className="h-64 w-full object-cover" />
      </div>
      <div className="space-y-4 p-6 ">
        <div className="py-4 border-b-2 border-text-primary">
          <span>
            <h3 className="text-2xl font-semibold text-slate-900 uppercase tracking-wider">
              {name}
            </h3>
          </span>
          <span></span>
        </div>
        <div className="flex items-center justify-between pt-4 gap-6 border-b-2 border-text-primary py-6 ">
          <div className="flex flex-col items-start gap-2 justify-center">
            <p className="uppercase text-text-secondary font-semibold">
              population
            </p>
            <p className="italic font-bold text-2xl">{population}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase text-text-secondary font-semibold">area</p>
            <p className="italic font-bold text-2xl">{area}</p>
          </div>
        </div>
        <Link className="w-full bg-brand-blue hover:bg-blue-800 text-blue-50 font-semibold py-3 px-4 mt-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
          View Countries
        </Link>
      </div>
    </div>
  );
}

export default RegionsCard;
