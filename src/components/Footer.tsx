import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { ActionIcon, Group, Text, Stack } from "@mantine/core";
import { Image } from "@mantine/core";
import classes from "./FooterSocial.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={classes.footer}
      style={{
        padding: "2rem 4rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: isMobile ? "center" : "space-between",
        gap: "2rem",
      }}
    >
      <Stack
        align={isMobile ? "center" : "flex-start"}
        style={{ width: isMobile ? "100%" : "auto" }}
      >
        <Image
          src="/logo.png"
          height={50}
          width={30}
          fit="contain"
          alt="nila logo"
        />
        <Text size="sm" ta={isMobile ? "center" : "right"}>
          &copy; {new Date().getFullYear()} Nila Erturk. All rights reserved.
        </Text>
      </Stack>

      {/* Right side: Socials */}
      <Stack
        align={isMobile ? "center" : "flex-end"}
        style={{ width: isMobile ? "100%" : "auto" }}
      >
        <Text size="sm" ta={isMobile ? "center" : "right"}>
          Connect with me!
        </Text>
        <Group
          style={{
            flexWrap: "wrap",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <a
            href="https://github.com/nilae2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg" color="#2b3990" variant="subtle" radius="xl">
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/nila-e-956246290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg" color="#2b3990" variant="subtle" radius="xl">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </a>

          <a href="mailto:nilaerturk@gmail.com">
            <ActionIcon size="lg" color="#2b3990" variant="subtle" radius="xl">
              <IconMail size={18} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Stack>
    </div>
  );
}
