import { Link } from "react-router";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-neutral-border px-6 pt-12 pb-32 text-xl text-text-primary bg-neutral-card-bg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold flex gap-2  items-center">
            <span>
              <FaGlobe />
            </span>
            <span>Countries Explorer</span>
          </h2>
          <p>
            @ {new Date().getFullYear()} Countries Explorer.Institutional Tech
            Data Portal
          </p>
        </div>
        <div className="flex justify-between items-center capitalize gap-6">
          <Link className="hover:text-brand-accent">documentation</Link>
          <Link className="hover:text-brand-accent"> source</Link>
          <Link className="hover:text-brand-accent">privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
