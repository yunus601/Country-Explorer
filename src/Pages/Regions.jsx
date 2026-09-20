import RegionsCard from "../../ui/RegionsCard";
import { useQuery } from "@tanstack/react-query";
import { getAllRegions } from "../../Services/RESTAPI";
import Spinner from "../../ui/Spinner";

function Regions() {
  const AllRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const {
    data: regions = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["regions"],
    queryFn: () => getAllRegions(AllRegions),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500 text-center py-12">{error?.message || "Failed to load regions"}</p>;

  const africa = regions.filter(
    (country) => country?.region?.toLowerCase() === "africa"
  );
  const americas = regions.filter(
    (country) => country?.region?.toLowerCase() === "americas"
  );
  const asia = regions.filter(
    (country) => country?.region?.toLowerCase() === "asia"
  );
  const europe = regions.filter(
    (country) => country?.region?.toLowerCase() === "europe"
  );
  const oceania = regions.filter(
    (country) => country?.region?.toLowerCase() === "oceania"
  );

  return (
    <div className="space-y-10 py-6 px-4 sm:px-8">
      <header className="border-b border-neutral-border pb-8 space-y-2">
        <span className="font-mono text-xs uppercase font-bold tracking-widest text-brand-blue block">
          Macro-Geography &bull; Continental Divisions
        </span>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-text-primary">
          Explore by Continental Region
        </h1>
        <p className="text-text-secondary text-xl max-w-3xl font-normal leading-relaxed">
          Navigate the globe through its major continental landmasses. Access demographic aggregates, geographical data, and institutional territory counts.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RegionsCard
          region={africa}
          src="/images/africa.jpg"
          countries={africa?.length}
          name="Africa"
        />
        <RegionsCard
          region={americas}
          src="/images/north america.jpg"
          countries={americas?.length}
          name="Americas"
        />
        <RegionsCard
          region={asia}
          src="/images/asia.jpg"
          countries={asia?.length}
          name="Asia"
        />
        <RegionsCard
          region={europe}
          src="/images/Europe.jpg"
          countries={europe?.length}
          name="Europe"
        />
        <RegionsCard
          region={oceania}
          src="/images/oceania.jpg"
          countries={oceania?.length}
          name="Oceania"
        />
      </div>
    </div>
  );
}

export default Regions;
