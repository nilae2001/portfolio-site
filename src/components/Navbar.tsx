import { useState, useEffect } from "react";
import { Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  return (
    <nav
      style={{
        position: "fixed",
        top: show ? 0 : "-200px",
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "white",
        zIndex: 1000,
        padding: "0.5rem 1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "top 0.3s",
      }}
    >
      <div>
        <Link to={"/"}>
          <Image src="/logo.png" height={70} fit="contain" alt="nila logo" />
        </Link>
      </div>

      {!isMobile && (
        <div
          className="desktop-links"
          style={{ display: "flex", gap: "1.5rem" }}
        >
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      )}

      {isMobile && (
        <div
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "25px",
            height: "20px",
            cursor: "pointer",
          }}
        >
          <div
            style={{ height: "3px", background: "black", borderRadius: "2px" }}
          />
          <div
            style={{ height: "3px", background: "black", borderRadius: "2px" }}
          />
          <div
            style={{ height: "3px", background: "black", borderRadius: "2px" }}
          />
        </div>
      )}

      {isMobile && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            maxHeight: open ? "300px" : "0px",
            transition: "max-height 0.5s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            zIndex: 900,
          }}
        >
          <Link
            to="/resume"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* CSS for hover pop-out */}
      <style>{`
        .nav-link {
          color: #2B3990;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        /* Desktop only pop-out effect */
        @media (min-width: 769px) {
          .nav-link:hover {
            transform: scale(1.15);
            background-color: #2B3990;
            border-radius: 0.25rem;
            color: #faf8f5;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
