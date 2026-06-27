import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../Services/RESTAPI";

export function useCountries(region) {
  const {
    data: countries = [],
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["countries", region],
    queryFn: () => getCountries(region),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { countries, isError, error, isPending };
}
