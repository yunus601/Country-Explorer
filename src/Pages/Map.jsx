import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate, useParams } from "react-router";
import { useCountries } from "../../Hooks/useCountries";
import Spinner from "../../ui/Spinner";
import { FaArrowLeft } from "react-icons/fa";

function Map() {
  const { code } = useParams();
  const { countries = [], isPending, isError, error } = useCountries();
  const navigate = useNavigate();

  const country = countries.find(
    (c) =>
      c.codes?.alpha_2?.toUpperCase() === code?.toUpperCase() ||
      c.codes?.alpha_3?.toUpperCase() === code?.toUpperCase()
  );

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500 text-center py-12">{error?.message || "Error loading country"}</p>;
  if (!country) return <p className="text-2xl text-center py-12 text-text-secondary">Country cannot be found</p>;

  const {
    coordinates,
    names: { common },
    flag,
  } = country;

  const lat = coordinates?.lat ?? 0;
  const lng = coordinates?.lng ?? 0;
  const flagSrc = flag?.url_png || flag?.url_svg || "";

  return (
    <div className="w-full px-4 sm:px-8 pt-4 pb-16">
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer inline-flex items-center gap-2 mb-6 uppercase px-8 font-semibold py-4 shadow-sm bg-neutral-card-bg text-xl text-text-primary rounded-lg border border-neutral-border hover:bg-brand-accent hover:text-slate-50 transition-all duration-300"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <div className="w-full h-[65vh] sm:h-[75vh] rounded-xl shadow-md border border-neutral-border overflow-hidden">
        <MapContainer
          center={[lat, lng]}
          zoom={4}
          scrollWheelZoom={true}
          className="h-full w-full rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
              <div className="text-xl font-bold text-text-primary uppercase flex items-center justify-between gap-3 p-2">
                {flagSrc && (
                  <img
                    src={flagSrc}
                    className="h-8 w-12 object-cover rounded-md"
                    alt={`${common} flag`}
                  />
                )}
                <span>{common}</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
