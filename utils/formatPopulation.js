function formatPopulation(population) {
  const compactFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short", // Options: 'short' (1.4B) or 'long' (1.4 billion)
    maximumFractionDigits: 1, // Controls decimal rounding precision
  });

  return compactFormatter.format(population);
}

export default formatPopulation;
