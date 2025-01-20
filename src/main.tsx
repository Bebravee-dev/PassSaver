import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Styles/MainStyles.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WindowControls from "./Components/WindowControls/WindowControls";

import OpenFilePage from "./Pages/OpenFilePage/OpenFilePage.tsx";

const KEY = "";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <WindowControls />
        <OpenFilePage />
      </div>
    ),
  },

  {
    path: "/openFile",
    element: (
      <div>
        <OpenFilePage />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
