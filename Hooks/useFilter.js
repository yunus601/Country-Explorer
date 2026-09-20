import { useDebounce } from "../utils/debounce";

function useFilter(input, nations = []) {
  const debouncedValue = useDebounce(input, 300);
  const targetText = debouncedValue.trim().toLowerCase();

  if (!targetText) return nations;

  return nations.filter((country) => {
    const name = country.names?.common?.toLowerCase() || "";
    const region = country?.region?.toLowerCase() || "";
    const capital = country?.capitals?.[0]?.name?.toLowerCase() || "";
    const subregion = country?.subregion?.toLowerCase() || "";

    return (
      name.includes(targetText) ||
      region.includes(targetText) ||
      capital.includes(targetText) ||
      subregion.includes(targetText)
    );
  });
}

export default useFilter;
