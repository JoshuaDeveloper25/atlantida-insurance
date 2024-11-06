import logoAtlantidaInsurance from "../images/nuestraempresa7.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarLinks } from "../../DB/data";
import { createPortal } from "react-dom";
import { useState } from "react";

const NavbarAtlantidaInsurance = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="container-page py-2">
      <div className="flex justify-between items-center gap-8">
        <div>
          <Link to={`/`}>
            <img
              decoding="async"
              loading="lazy"
              className="w-44"
              src={logoAtlantidaInsurance}
              alt={`Logo Atlantida Insurance`}
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navbarLinks?.map((navLink, index) => {
            const { to, text, isDropdown = false, dropdownLinks } = navLink;

            return !isDropdown ? (
              <NavLink
                key={index}
                onClick={() => setNavbarOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-color font-extrabold hover:text-primary-color family-nunito-black"
                    : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300 family-nunito-black"
                }
                to={to}
              >
                {text}
              </NavLink>
            ) : (
              <div className="group relative cursor-pointer">
                <div className="hover:text-primary-color flex items-center justify-between gap-4">
                  <NavLink
                    className={
                      "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300 family-nunito-black "
                    }
                    to={"#"}
                  >
                    Productos
                  </NavLink>

                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`h-6 w-6`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <div className="invisible absolute z-58 flex w-48 right-0 flex-col rounded-md bg-primary-color py-1 px-4 text-white shadow-xl group-hover:visible">
                  {dropdownLinks?.map((dropdownLinks, index) => {
                    const { text, to } = dropdownLinks;
                    return (
                      <NavLink
                        key={index}
                        className={({ isActive }) =>
                          isActive
                            ? "my-2 block text-sm py-1 family-nunito-black text-[.9rem] font-semibold text-white/50 shadow-md leading-4"
                            : "my-2 block text-sm py-1 family-nunito-black text-[.9rem] font-semibold text-white hover:text-white/50 leading-4"
                        }
                        to={to}
                      >
                        {text}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <NavLink
            onClick={() => setNavbarOpen(false)}
            className={"btn-normal button-red-primary"}
            to={`#`}
          >
            Mi Seguro
          </NavLink>
        </div>

        {/* <!-- drawer init and toggle --> */}
        <div className="lg:hidden flex text-center">
          <button
            className="font-medium  text-2xl px-5"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
            onClick={() => setNavbarOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* <!-- drawer component --> */}
        {navbarOpen && (
          <>
            {createPortal(
              <div
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`lg:hidden bg-black/50 h-[100vh] fixed top-0 w-full`}
              ></div>,
              document.body
            )}
          </>
        )}

        <div
          id="drawer-example"
          className={`lg:hidden w-full fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-500 bg-white sm:w-80 ${
            !navbarOpen ? "-translate-x-full" : null
          }`}
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
          <div>
            <Link className="inline" to={`/`}>
              <img
                decoding="async"
                loading="lazy"
                className="inline w-40"
                src={logoAtlantidaInsurance}
                alt={`Logo Atlantida Insurance`}
              />
            </Link>
          </div>

          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-black bg-transparent hover:bg-primary-color hover:text-white rounded-lg text-sm w-8 h-8 absolute top-5 end-2.5 flex items-center justify-center"
            onClick={() => setNavbarOpen(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="flex flex-col mt-10 gap-6">
            {navbarLinks?.map((navLink, index) => {
              const { to, text, isDropdown = false, dropdownLinks } = navLink;

              return !isDropdown ? (
                <NavLink
                  key={index}
                  onClick={() => setNavbarOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary-color font-extrabold border-b-primary-color border-b pb-1 family-nunito-black"
                      : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold family-nunito-black"
                  }
                  to={to}
                >
                  {text}
                </NavLink>
              ) : (
                <div className="group relative cursor-pointer">
                  <div className="hover:text-primary-color flex items-center justify-between gap-4">
                    <NavLink
                      className={
                        "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300 family-nunito-black "
                      }
                      to={"#"}
                    >
                      Productos
                    </NavLink>

                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`h-6 w-6`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="invisible absolute z-58 flex w-full right-0 flex-col rounded-md bg-primary-color py-1 px-4 text-white shadow-xl group-hover:visible">
                    {dropdownLinks?.map((dropdownLinks, index) => {
                      const { text, to } = dropdownLinks;
                      return (
                        <NavLink
                          key={index}
                          onClick={() => setNavbarOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? "my-2 block text-sm py-1 family-nunito-black text-[.9rem] font-semibold text-white/50 shadow-md leading-4"
                              : "my-2 block text-sm py-1 family-nunito-black text-[.9rem] font-semibold text-white hover:text-white/50 leading-4"
                          }
                          to={to}
                        >
                          {text}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <NavLink
              onClick={() => setNavbarOpen(false)}
              className={"btn-normal button-red-primary"}
              to={`#`}
            >
              Mi Seguro
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAtlantidaInsurance;
