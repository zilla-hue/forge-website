import { Link } from "react-router-dom";
import { ParallaxCard } from "../components/ParallaxCard";
import { Button } from "../components/ui/button";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";

interface ProjectDialogProps {
  project: (typeof projects)[0];
  onClose: () => void;
}

const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-gradient-to-b from-[#1a1a1a] to-[#171717] rounded-2xl shadow-2xl overflow-hidden animate-slide-up my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[40vh] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="p-6 md:p-8 lg:p-10 max-h-[60vh] overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-white/80 bg-[#FF0006]/10 border border-[#FF0006]/20 px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-8 text-secondary-light/90">
            <p className="text-lg leading-relaxed">{project.description}</p>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">
                Challenge
              </h3>
              <p className="text-base leading-relaxed">
                Creating a visually striking campaign that balances artistic
                expression with commercial objectives while maintaining brand
                consistency across all touchpoints.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">
                Solution
              </h3>
              <p className="text-base leading-relaxed">
                We developed a comprehensive creative strategy that leveraged
                cutting-edge techniques, strategic planning, and innovative
                approaches to create compelling narratives that resonate with
                the target audience.
              </p>
            </div>

            <div className="bg-[#FF0006]/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Key Results
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-center space-x-3 text-white/90">
                  <div className="h-10 w-10 rounded-lg bg-[#FF0006]/20 flex items-center justify-center">
                    <span className="text-lg font-bold">45%</span>
                  </div>
                  <span>Increase in brand engagement</span>
                </li>
                <li className="flex items-center space-x-3 text-white/90">
                  <div className="h-10 w-10 rounded-lg bg-[#FF0006]/20 flex items-center justify-center">
                    <span className="text-lg font-bold">2.5M</span>
                  </div>
                  <span>Social media impressions</span>
                </li>
                <li className="flex items-center space-x-3 text-white/90">
                  <div className="h-10 w-10 rounded-lg bg-[#FF0006]/20 flex items-center justify-center">
                    <span className="text-lg font-bold">10+</span>
                  </div>
                  <span>Industry features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  return (
    <main className="min-h-screen bg-secondary">
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black to-secondary">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-xl text-secondary-light/80 mb-8 animate-fade-in delay-200">
              Transforming visions into digital reality through innovative
              solutions and creative excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ParallaxCard
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF0006]/40 transition-all duration-500 animate-fade-in rounded-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF0006] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-light/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-white/70 bg-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="group/btn bg-transparent border border-[#FF0006] text-white hover:bg-[#FF0006]/10 w-full transition-all duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </ParallaxCard>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/contact">
              <Button
                size="lg"
                className="group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-lg">Start Your Project</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
};

const projects = [
  {
    title: "Media Mastery: Digital Campaign Success",
    description:
      "Orchestrated a multi-channel digital campaign that seamlessly integrated social media, digital platforms, and influencer partnerships. Achieved remarkable engagement rates and brand visibility across all touchpoints.",
    image: "/images/forge-art.png",
    tags: ["Media Marketing", "Digital Campaigns", "Media Management"],
  },
  {
    title: "Brand Strategy: Luxury Identity Evolution",
    description:
      "Comprehensive brand transformation project showcasing our expertise in perception management and personality profiling. Developed a distinctive visual language and content strategy that elevated the brand's market position.",
    image: "/images/perfume-4.png",
    tags: ["Perception Management", "Content Creation", "Brand Strategy"],
  },
  {
    title: "Creative Production: Visual Storytelling",
    description:
      "High-end video and photography production combining sophisticated visual arts with expert audio engineering. Created an immersive brand experience through compelling storytelling and artistic direction.",
    image: "/images/perfume.png",
    tags: ["Video & Film", "Visual Arts", "Audio Engineering"],
  },
  {
    title: "Traditional Impact: Urban Advertising",
    description:
      "Strategic outdoor advertising campaign that dominated the urban landscape. Combined traditional billboard presence with integrated digital elements for maximum impact and engagement.",
    image: "/images/Billboard.jpg",
    tags: ["Outdoor Advertising", "Publication & Print", "Digital Integration"],
  },
  {
    title: "Creative Production: Product Excellence",
    description:
      "Premium product photography and film production showcasing technical excellence in visual storytelling. Utilized advanced lighting techniques and composition to create compelling commercial narratives.",
    image: "/images/black-earpods.png",
    tags: ["Video & Film", "Visual Arts", "Creative Direction"],
  },
  {
    title: "Brand Strategy: Market Positioning",
    description:
      "Strategic brand development project focusing on market positioning and visual identity. Created a cohesive brand system that resonates with the target audience while maintaining brand authenticity.",
    image: "/images/bottle-water.png",
    tags: ["Personality Profiling", "Content Creation", "Brand Strategy"],
  },
];

export default WorkPage;
