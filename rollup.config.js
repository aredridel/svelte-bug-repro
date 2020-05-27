import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["index.svelte"],
  plugins: [
    resolve(),
    svelte({
      hydratable: true,
    }),
  ],
  output: {
    file: "index.js",
  },
};
