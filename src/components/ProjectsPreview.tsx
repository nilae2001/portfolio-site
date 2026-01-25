import { Carousel } from "@mantine/carousel";
import { Card, Image, Text, Box } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "F1 2024 Season Site",
    img: "/f1.png",
    rationale:
      "Web app built to provide F1 fans with real-time, clear info on races, drivers, and teams.",
    description:
      "Responsive web application with race data, calendar, constructor standings, and driver profiles. Features a clean, interactive UI with API integration.",
    tech: ["JavaScript", "Express.js", "EJS", "HTML/CSS", "Axios"],
    link: "/projects/f1",
  },
  {
    title: "InkLink",
    img: "/inklink.png",
    rationale:
      "A collaborative platform for writers to craft stories together in a structured way.",
    description:
      "React + TypeScript app with real-time note-sharing and workspace organization. Backend built with Node.js/Express and MongoDB for persistence.",
    tech: ["React", "TypeScript", "Mantine", "Zustand", "Node.js", "MongoDB"],
    link: "/projects/inklink",
  },
  {
    title: "Joey",
    img: "/joey.png",
    rationale:
      "An AI-powered mobile platform connecting underrepresented tradespeople with homeowners.",
    description:
      "Built with Expo/React Native and Supabase. Verifies credentials and matches clients with tradespeople, emphasizing accessibility and fairness.",
    tech: ["React Native", "Expo", "Supabase", "Google Gemini AI"],
    link: "/projects/joey",
  },
  {
    title: "North Fraser Metis Association",
    img: "/placeholder.png",
    rationale:
      "Rebuilding the NFMA website to improve accessibility, usability, and community engagement.",
    description:
      "Using a modern WordPress framework, focusing on accessibility, fixing the functionality of features needed for day-to-day needs, and authentic cultural representation.",
    tech: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    link: "/projects/nfma",
  },
];

export default function ProjectsPreview() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <>
      <Box id="projects" style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <Carousel
          orientation="vertical"
          slideSize={{ base: 400, sm: 450 }}
          height={550}
          slideGap="md"
          controlSize={40}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          styles={{
            controls: {
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              justifyContent: "space-between",
              height: "100%",
            },
            control: {
              margin: "-4rem 0",
            },
          }}
        >
          {projects.map((project) => (
            <Carousel.Slide
              key={project.title}
              style={{ backgroundColor: "#faf8f5" }}
            >
              <Card
                style={{
                  maxWidth: 600,
                  width: "100%",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card.Section style={{ paddingTop: "1rem" }}>
                  <Image
                    src={project.img}
                    height={130}
                    fit="contain"
                    alt={project.title}
                  />
                </Card.Section>

                <Text mt="sm" fw={700} style={{ textAlign: "center" }}>
                  {project.title}
                </Text>

                {/* Rationale */}
                <Text style={{ textAlign: "left", margin: "0.5rem 0" }}>
                  {project.rationale}
                </Text>

                {/* Key highlights */}
                <Text style={{ textAlign: "left", marginBottom: "0.5rem" }}>
                  {project.description}
                </Text>

                {/* Tech */}
                <Text
                  style={{
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "var(--color-blue)",
                  }}
                >
                  Tech: {project.tech.join(", ")}
                </Text>

                {/* Link */}
                <Link
                  to={project.link}
                  style={{
                    fontWeight: 700,
                    marginTop: "0.5rem",
                    color: "#646cff",
                  }}
                >
                  See More →
                </Link>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>

      <style>{`
  /* Targets Mantine carousel controls */
  @media (max-width: 768px) {
    .projects-carousel .mantine-Carousel-controls {
      display: none;
    }
  }
`}</style>
    </>
  );
}
