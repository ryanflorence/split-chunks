import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Welcome } from "./welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Split Chunks</h1>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/editor">Go to the editor</Link>
      </div>
    </div>
  );
}
