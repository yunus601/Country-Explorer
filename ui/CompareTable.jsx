import formatPopulation from "../utils/formatPopulation";

function CompareTable({ countryA, countryB }) {
  const popA = Number(countryA?.population) || 0;
  const popB = Number(countryB?.population) || 0;
  const maxPop = Math.max(popA, popB) || 1;
  const rangeValueA = Math.round((popA / maxPop) * 100);
  const rangeValueB = Math.round((popB / maxPop) * 100);
  const ishigherPop = popA > popB;

  const flagA = countryA?.flag?.url_png || countryA?.flag?.url_svg || "";
  const flagB = countryB?.flag?.url_png || countryB?.flag?.url_svg || "";

  const languagesA = countryA?.languages?.map((l) => l.name).filter(Boolean).join(", ") || "N/A";
  const languagesB = countryB?.languages?.map((l) => l.name).filter(Boolean).join(", ") || "N/A";

  const currencyA = countryA?.currencies?.[0]?.name ? `${countryA.currencies[0].name} (${countryA.currencies[0].code || ''})` : "N/A";
  const currencyB = countryB?.currencies?.[0]?.name ? `${countryB.currencies[0].name} (${countryB.currencies[0].code || ''})` : "N/A";

  const areaA = Number(countryA?.area?.kilometers || countryA?.area?.miles || countryA?.area) || 0;
  const areaB = Number(countryB?.area?.kilometers || countryB?.area?.miles || countryB?.area) || 0;

  return (
    <div className="@container mt-8 lg:px-8 w-full max-w-5xl mx-auto text-lg tracking-normal overflow-x-auto">
      <div className="min-w-[560px] rounded-2xl border border-neutral-border bg-neutral-card-bg shadow-xs overflow-hidden grid grid-cols-[1.2fr_1fr_1fr] divide-y divide-neutral-border">
        {/* Ledger Header */}
        <div className="col-span-3 grid grid-cols-subgrid bg-neutral-subtle px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-text-secondary items-center">
          <div>STATISTICAL INDICATOR</div>
          <div className="flex items-center gap-3">
            {flagA && (
              <img
                className="object-cover h-6 w-9 rounded-sm border border-neutral-border"
                src={flagA}
                alt=""
              />
            )}
            <span className="truncate font-sans font-bold text-sm text-text-primary">
              {countryA?.names?.common || "Territory A"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {flagB && (
              <img
                className="object-cover h-6 w-9 rounded-sm border border-neutral-border"
                src={flagB}
                alt=""
              />
            )}
            <span className="truncate font-sans font-bold text-sm text-text-primary">
              {countryB?.names?.common || "Territory B"}
            </span>
          </div>
        </div>

        {/* Indicator Row: Population */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div>
            <span className="font-bold text-text-primary block text-base">Population</span>
            <span className="font-mono text-xs text-text-secondary">Inhabitants</span>
          </div>
          <div className="space-y-2">
            <span className={`font-bold text-2xl ${ishigherPop ? "text-brand-blue" : "text-text-primary"}`}>
              {formatPopulation(popA)}
            </span>
            <div className="w-full h-2 bg-neutral-subtle rounded-full overflow-hidden border border-neutral-border/50">
              <div
                style={{ width: `${rangeValueA}%` }}
                className="h-full rounded-full bg-brand-blue transition-all duration-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className={`font-bold text-2xl ${!ishigherPop ? "text-brand-accent" : "text-text-primary"}`}>
              {formatPopulation(popB)}
            </span>
            <div className="w-full h-2 bg-neutral-subtle rounded-full overflow-hidden border border-neutral-border/50">
              <div
                style={{ width: `${rangeValueB}%` }}
                className="h-full rounded-full bg-brand-accent transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Indicator Row: Surface Area */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div>
            <span className="font-bold text-text-primary block text-base">Surface Area</span>
            <span className="font-mono text-xs text-text-secondary">Square Kilometers</span>
          </div>
          <div className="font-medium text-text-primary text-xl">
            {areaA ? `${areaA.toLocaleString()} km²` : "N/A"}
          </div>
          <div className="font-medium text-text-primary text-xl">
            {areaB ? `${areaB.toLocaleString()} km²` : "N/A"}
          </div>
        </div>

        {/* Indicator Row: Continental Division */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Continental Division</div>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-neutral-subtle rounded-md border border-neutral-border text-text-primary inline-block">
              {countryA?.region || "N/A"}
            </span>
          </div>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-neutral-subtle rounded-md border border-neutral-border text-text-primary inline-block">
              {countryB?.region || "N/A"}
            </span>
          </div>
        </div>

        {/* Indicator Row: Subregion */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Subregion</div>
          <div className="font-medium text-text-primary">{countryA?.subregion || "N/A"}</div>
          <div className="font-medium text-text-primary">{countryB?.subregion || "N/A"}</div>
        </div>

        {/* Indicator Row: Capital City */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Capital City</div>
          <div className="font-medium text-text-primary">{countryA?.capitals?.[0]?.name || "N/A"}</div>
          <div className="font-medium text-text-primary">{countryB?.capitals?.[0]?.name || "N/A"}</div>
        </div>

        {/* Indicator Row: Languages */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Official Languages</div>
          <div className="font-medium text-text-primary text-base leading-relaxed">{languagesA}</div>
          <div className="font-medium text-text-primary text-base leading-relaxed">{languagesB}</div>
        </div>

        {/* Indicator Row: Currencies */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Monetary System</div>
          <div className="font-medium text-text-primary text-base">{currencyA}</div>
          <div className="font-medium text-text-primary text-base">{currencyB}</div>
        </div>

        {/* Indicator Row: Timezones */}
        <div className="col-span-3 grid grid-cols-subgrid py-5 px-6 bg-neutral-card-bg text-text-secondary items-center">
          <div className="font-bold text-text-primary text-base">Timezone Records</div>
          <div className="font-mono text-sm text-text-primary">{countryA?.timezones?.[0] || "N/A"}</div>
          <div className="font-mono text-sm text-text-primary">{countryB?.timezones?.[0] || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default CompareTable;
