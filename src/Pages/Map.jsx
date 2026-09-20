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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-neutral-card-bg text-text-primary rounded-md border border-neutral-border hover:border-brand-blue hover:text-brand-blue transition-all duration-200 self-start shadow-xs"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Dossier</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-text-secondary bg-neutral-card-bg px-4 py-2 rounded-md border border-neutral-border shadow-xs">
          <span className="font-semibold text-text-primary">{common}</span>
          <span className="text-neutral-border">|</span>
          <span>LAT {lat?.toFixed(2)}°</span>
          <span className="text-neutral-border">|</span>
          <span>LNG {lng?.toFixed(2)}°</span>
        </div>
      </div>

      <div className="w-full h-[65vh] sm:h-[75vh] rounded-xl shadow-xs border border-neutral-border overflow-hidden bg-neutral-card-bg">
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
              <div className="text-sm font-semibold text-text-primary flex items-center justify-between gap-3 p-1">
                {flagSrc && (
                  <img
                    src={flagSrc}
                    className="h-6 w-9 object-cover rounded border border-neutral-border shadow-xs"
                    alt={`${common} flag`}
                  />
                )}
                <span className="font-display text-base">{common}</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
