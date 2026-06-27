import { Link } from "react-router";

function CountryCard({ country }) {
  const {
    names,
    flag,
    population,
    capitals,
    region,
    codes: { alpha_2 },
  } = country;

  return (
    <article className=" rounded-3xl border border-neutral-border bg-neutral-card-bg aspect-4/3 shadow-md">
      <img
        className="h-72 w-full object-cover rounded-lg"
        src={flag.url_png}
        alt={`${names.common} flag`}
      />

      <div className="space-y-3 px-6 py-6 text-text-primary">
        <h2 className="text-2xl font-bold border-b-2 border-neutral-border pb-6 ">
          {names.common}
        </h2>

        <div className="space-y-2  divide-y-2 divide-neutral-border text-xl">
          <p className=" py-4 flex flex-col justify-between  gap-2">
            <span className="font-semibold uppercase">Population</span>
            <span>{population}</span>
          </p>
          <div className="flex justify-between my-4">
            <p className="flex flex-col justify-between items-center gap-2">
              <span className="font-semibold uppercase">Region</span>
              <span>{region}</span>
            </p>
            <p className="flex flex-col justify-between items-center gap-2">
              <span className="font-semibold uppercase">Capital</span>
              <span>{capitals?.[0]?.name}</span>
            </p>
          </div>
        </div>
        <Link
          to={`/country/${alpha_2}`}
          className="w-full bg-brand-blue hover:bg-blue-800 text-blue-50 font-semibold py-3 px-4 mt-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
        >
          View Country
        </Link>
      </div>
    </article>
  );
}

export default CountryCard;
