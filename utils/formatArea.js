function formatArea(area) {
  const Areaformatter = new Intl.NumberFormat("en-US", {
    // Make users locale dynamic
    style: "unit",
    unit: "mile",
    unitDisplay: "short",
    maximumFractionDigits: 1,
    maximumSignificantDigits: 3,
  });

  return Areaformatter.format(area);
}

export default formatArea;
