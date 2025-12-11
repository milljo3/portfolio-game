import Navbar from "../components/Navbar";
import ParallaxBackground from "../components/ParallaxBackground";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative scroll-smooth">
      <ParallaxBackground />
      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}