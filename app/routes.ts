import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("home.tsx"),
  route("editor", "editor.tsx"),
] satisfies RouteConfig;
