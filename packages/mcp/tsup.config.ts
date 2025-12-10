import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  dts: false,
  splitting: false,
  clean: true,
  shims: true,
  noExternal: [/.*/],  // Bundle all dependencies
  banner: {
    js: "#!/usr/bin/env node",
  },
});
