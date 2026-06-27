import { useEffect, useState } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedvalue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedvalue(value), delay);

    return () => clearInterval(timer);
  }, [delay, value]);

  return debouncedValue;
}
