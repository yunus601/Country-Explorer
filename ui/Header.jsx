import { Link, NavLink } from "react-router";
import { FaBars, FaGlobe } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-neutral-border bg-neutral-card-bg px-6 py-8 text-text-primary uppercase tracking-widest font-semibold shadow-sm">
      <Link to="/" className="text-2xl sm:text-3xl font-bold flex gap-2 items-center">
        <span>
          <FaGlobe />
        </span>
        Countries Explorer
      </Link>

      <ul className="hidden sm:flex gap-12 lg:gap-24 px-6 text-xl lg:text-2xl justify-between">
        <li className="list-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand-blue font-semibold"
                : "text-text-primary font-semibold hover:text-brand-blue transition-colors"
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="compare"
            className={({ isActive }) =>
              isActive
                ? "text-brand-blue font-semibold"
                : "text-text-primary font-semibold hover:text-brand-blue transition-colors"
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
                : "text-text-primary font-semibold hover:text-brand-blue transition-colors"
            }
          >
            Regions
          </NavLink>
        </li>
      </ul>

      <button
        className={`${openMenu ? "hidden" : "block"} cursor-pointer sm:hidden p-2 text-text-primary`}
        onClick={() => setOpenMenu(true)}
        aria-label="Open menu"
      >
        <FaBars size="20px" />
      </button>

      {/* Mobile Drawer Backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navbar */}
      <ul
        className={`overflow-hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } sm:hidden w-3/4 rounded-l-2xl z-50 fixed top-0 right-0 max-w-xs transition-all duration-300 ease-in-out flex flex-col py-8 items-center bg-neutral-900 text-slate-50 gap-12 px-6 text-2xl justify-center shadow-2xl`}
      >
        <button
          className="absolute right-4 top-4 p-2 cursor-pointer text-slate-50 hover:text-brand-accent"
          onClick={() => setOpenMenu(false)}
          aria-label="Close menu"
        >
          <FaX />
        </button>
        <li className="list-none mt-12">
          <NavLink
            to="/"
            onClick={() => setOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "text-brand-accent font-semibold"
                : "text-slate-50 font-semibold"
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="compare"
            onClick={() => setOpenMenu(false)}
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
            onClick={() => setOpenMenu(false)}
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
    </header>
  );
}

export default Header;
