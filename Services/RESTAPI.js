import { FALLBACK_COUNTRIES } from "./countriesData";

export async function getCountries(region) {
  const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

  if (API_KEY) {
    try {
      const url = region
        ? `https://api.restcountries.com/countries/v5?region=${encodeURIComponent(region)}`
        : `https://api.restcountries.com/countries/v5?limit=100`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.data?.objects && Array.isArray(data.data.objects)) {
          return data.data.objects;
        }
      } else {
        console.warn(
          `REST Countries API returned status ${res.status}. Falling back to cached dataset.`
        );
      }
    } catch (err) {
      console.warn("Network error reaching REST Countries API. Using offline dataset:", err);
    }
  }

  // Graceful fallback to verified curated country catalog
  if (region) {
    const normalizedRegion = region.trim().toLowerCase();
    return FALLBACK_COUNTRIES.filter(
      (c) => c.region?.toLowerCase() === normalizedRegion
    );
  }

  return FALLBACK_COUNTRIES;
}

export async function getAllRegions(Regions = []) {
  try {
    const allRegions = Regions.map(async (region) => await getCountries(region));
    const resolvedRegions = await Promise.all(allRegions);
    const flattenedRegions = resolvedRegions.flat();

    // Deduplicate by alpha_2 or uuid
    const seen = new Set();
    return flattenedRegions.filter((item) => {
      const key = item.codes?.alpha_2 || item.uuid || item.names?.common;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  } catch (err) {
    console.warn("Error resolving regions, using fallback catalog:", err);
    return FALLBACK_COUNTRIES;
  }
}
