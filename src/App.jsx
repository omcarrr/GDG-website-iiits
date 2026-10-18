import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => initLenis(), []);

  // Single-scroll site: every old page URL renders Home, which scrolls to the matching section.
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/events", element: <Home /> },
    { path: "/team", element: <Home /> },
    { path: "/paths", element: <Home /> },
    { path: "/contact", element: <Home /> },
    { path: "*", element: <Home /> },
  ]);
}
