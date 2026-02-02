export type Project = {
  id: string;
  title: string;
  coverImage: string;
  summary: string;
  description: string;
  rationale: {
    short: string;
    long: string;
  };
  tech: string[];
  gallery?: {
    type: "image" | "video";
    src: string;
    alt: string;
  }[];
  links?: {
    internal: string | null;
    github?: string | null;
    live?: string | null;
  };
};
