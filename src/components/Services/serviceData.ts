import { Palette, Globe, Camera, LucideIcon, Radio } from "lucide-react";

interface ServiceCategory {
  title: string;
  services: string[];
  description: string;
  icon?: LucideIcon;
}

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Radio,
    title: "Media Mastery",
    services: ["Media Marketing", "Media Management", "Digital Campaigns"],
    description:
      "Amplify your message across TV, radio, digital, and social—all optimized for maximum reach.",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    services: [
      "Perception Management",
      "Personality Profiling",
      "Content Creation",
    ],
    description:
      "Shape how the world sees you—craft a unique identity that stands the test of time.",
  },
  {
    icon: Globe,
    title: "Creative Production",
    services: [
      "Video & Film",
      "Radio & TV Ads",
      "Music & Audio Engineering",
      "Visual Arts",
    ],
    description:
      "Compelling visuals and soundtracks that captivate audiences and elevate storytelling.",
  },
  {
    icon: Camera,
    title: "Traditional & Digital Impact",
    services: [
      "Outdoor Advertising",
      "Publication & Print",
      "Merchandise",
      "SEO & PPC",
    ],
    description:
      "Billboards that stop traffic. Print materials that inspire action. Digital campaigns that dominate.",
  },
];
