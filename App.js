import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";


// import react-location for routing between pages
// https://react-location.tanstack.com
import { Router, Outlet, ReactLocation } from "react-location";

const location = new ReactLocation();

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "projects",
      element: <Projects />
    },
    {
      path: "experiences",
      element: <Experiences />
    }
  ];
  return (
      <Router routes={routes} location={location}>
        <div>
          {/* HEADER AND NAVIGATION BAR */}
          <Outlet />
          {/* FOOTER */}
        </div>
      </Router>
  );
}
