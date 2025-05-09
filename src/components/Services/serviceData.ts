import {
  Megaphone,
  Radio,
  Globe,
  Camera,
  Palette,
  Users,
  Target,
  PenTool,
  UserCheck,
  Layers,
  Newspaper,
  ShoppingBag,
  Film,
  Video,
  Music,
  Volume2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Simple interface defining the structure of each service category
interface ServiceCategory {
  title: string; // Category name
  services: string[]; // List of services offered in this category
  description: string; // Brief explanation of the category
  icon?: LucideIcon; // Optional icon from lucide-react library
}

// Main data array containing all updated services
export const serviceCategories: ServiceCategory[] = [
  {
    icon: Megaphone,
    title: "Out of Home Advertising",
    services: ["Billboards", "Transit Banners", "Posters"],
    description:
      "Public space ads: billboards, transit banners, posters. Focus on high-visibility brand messaging.",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    services: [
      "Positioning",
      "Voice & Identity",
      "Market Identity",
      "Long-term Goals",
    ],
    description:
      "Define positioning, voice, market identity, and long-term goals.",
  },
  {
    icon: Radio,
    title: "Media Marketing",
    services: [
      "Digital Campaigns",
      "Print Campaigns",
      "Radio Campaigns",
      "Social Media Campaigns",
      "Content Creation",
      "Audience Targeting",
    ],
    description:
      "Multi-platform campaigns (digital, print, radio, social). Includes content creation and audience targeting.",
  },
  {
    icon: Megaphone,
    title: "Media Management",
    services: ["Media Planning", "Media Buying", "Optimization", "Analytics"],
    description:
      "Media planning, buying, optimization, analytics. Data-driven decisions for better engagement.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    services: ["SEO", "PPC", "Social Media", "Email Marketing"],
    description: "SEO, PPC, social media, email marketing.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    services: ["Copywriting for Blogs", "Website Copy", "Social Media Copy"],
    description:
      "Copywriting for blogs, websites, and social media. Brand-aligned tone and voice.",
  },
  {
    icon: Target,
    title: "Perception Management",
    services: ["Strategic Messaging", "Brand Image Shaping"],
    description:
      "Shape public opinion and brand image through strategic messaging.",
  },
  {
    icon: UserCheck,
    title: "Personality Profiling",
    services: ["Brand Persona Research", "Behavior Alignment"],
    description:
      "Define and humanize brand persona using research and behavior alignment.",
  },
  {
    icon: Newspaper,
    title: "Public Relations",
    services: [
      "Press Coverage",
      "Media Interviews",
      "Company News",
      "Crisis Communication",
    ],
    description:
      "Press coverage, media interviews, company news, crisis communication.",
  },
  {
    icon: ShoppingBag,
    title: "Merchandise",
    services: [
      "Branded Promotional Items",
      "Printed Collateral",
      "Posters",
      "Brochures",
    ],
    description:
      "Branded promotional items and printed collateral (e.g., posters, brochures).",
  },
  {
    icon: Layers,
    title: "Visual Arts",
    services: ["Design", "Illustration", "Video Graphics", "Motion Visuals"],
    description:
      "Design, illustration, video graphics, motion visuals for digital and print.",
  },
  {
    icon: Film,
    title: "Video & Film Production",
    services: ["Storyboarding", "Filming", "Editing", "Postproduction"],
    description: "Storyboarding, filming, editing, and postproduction.",
  },
  {
    icon: Camera,
    title: "Radio & TV Production",
    services: [
      "Scripts",
      "Voiceovers",
      "Engineering",
      "Broadcast-ready Content",
    ],
    description:
      "Scripts, voiceovers, engineering, and broadcast-ready content.",
  },
  {
    icon: Newspaper,
    title: "Publication & Printing",
    services: ["Brochures", "Catalogs", "Magazines", "High-quality Finishes"],
    description: "Brochures, catalogs, magazines, with high-quality finishes.",
  },
  {
    icon: Volume2,
    title: "Audio Engineering",
    services: ["Media-grade Audio Solutions", "Equipment Rentals for Events"],
    description:
      "Media-grade audio solutions, including equipment rentals for events.",
  },
  {
    icon: Music,
    title: "Music Production",
    services: ["Original Soundtracks", "Jingles", "Custom Music for Campaigns"],
    description:
      "Original soundtracks, jingles, and custom music for campaigns.",
  },
];
