import graphqlPlugin from "@rollup/plugin-graphql";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig(() => {
  return {
    plugins: [
      ...VitePluginNode({
        adapter: "express",
        appPath: "./src/index.ts",
      }),
      graphqlPlugin(),
    ],
    build: {
      outDir: "./api",
    },
  };
});
