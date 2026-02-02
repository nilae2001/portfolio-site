import { Carousel } from "@mantine/carousel";
import { Card, Image, Text, Box } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../../projects.data";

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
                    src={project.coverImage}
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
                  {project.rationale.short}
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
                  to={project!.links!.internal!}
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
