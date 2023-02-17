import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DrawerContextProvider from "./store/drawer-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DrawerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DrawerContextProvider>
);
