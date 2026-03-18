export function viteConfig() {
  return {
    optimizeDeps: {
      exclude: ["starlight-blog"],
    },
    ssr: {
      optimizeDeps: {
        exclude: ["starlight-blog"],
      },
      external: ["esbuild"],
    },
  };
}
