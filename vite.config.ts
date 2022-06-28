import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import dts from "vite-plugin-dts";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    proxy: {},
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index"),
      name: "CoreModule",
      formats: ["es", "umd"],
      // the proper extensions will be added
      fileName: "core-module",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "ant-design-vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd",
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: { additionalData: ` @import "@/styles/global.scss"; ` },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    dts(),
    vue(),
    vueJsx(),
    // viteCommonjs(),
  ],
});

// your plugin installation
