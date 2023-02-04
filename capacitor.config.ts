import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.jamesschuler.gogosandiego",
  appName: "GoGo! San Diego",
  webDir: "public",
  bundledWebRuntime: false,
  server: {
    url: "http://127.0.0.1:5173/",
  },
};

export default config;
