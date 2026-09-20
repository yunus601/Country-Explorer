import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
};

function Spinner() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center py-12">
      <ClipLoader color="#1e3a8a" size={48} cssOverride={override} />
    </div>
  );
}

export default Spinner;
