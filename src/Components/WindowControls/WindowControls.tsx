import "./WindowControls.scss";

import { useState, useEffect } from "react";

import Minimize_icon from "./icons/Minimize_icon.svg";
import Restore_icon from "./icons/Restore_icon.svg";
import Maximize_icon from "./icons/Maximize_icon.svg";
import Close_icon from "./icons/Close_icon.svg";

const WindowControls: React.FC = () => {
  const [isMaximize, setIsMaximize] = useState<string>("");

  const handleMinimize = () => window.ipcRenderer.send("window-minimize");
  const handleMaximize = () => window.ipcRenderer.send("window-restore");
  const handleClose = () => window.ipcRenderer.send("window-close");

  useEffect(() => {
    const updateMaximizeState = (
      _: any,
      { isMaximized }: { isMaximized: boolean }
    ) => {
      setIsMaximize(isMaximized ? "maximized" : "restored");
    };

    window.ipcRenderer.on("window-state", updateMaximizeState);

    return () => {
      window.ipcRenderer.off("window-state", updateMaximizeState);
    };
  }, []);

  return (
    <div className="WindowControls">
      <div className="WindowControls-buttons">
        <div className="WindowControls-button-bg" onClick={handleMinimize}>
          <button className="WindowControls-button">
            <img src={Minimize_icon} alt="Minimize icon" />
          </button>
        </div>

        <div className="WindowControls-button-bg" onClick={handleMaximize}>
          <button className="WindowControls-button">
            <img
              src={isMaximize === "maximized" ? Restore_icon : Maximize_icon}
              alt={
                isMaximize === "maximized" ? "Restore icon" : "Maximize icon"
              }
            />
          </button>
        </div>

        <div className="WindowControls-button-bg" onClick={handleClose}>
          <button className="WindowControls-button">
            <img src={Close_icon} alt="Close icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowControls;
