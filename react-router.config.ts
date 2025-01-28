import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: false,
  future: {
    unstable_splitRouteModules: true,
  },
} satisfies Config;
