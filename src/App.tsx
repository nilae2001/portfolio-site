import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import ResumePage from "./pages/Resume";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </>
  );
}
