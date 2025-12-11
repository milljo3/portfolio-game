import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/AllProjects";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Route>
    </Routes>
    </>
  );
}