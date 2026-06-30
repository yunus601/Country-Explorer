import { Link, NavLink } from "react-router";
import { FaBars, FaGlobe, FaHamburger, FaMoon } from "react-icons/fa";
import { FaMobileButton, FaX } from "react-icons/fa6";
import { use, useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex items-center justify-between border-b border-neutral-border bg-neutral-card-bg px-6 py-8 text-text-primary uppercase tracking-widest font-semibold shadow-sm">
      <Link to="/" className=" text-3xl font-bold flex gap-2 items-center ">
        <span>
          <FaGlobe />
        </span>
        Countries Explorer
      </Link>
      <ul className="hidden  md:flex gap-24 px-2 text-2xl justify-between">
        <li className="list-none mr-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand-blue font-semibold"
                : "text-text-primary font-semibold"
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none mr-4">
          <NavLink
            to="compare"
            className={({ isActive }) =>
              isActive
                ? "text-brand-blue font-semibold"
                : "text-text-primary font-semibold"
            }
          >
            Compare
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="regions"
            className={({ isActive }) =>
              isActive
                ? "text-brand-blue font-semibold"
                : "text-text-primary font-semibold"
            }
          >
            Regions
          </NavLink>
        </li>
      </ul>

      <button className="cursor-pointer" onClick={() => setOpenMenu(true)}>
        <FaBars size="20px" />
      </button>

      {/* Mobile Navbar */}

      {openMenu && (
        <ul
          className={` transition-all duration-300 ease-in-out translate-x-1 flex flex-col py-6 fixed top-0 left-1/2 z-99  items-center  bg-slate-950 w-auto rounded-lg height-auto text-slate-50 right-0 bottom-1/2  gap-24  text-2xl justify-center`}
        >
          <button
            className="self-end px-4 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <FaX />
          </button>
          <li className="list-none mr-4 mt-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-blue font-semibold"
                  : "text-slate-50 font-semibold"
              }
            >
              Explore
            </NavLink>
          </li>
          <li className="list-none mr-4">
            <NavLink
              to="compare"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-blue font-semibold"
                  : "text-slate-50 font-semibold"
              }
            >
              Compare
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="regions"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-blue font-semibold"
                  : "text-slate-50 font-semibold"
              }
            >
              Regions
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
