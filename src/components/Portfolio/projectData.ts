// Define project interface that aligns with service categories
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Media Marketing Campaign",
    description:
      "Executed a comprehensive media marketing campaign integrating social media, digital platforms, and influencer partnerships to drive engagement and brand visibility.",
    image: "/images/forge-art.png",
    tags: ["Media Marketing", "Digital Campaigns", "Media Management"],
    link: "#",
    featured: true,
  },
  {
    title: "Outdoor Advertising Service",
    description:
      "Implemented a strategic outdoor advertising campaign combining traditional billboards with digital elements to maximize urban visibility and audience engagement.",
    image: "/images/Billboard.jpg",
    tags: ["Outdoor Advertising", "Publication & Print", "Digital Integration"],
    link: "#",
  },
  {
    title: "Video & Film Production Service",
    description:
      "Produced a visually captivating advertising campaign for Leon and Grey, showcasing expertise in cinematic storytelling, creative direction, and high-impact visual content for brand elevation.",
    image: "/videos/02academy_abuja_548910028.mp4",
    tags: ["Video & Film", "Educational Content", "Media Production"],
    link: "#",
    featured: true,
  },
  {
    title: "Brand Strategy & Perception Management",
    description:
      "Delivered a full-scale brand strategy and perception management service, including personality profiling, visual language development, and content strategy to elevate market position.",
    image: "/images/Luxury_is_exotic.jpg",
    tags: ["Perception Management", "Content Creation", "Brand Strategy"],
    link: "#",
  },
];
