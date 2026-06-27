export async function getCountries(region) {
  const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;
  const url = region
    ? `https://api.restcountries.com/countries/v5?region=${region}`
    : `https://api.restcountries.com/countries/v5?limit=100`;

  if (!API_KEY) {
    throw new Error(
      "Missing VITE_REST_COUNTRIES_API_KEY in your .env.local file",
    );
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.errors?.[0]?.message || "Failed to fetch countries");
  }

  return data.data.objects;
}

export async function getAllRegions(Regions = []) {
  const allRegions = Regions.map(async (region) => await getCountries(region));

  const resolvedRegions = await Promise.all(allRegions);
  const flattenedRegions = resolvedRegions.flat();

  return flattenedRegions;
}
