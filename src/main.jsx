// --> Default imports from react and more...
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import React from "react";

// --> Styles
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <App />
  </>
);
