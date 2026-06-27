import { Link, NavLink } from "react-router";
import { FaGlobe, FaMoon } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-border bg-neutral-card-bg px-6 py-8 text-text-primary uppercase tracking-widest font-semibold shadow-sm">
      <Link to="/" className=" text-3xl font-bold flex gap-2 items-center ">
        <span>
          <FaGlobe />
        </span>
        Countries Explorer
      </Link>
      <ul className="flex gap-24 px-2 text-2xl justify-between">
        <li className="list-none mr-4">
          <NavLink
            to="/"
            className={({ isActive }) => `text-brand-blue font-semibold`}
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none mr-4">
          <NavLink
            to="compare"
            className={({ isActive }) => `text-brand-blue font-semibold`}
          >
            Compare
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="regions"
            className={({ isActive }) => `text-brand-blue font-semibold`}
          >
            Regions
          </NavLink>
        </li>
      </ul>
      <FaMoon className="text-2xl mr-4" />
    </header>
  );
}

export default Header;
