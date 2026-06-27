import { useDebounce } from "../utils/debounce";

function useFilter(input, nations) {
  const debouncedValue = useDebounce(input, 500);

  const targetText = debouncedValue.toLowerCase();

  if (!targetText) return nations;

  const filteredCountries = nations.filter((country) => {
    const name = country.names?.common?.toLowerCase() || "";
    const region = country?.region?.toLowerCase() || "";
    const capitals = country?.capitals?.[0]?.name?.toLowerCase() || "";

    return (
      name.includes(targetText) ||
      region.includes(targetText) ||
      capitals.includes(targetText)
    );
  });
}

export default useFilter;
