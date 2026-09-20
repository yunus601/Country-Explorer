import { FaGlobe, FaSearch, FaUsers } from "react-icons/fa";

function DetailsCard({ label, value }) {
  const className = "text-brand-blue text-3xl";
  return (
    <div className="bg-neutral-card-bg px-6 py-8 rounded-xl w-full h-full space-y-4 shadow-md border border-neutral-border hover:shadow-lg hover:border-brand-light transition-all">
      {label === "region" ? (
        <FaSearch className={className} />
      ) : label === "population" ? (
        <FaUsers className={className} />
      ) : (
        <FaGlobe className={className} />
      )}

      <p className="uppercase text-xs font-bold tracking-wider text-text-secondary">
        {label}
      </p>
      <p className="font-bold text-lg lg:text-xl text-text-primary line-clamp-2">
        {value || "N/A"}
      </p>
    </div>
  );
}

export default DetailsCard;
