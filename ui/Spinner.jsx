import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
};

function Spinner() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <ClipLoader color="#1d4ed8" size={48} cssOverride={override} />
    </div>
  );
}

export default Spinner;
