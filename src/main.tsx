import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WindowControls from "./Components/WindowControls/WindowControls";
import AccountsListPage from "./Pages/AccountsListPage/AccountsListPage";
import "./Assets/Styles/MainStyles.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <WindowControls />
        <AccountsListPage />
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
