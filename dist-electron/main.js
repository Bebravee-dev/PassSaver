import { app, BrowserWindow, ipcMain } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs")
    },
    minWidth: 600,
    minHeight: 600
  });
  win.on("maximize", () => {
    win == null ? void 0 : win.webContents.send("window-state", { isMaximized: true });
  });
  win.on("unmaximize", () => {
    win == null ? void 0 : win.webContents.send("window-state", { isMaximized: false });
  });
  ipcMain.on("window-minimize", () => {
    win == null ? void 0 : win.minimize();
  });
  ipcMain.on("window-restore", () => {
    if (win) {
      if (win.isMaximized()) {
        win.restore();
      } else {
        win.maximize();
      }
    } else {
      console.error("Window is not defined.");
    }
  });
  ipcMain.on("window-close", () => {
    win == null ? void 0 : win.close();
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
