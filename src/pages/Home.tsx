import ProjectsPreview from "../components/ProjectsPreview";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../App.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "2000px",
          margin: "0 auto",
          padding: "120px 2rem 0",
          alignItems: "flex-start",
        }}
        className="home-content"
      >
        <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
          <Hero />
        </div>
        <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
          <ProjectsPreview />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .home-content {
            padding: 80px 1rem 0 !important;
            gap: 1rem !important;
          }
        }
        @media (min-width: 769px) {
          .home-content {
            flex-direction: row !important;
          }
          .home-content > div {
            width: auto !important;
          }
        }
      `}</style>
      <Footer />
    </>
  );
}
