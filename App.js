import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./src/components/Navbar";
import "./styles/App.css"

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
      path: "experience",
      element: <Experience />
    }
  ];
  return (
      <Router routes={routes} location={location}>
        <div>
          <Navbar />
          <Outlet />
          {/* FOOTER */}
        </div>
      </Router>
  );
}
