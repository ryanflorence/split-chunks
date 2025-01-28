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
    <div className="p-4 flex space-x-1">
      <Link to="/editor" className="underline text-blue-500">
        Split Chunks Demo
      </Link>
      <Link to="/bug" className="underline text-blue-500">
        SPA Bug
      </Link>
    </div>
  );
}
