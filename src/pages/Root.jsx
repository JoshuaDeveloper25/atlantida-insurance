import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
};

export default Root;
