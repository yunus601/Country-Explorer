function formatArea(area) {
  if (area === undefined || area === null || isNaN(Number(area))) {
    return "N/A";
  }
  const Areaformatter = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "mile",
    unitDisplay: "short",
    maximumFractionDigits: 1,
  });

  return Areaformatter.format(Number(area));
}

export default formatArea;
