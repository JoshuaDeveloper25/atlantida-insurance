import FooterAtlantidaInsurance from "../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../components/NavbarAtlantidaInsurance";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <FooterAtlantidaInsurance />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
