import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 2000px)");
  return (
    <section
      className="hero"
      style={{
        padding: "3rem 0",
        overflow: "hidden",
        paddingTop: "90px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "left",
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(40px)",
          borderRadius: 12,
          padding: "0 2rem",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <h2 style={{ fontWeight: 700, fontSize: "2.5rem", margin: 0 }}>
            Nila Erturk
          </h2>
          <h3
            style={{
              margin: 0,
              fontSize: "1.5rem",
            }}
          >
            Full-Stack Web Developer
          </h3>
        </div>
        <div style={{ marginTop: "2rem", lineHeight: 1.6 }}>
          <p>
            I am a full‑stack web developer with hands‑on experience building
            web and mobile applications using TypeScript, React, React Native,
            and JavaScript.
          </p>
          <p>
            I hold a Bachelor of Science from the University of Toronto,
            majoring in Cell & Systems Biology with double minors in Immunology
            and Sociology, and I am currently completing a Full-Stack Web
            Development diploma at BCIT.
          </p>
          <p>
            When I’m not building applications, you’ll likely find me powered by
            matcha, hiking through Vancouver's forests, piecing together jigsaw
            puzzles, or getting lost in books.
          </p>
        </div>
      </div>

      <Group
          style={{
            flexWrap: "wrap",
            gap: '1rem',
            justifyContent: isMobile ? "left" : "flex-end",
            marginTop: '1rem'
          }}
        >
          <a
            href="https://github.com/nilae2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon  size={60} color="#2b3990" variant="subtle" radius="xl" >
              <IconBrandGithub size={40} stroke={1.5} />
            </ActionIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/nila-e-956246290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size={60} color="#2b3990" variant="subtle" radius="xl">
              <IconBrandLinkedin size={40} stroke={1.5} />
            </ActionIcon>
          </a>

          <a href="mailto:nilaerturk@gmail.com">
            <ActionIcon size={60} color="#2b3990" variant="subtle" radius="xl">
              <IconMail size={40} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>

      {/* {isMobile ? (
        <img
          src="/linkedin.jpg"
          alt="Nila Erturk Profile Picture"
          style={{
            width: "200px",
            marginTop: "2rem",
            borderRadius: "50%",
            display: "block",
            alignSelf: "center",
          }}
        />
      ) : (
        <img
          src="/linkedin.jpg"
          alt="Nila Erturk Profile Picture"
          style={{
            position: "absolute",
            top: "30%",
            right: "25%",
            width: "300px",
          }}
        />
      )} */}
    </section>
  );
};

export default Hero;
