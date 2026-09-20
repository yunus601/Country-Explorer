function formatPopulation(population) {
  if (population === undefined || population === null || isNaN(Number(population))) {
    return "N/A";
  }
  const compactFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });

  return compactFormatter.format(Number(population));
}

export default formatPopulation;
