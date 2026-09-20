import formatPopulation from "../utils/formatPopulation";

function CompareTable({ countryA, countryB }) {
  const countryApopulation = Number(countryA?.population) || 0;
  const countryBpopulation = Number(countryB?.population) || 0;

  const ishigherPopulation = countryApopulation > countryBpopulation;
  const higherPopulation = Math.max(countryApopulation, countryBpopulation) || 1;

  const rangeValueA = Math.round((countryApopulation / higherPopulation) * 100);
  const rangeValueB = Math.round((countryBpopulation / higherPopulation) * 100);

  const flagA = countryA?.flag?.url_png || countryA?.flag?.url_svg || "";
  const flagB = countryB?.flag?.url_png || countryB?.flag?.url_svg || "";

  const languagesA = countryA?.languages?.map((l) => l.name).filter(Boolean).join(", ") || "N/A";
  const languagesB = countryB?.languages?.map((l) => l.name).filter(Boolean).join(", ") || "N/A";

  const currencyA = countryA?.currencies?.[0]?.code || countryA?.currencies?.[0]?.name || "N/A";
  const currencyB = countryB?.currencies?.[0]?.code || countryB?.currencies?.[0]?.name || "N/A";

  return (
    <div className="@container mt-6 lg:px-16 w-full lg:w-3/4 mx-auto text-xl tracking-wider overflow-x-auto">
      <div className="min-w-[500px] rounded-2xl border border-neutral-border bg-neutral-card-bg shadow-sm overflow-hidden grid grid-cols-[1fr_1fr_1fr] gap-x-4 gap-y-2 divide-y divide-neutral-border @lg:gap-x-6">
        <div className="col-span-3 grid grid-cols-subgrid bg-neutral-app-bg px-4 py-3 font-bold uppercase tracking-[0.18em] text-text-primary @lg:px-6 @lg:py-4">
          <div className="text-lg flex items-center">INDICATOR</div>
          <div className="text-lg flex items-center gap-4">
            {flagA && (
              <span>
                <img
                  className="object-cover h-12 w-16 rounded-md"
                  src={flagA}
                  alt=""
                />
              </span>
            )}
            <span className="truncate">{countryA?.names?.common || "Country A"}</span>
          </div>
          <div className="text-lg flex items-center gap-4">
            {flagB && (
              <span>
                <img
                  className="object-cover h-12 w-16 rounded-md"
                  src={flagB}
                  alt=""
                />
              </span>
            )}
            <span className="truncate">{countryB?.names?.common || "Country B"}</span>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Population</div>
          <div
            className={`font-medium ${
              ishigherPopulation ? "text-brand-accent" : "text-gray-400"
            } text-2xl @lg:text-3xl uppercase`}
          >
            <span>{formatPopulation(countryA?.population)}</span>
            <div className="mt-5 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                style={{ width: `${rangeValueA}%` }}
                className={`h-full rounded-full ${
                  ishigherPopulation ? "bg-brand-accent" : "bg-gray-400"
                }`}
              />
            </div>
          </div>
          <div
            className={`font-medium ${
              !ishigherPopulation ? "text-brand-accent" : "text-gray-400"
            } text-2xl @lg:text-3xl uppercase`}
          >
            <span>{formatPopulation(countryB?.population)}</span>
            <div className="mt-5 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                style={{ width: `${rangeValueB}%` }}
                className={`h-full rounded-full ${
                  !ishigherPopulation ? "bg-brand-accent" : "bg-gray-400"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Region</div>
          <div className="font-medium p-2 bg-brand-accent text-blue-50 w-full sm:w-1/2 rounded-lg text-center uppercase shadow-sm">
            {countryA?.region || "N/A"}
          </div>
          <div className="font-medium p-2 bg-brand-accent text-blue-50 w-full sm:w-1/2 rounded-lg text-center uppercase shadow-sm">
            {countryB?.region || "N/A"}
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Subregion</div>
          <div className="font-medium">{countryA?.subregion || "N/A"}</div>
          <div className="font-medium">{countryB?.subregion || "N/A"}</div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Capital</div>
          <div className="font-medium">{countryA?.capitals?.[0]?.name || "N/A"}</div>
          <div className="font-medium">{countryB?.capitals?.[0]?.name || "N/A"}</div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Languages</div>
          <div className="font-medium">{languagesA}</div>
          <div className="font-medium">{languagesB}</div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Currencies</div>
          <div className="font-medium">{currencyA}</div>
          <div className="font-medium">{currencyB}</div>
        </div>

        <div className="col-span-3 grid grid-cols-subgrid py-4 px-4 bg-neutral-card-bg text-text-secondary @lg:py-5 @lg:px-6">
          <div className="font-semibold text-text-primary">Timezones</div>
          <div className="font-medium">{countryA?.timezones?.[0] || "N/A"}</div>
          <div className="font-medium">{countryB?.timezones?.[0] || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default CompareTable;
