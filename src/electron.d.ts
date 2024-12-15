// electron.d.ts
declare global {
  interface Window {
    electron: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
    };
  }
}

export {};
