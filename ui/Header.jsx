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
      <ul className="hidden  sm:flex gap-24 px-6 text-2xl justify-between lg:px-24">
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

      <button
        className={`${openMenu ? "hidden" : "block"} cursor-pointer sm:hidden block`}
        onClick={() => setOpenMenu(true)}
      >
        <FaBars size="20px" />
      </button>

      {/* Mobile Navbar */}
      {/* {openMenu && ( */}
      <ul
        className={`overflow-hidden ${openMenu ? "translate-x-0" : "translate-x-96"} sm:hidden w-1/2 rounded-2xl z-99  fixed top-0 right-0 max-w-xs  transition-all duration-300 ease-in-out   flex flex-col py-6    items-center  bg-neutral-900   text-slate-50   gap-16 px-4    text-2xl justify-center`}
      >
        <button
          className="absolute right-4 top-4   cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <FaX />
        </button>
        <li className="list-none mr-4 mt-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand-accent font-semibold"
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
                ? "text-brand-accent font-semibold"
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
                ? "text-brand-accent font-semibold"
                : "text-slate-50 font-semibold"
            }
          >
            Regions
          </NavLink>
        </li>
      </ul>
      {/* )} */}
    </header>
  );
}

export default Header;
