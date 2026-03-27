import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default async () => {
  return defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes("-"),
          },
        },
      }),
    ],
    build: {
      target: "esnext",
      minify: "terser",
      lib: {
        entry: "src/CustomElement/index.ts",
        formats: ["iife"],
        name: "CustomElement",
      },
    },
    server: {
      https: true,
      host: "localhost",
      port: 8080,
    },
    optimizeDeps: {
      // 解决vite打包对一些依赖库的编译处理造成的问题
      esbuildOptions: {
        target: "esnext",
      },
    },
  });
};
