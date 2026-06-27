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

  const africa = regions.filter(
    (country) => country?.region?.toLowerCase() === "africa",
  );
  const americas = regions.filter(
    (country) => country?.region?.toLowerCase() === "americas",
  );
  const asia = regions.filter(
    (country) => country?.region?.toLowerCase() === "asia",
  );
  const europe = regions.filter(
    (country) => country?.region?.toLowerCase() === "europe",
  );
  const oceania = regions.filter(
    (country) => country?.region?.toLowerCase() === "oceania",
  );
  isPending && <Spinner />;
  isError && <p className="text-xl text-red-500">{error.message}</p>;
  return (
    <div className="px-12 py-6 text-lg">
      <h1 className="font-bold tracking-wider text-5xl leading-tight text-text-primary">
        Explore by region
      </h1>
      <p className="text-text-secondary  sm:text-xl tracking-wide  mt-4 font-medium max-w-3xl">
        Navigate the globe through its major continental divisions. Access
        demographic insights, geographical data, and institutional records for
        every sovereign territory.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-y-10 mt-16">
        <RegionsCard
          region={africa}
          src="/images/africa.jpg"
          countries={africa?.length}
        />
        <RegionsCard
          region={americas}
          src="/images/north america.jpg"
          countries={americas?.length}
        />
        <RegionsCard
          region={asia}
          src="/images/asia.jpg"
          countries={asia?.length}
        />
        <RegionsCard
          region={europe}
          src="/images/Europe.jpg"
          countries={europe?.length}
        />
        <RegionsCard
          region={oceania}
          src="/images/oceania.jpg"
          countries={oceania?.length}
        />
      </div>
    </div>
  );
}

export default Regions;
