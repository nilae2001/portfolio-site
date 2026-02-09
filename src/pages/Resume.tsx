import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Button,
  Divider,
  Paper,
  List,
  ThemeIcon,
} from "@mantine/core";
import {
  IconDownload,
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconSchool,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import "../App.css";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <Container size="md" py="xl" style={{ marginTop: "5rem" }}>
        {/* Header Section */}
        <Stack gap="xs" mb="xl">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={1}>Nila Erturk</Title>
              <Text size="xl" fw={500} c="var(--color-blue)">
                Full-Stack Web Developer
              </Text>{" "}
            </div>
            <Button
              component="a"
              href="/Nila_Erturk_Resume.pdf"
              download
              leftSection={<IconDownload size={18} />}
              variant="filled"
              color="var(--color-blue)"
              radius="md"
            >
              Download PDF
            </Button>
          </Group>

          <Group gap="md" mt="xs">
            <Group gap={5}>
              <IconMail size={16} />
              <Text size="sm" component="a" href="mailto:nilaerturk@gmail.com">
                nilaerturk@gmail.com
              </Text>
            </Group>
            <Group gap={5}>
              <IconBrandLinkedin size={16} />
              <Text
                size="sm"
                component="a"
                href="https://www.linkedin.com/in/nila-e-956246290/"
                target="_blank"
              >
                LinkedIn
              </Text>
            </Group>
          </Group>
        </Stack>

        <Divider my="xl" />

        {/* Summary */}
        <Paper p="md" radius="md" withBorder bg="var(--mantine-color-gray-0)">
          <Text size="md" lh={1.6}>
            I am a motivated full-stack developer with hands-on experience
            building web and mobile applications using JavaScript, TypeScript,
            React, React Native, and Supabase. I am passionate about creating
            impactful digital solutions that combine usability, accessibility,
            and real-world relevance.
          </Text>
        </Paper>

        {/* Skills Section */}
        <Stack gap="md" mt="xl">
          <Group gap="sm">
            <ThemeIcon variant="light" size="lg" color="var(--color-blue)">
              <IconCode size={20} />
            </ThemeIcon>
            <Title order={2}>Technical Skills</Title>
          </Group>
          <Paper p="md" withBorder radius="md">
            <Stack gap="xs">
              <Text size="sm">
                <strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS,
                PHP, C#, R
              </Text>
              <Text size="sm">
                <strong>Tech Stack:</strong> React, Next.js, React Native, Expo,
                .NET, Node.js, Express.js, Hono, Clerk, Prisma, Bun, Supabase,
                MongoDB, MySQL, PostgreSQL, Tailwind CSS
              </Text>
              <Text size="sm">
                <strong>Tools:</strong> Figma, GitHub, Jira, Windows OS, Vercel,
                Render, VSCode
              </Text>
            </Stack>
          </Paper>
        </Stack>

        {/* Projects Section */}
        <Stack gap="md" mt="xl">
          <Title order={2}>Key Projects</Title>
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between" mb="xs">
              <Title order={3} size="h4">
                Joey | Full-Stack Web Developer
              </Title>{" "}
              <Badge variant="outline" color="var(--color-blue)">
                Sept 2025 – Dec 2025
              </Badge>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>
                Built an AI-driven application to support underrepresented
                tradespeople in Canada.
              </List.Item>
              <List.Item>
                Developed mobile frontend with Expo and React Native using
                Tailwind CSS.
              </List.Item>
              <List.Item>
                Managed backend and auth using Supabase Edge Functions.
              </List.Item>
            </List>
          </Paper>
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between" mb="xs">
              <Title order={3} size="h4">
                InkLink | Full-Stack Web Developer
              </Title>{" "}
              <Badge variant="outline" color="var(--color-blue)">
                May 2025 – June 2025
              </Badge>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>
                Collaborated with designers to build a note-sharing application
                for students.
              </List.Item>
              <List.Item>
                Engineered frontend using React with TypeScript and MongoDB.
              </List.Item>
            </List>
          </Paper>
        </Stack>

        {/* Experience Section */}
        <Stack gap="md" mt="xl">
          <Group gap="sm">
            <ThemeIcon variant="light" size="lg" color="green">
              <IconBriefcase size={20} />
            </ThemeIcon>
            <Title order={2}>Professional Experience</Title>
          </Group>

          <Stack gap="sm">
            <div>
              <Group justify="space-between">
                <Text fw={700}>Lead-In-Training | Byte Camp</Text>
                <Text size="xs" c="dimmed">
                  July 2025 – Sept 2025
                </Text>{" "}
              </Group>
              <Text size="sm">
                Taught children 3D modeling, programming (Python/Scratch), and
                digital media skills.
              </Text>
            </div>

            <div>
              <Group justify="space-between">
                <Text fw={700}>Laboratory Assistant | RepeatDx</Text>
                <Text size="xs" c="dimmed">
                  Dec 2023 – March 2024
                </Text>{" "}
              </Group>
              <Text size="sm">
                Handled patient blood samples and managed clinical diagnostics
                data.
              </Text>
            </div>
          </Stack>
        </Stack>

        {/* Education Section */}
        <Stack gap="md" mt="xl">
          <Group gap="sm">
            <ThemeIcon variant="light" size="lg" color="orange">
              <IconSchool size={20} />
            </ThemeIcon>
            <Title order={2}>Education</Title>
          </Group>

          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={700}>Full-Stack Web Development Diploma</Text>
              <Text size="sm">
                British Columbia Institute of Technology
              </Text>{" "}
            </div>
            <Text size="sm" c="dimmed">
              2024 – 2026
            </Text>{" "}
          </Group>

          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={700}>Bachelor of Science</Text>
              <Text size="sm">University of Toronto</Text>
              <Text size="xs">
                Major in Cell & Systems Biology; Minors in Immunology and
                Sociology
              </Text>{" "}
            </div>
            <Text size="sm" c="dimmed">
              2019 – 2023
            </Text>{" "}
          </Group>
        </Stack>
      </Container>
    </>
  );
}
