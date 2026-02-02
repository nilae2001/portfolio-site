import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Group,
  Badge,
  Button,
  Divider,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import projects from "../../projects.data";
import Navbar from "../components/Navbar";
import "../App.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { Project } from "../types/Project";

export default function ProjectPage() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId) return <Text>Project not found.</Text>;

  const project: Project | undefined = projects.find((p) => p.id === projectId);

  if (!project) return <Text>Project not found.</Text>;

  return (
    <>
      <Navbar />
      <Container
        size="md"
        py="xl"
        className="project-page"
        style={{ marginTop: "5rem" }}
      >
        <Stack gap="sm" mb="xl" className="project-hero">
          <Title order={1} className="project-title">
            {project.title}
          </Title>

          <Text size="lg" className="project-summary">
            {project.description}
          </Text>

          {project.gallery && project.gallery.length > 0 && (
            <Carousel
              slideSize="100%"
              height={500}
              controlSize={40}
              emblaOptions={{
                loop: true,
                dragFree: false,
                align: "center",
              }}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={() => autoplay.current.play()}
              className="project-carousel"
            >
              {project.gallery.map((item, index) => (
                <Carousel.Slide key={index}>
                  {item.type === "image" ? (
                    <Image src={item.src} fit="contain" h={500} />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </Carousel.Slide>
              ))}
            </Carousel>
          )}
        </Stack>

        <Divider my="xl" />

        <Stack gap="xs" mb="xl" className="project-section">
          <Title order={2} className="project-section-title">
            Rationale
          </Title>

          <Text className="project-rationale">{project.rationale.long}</Text>
        </Stack>

        {/* TECH */}
        <Stack gap="sm" mb="xl" className="project-section">
          <Title order={2} className="project-section-title">
            Tech Stack
          </Title>

          <Group>
            {project.tech.map((tech) => (
              <Badge key={tech} variant="light" className="project-tech-badge">
                {tech}
              </Badge>
            ))}
          </Group>
        </Stack>

        {/* LINKS */}
        <Stack gap="sm" className="project-section">
          <Title order={2} className="project-section-title">
            Links
          </Title>

          <Group>
            {project!.links!.github && (
              <Button
                component="a"
                variant="outline"
                href={project!.links!.github}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBrandGithub size={18} />}
                className="project-link-button"
              >
                GitHub
              </Button>
            )}

            {project!.links!.live && (
              <Button
                component="a"
                variant="outline"
                href={project!.links!.live}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconExternalLink size={18} />}
                className="project-link-button"
              >
                Live Project
              </Button>
            )}
          </Group>
        </Stack>
      </Container>
    </>
  );
}
