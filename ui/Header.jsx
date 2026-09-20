import { Link, NavLink } from "react-router";
import { FaGlobeAmericas, FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-border bg-neutral-card-bg/90 backdrop-blur-md px-5 sm:px-8 lg:px-12 py-4 text-text-primary uppercase tracking-widest font-semibold">
      {/* Brand Logo with Editorial Display Font */}
      <Link
        to="/"
        className="text-xl sm:text-2xl font-display tracking-tight normal-case font-bold flex gap-3 items-center text-text-primary hover:text-brand-blue transition-colors"
      >
        <span className="text-brand-accent text-xl">
          <FaGlobeAmericas />
        </span>
        <span className="font-bold">Countries Explorer</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-8 lg:gap-12 px-6 text-sm justify-between items-center">
        <li className="list-none">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `pb-1 transition-all duration-150 ${
                isActive
                  ? "text-brand-blue font-bold border-b-2 border-brand-blue"
                  : "text-text-secondary font-semibold hover:text-text-primary"
              }`
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="compare"
            className={({ isActive }) =>
              `pb-1 transition-all duration-150 ${
                isActive
                  ? "text-brand-blue font-bold border-b-2 border-brand-blue"
                  : "text-text-secondary font-semibold hover:text-text-primary"
              }`
            }
          >
            Compare
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="regions"
            className={({ isActive }) =>
              `pb-1 transition-all duration-150 ${
                isActive
                  ? "text-brand-blue font-bold border-b-2 border-brand-blue"
                  : "text-text-secondary font-semibold hover:text-text-primary"
              }`
            }
          >
            Regions
          </NavLink>
        </li>
      </ul>

      {/* Mobile Hamburger Trigger */}
      <button
        className={`${openMenu ? "hidden" : "block"} cursor-pointer sm:hidden p-2 text-text-primary`}
        onClick={() => setOpenMenu(true)}
        aria-label="Open navigation menu"
      >
        <FaBars size="20px" />
      </button>

      {/* Mobile Backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-2xs z-40 sm:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <ul
        className={`overflow-hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } sm:hidden w-4/5 rounded-l-2xl z-50 fixed top-0 right-0 max-w-xs transition-all duration-300 ease-in-out flex flex-col py-8 items-center bg-neutral-card-bg border-l border-neutral-border text-text-primary gap-10 px-6 text-2xl justify-center shadow-xl`}
      >
        <button
          className="absolute right-6 top-6 p-2 cursor-pointer text-text-secondary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-brand-accent"
          onClick={() => setOpenMenu(false)}
          aria-label="Close menu"
        >
          <FaX />
        </button>

        <li className="list-none mt-12 w-full text-center">
          <NavLink
            to="/"
            end
            onClick={() => setOpenMenu(false)}
            className={({ isActive }) =>
              `block py-3 rounded-lg font-bold ${
                isActive
                  ? "text-brand-blue bg-brand-light"
                  : "text-text-primary hover:bg-neutral-100"
              }`
            }
          >
            Explore
          </NavLink>
        </li>
        <li className="list-none w-full text-center">
          <NavLink
            to="compare"
            onClick={() => setOpenMenu(false)}
            className={({ isActive }) =>
              `block py-3 rounded-lg font-bold ${
                isActive
                  ? "text-brand-blue bg-brand-light"
                  : "text-text-primary hover:bg-neutral-100"
              }`
            }
          >
            Compare
          </NavLink>
        </li>
        <li className="list-none w-full text-center">
          <NavLink
            to="regions"
            onClick={() => setOpenMenu(false)}
            className={({ isActive }) =>
              `block py-3 rounded-lg font-bold ${
                isActive
                  ? "text-brand-blue bg-brand-light"
                  : "text-text-primary hover:bg-neutral-100"
              }`
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
