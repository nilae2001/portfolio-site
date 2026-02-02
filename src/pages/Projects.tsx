import { Container, SimpleGrid } from "@mantine/core";
import projects from "../../projects.data";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

function Projects() {
  return (
    <>
      <Navbar />
      <Container size="lg" py="xl" style={{ marginTop: "5rem" }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Projects;
