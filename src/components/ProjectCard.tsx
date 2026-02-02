import { Card, Image, Text, Group, Badge } from "@mantine/core";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      component={Link}
      to={project.links?.internal!}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="project-card"
      style={{ height: 380, display: "flex", flexDirection: "column" }}
    >
      <Card.Section>
        <Image
          src={project.coverImage}
          alt={project.title}
          height={200}
          fit="cover"
        />
      </Card.Section>

      <Text fw={600} size="xl" mt="md" lineClamp={1}>
        {project.title}
      </Text>

      <Text size="sm" c="dimmed" mt="xs" lineClamp={3} style={{ flexGrow: 1 }}>
        {project.rationale.short}
      </Text>

      <Group mt="md" gap="xs">
        {project.tech.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="light">
            {tech}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}

export default ProjectCard;
