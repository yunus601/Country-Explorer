import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useNavigate, useParams } from "react-router";
import { useCountries } from "../../Hooks/useCountries";
import Spinner from "../../ui/Spinner";
import {
  FaArrowLeft,
  FaBackspace,
  FaBackward,
  FaStepBackward,
} from "react-icons/fa";
function Map() {
  const { code } = useParams();
  const { countries, isPending, isError, error } = useCountries();
  const country = countries.find((country) => country.codes.alpha_2 === code);

  if (isPending) return <Spinner />;
  if (isError) return <p className="text-xl text-red-500">{error.message}</p>;
  if (!country) return <p>Country cannot be found</p>;

  const {
    coordinates: { lat, lng },
    names: { common },
    flag,
  } = country;

  const navigate = useNavigate();
  return (
    <div className="w-full h-full px-8 pt-4 pb-16 ">
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-2 mb-4 uppercase px-8 font-semibold py-4 shadow-lg bg-neutral-card-bg text-xl text-text-primary rounded-lg border-neutral-border hover:bg-brand-accent hover:text-slate-50 transition-all duration-300"
      >
        <span>
          <FaArrowLeft />
        </span>
        <span>back</span>
      </button>
      <div className="w-full h-full rounded-lg  shadow-md border border-neutral-border">
        <MapContainer
          center={[lat, lng]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-full w-full rounded-lg shadow-md border border-neutral-border mb-4"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
              <div className="text-xl font-bold text-text-primary uppercase flex items-center justify-between gap-2 pl-0 pr-4 pb-2 pt-4 ">
                <img
                  src={flag.url_png}
                  className="h-8 w-10 object-cover rounded-lg"
                  alt={`{name} flag`}
                />
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
