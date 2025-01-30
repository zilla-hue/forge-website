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
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-o sm:p-4 bg-black/80 animate-fade-in overflow-y-auto">
      <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-[#171717] md:rounded-lg shadow-xl overflow-hidden animate-slide-up md:my-8">
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors md:bg-transparent rounded-full md:rounded-none z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 md:h-auto object-cover"
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8 max-h-[calc(100vh-12rem)] md:max-h-[60vh] overflow-y-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm text-white/70 bg-white/10 px-2 sm:px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6 text-secondary-light/80">
            <p className="text-base sm:text-lg">{project.description}</p>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Challenge
              </h3>
              <p className="text-sm sm:text-base">
                Creating a visually striking campaign that balances artistic
                expression with commercial objectives while maintaining brand
                consistency across all touchpoints.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Solution
              </h3>
              <p className="text-sm sm:text-base">
                We developed a comprehensive creative strategy that leveraged
                cutting-edge photography techniques, strategic color theory, and
                innovative composition to create a compelling visual narrative
                that resonates with the target audience.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Results</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Increased brand engagement by 45%</li>
                <li>Generated 2.5M+ impressions across social media</li>
                <li>Featured in leading industry publications</li>
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
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-xl text-secondary-light/80 mb-8 animate-fade-in delay-200">
              Transforming visions into digital reality through innovative
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ParallaxCard
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF0006] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-light/80 mb-4">
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
                    className="group/btn bg-transparent border border-[#FF0006] text-white hover:bg-[#FF0006]/10 w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </ParallaxCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button
                size="lg"
                className="group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white px-8 py-6 rounded-full"
              >
                <span>Start Your Project</span>
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
    title: "Beauty Campaign: Color Revolution Series",
    description:
      "Creative direction for high-fashion beauty campaign, showcasing our expertise in artistic direction, makeup artistry collaboration, and avant-garde commercial photography. Part of an integrated marketing campaign.",
    image: "/images/forge-art.png",
    tags: ["Creative Direction", "Advertising Campaign", "Art Direction"],
  },
  {
    title: "Dramatic Perfume Spotlight Photography",
    description:
      "Artistically lit premium fragrance bottle with amber liquid, showcased against a dark background with dramatic spotlight and mirror reflection. Exemplifies luxury product photography.",
    image: "/images/perfume-4.png",
    tags: ["Photography", "Elegant", "Fragrance"],
  },
  {
    title: "Classic Perfume on Stone Pedestal",
    description:
      "Luxurious fragrance bottle displayed on textured black stone with atmospheric smoke effects. Square glass bottle containing amber-colored perfume with sophisticated minimal design.",
    image: "/images/perfume.png",
    tags: ["Photography", "Design", "Luxury"],
  },
  {
    title: "Geometric Billboard Campaign: Urban Impact",
    description:
      "Large-format outdoor advertising design showcasing minimalist geometric patterns and high-contrast color strategy. Mounted on concrete facade, this billboard demonstrates our expertise in creating striking outdoor campaigns that command attention through bold simplicity and strategic color use.",
    image: "/images/forge-outdoor.png",
    tags: ["Outdoor Advertising", "Billboard Design", "Advertising Agency"],
  },
  {
    title: "Product Photography: Tech Premium Series",
    description:
      "In-house product photography demonstrating luxury tech positioning through dramatic lighting, color theory, and composition. Showcasing our ability to elevate consumer electronics through creative direction.",
    image: "/images/black-earpods.png",
    tags: ["Product Photography", "Product Marketing", "Tech Branding"],
  },
  {
    title: "Beverage Branding: Artisanal Water Campaign",
    description:
      "Brand identity development featuring custom illustration, heritage-inspired design elements, and considered color psychology. Demonstrates our integrated approach to packaging design and visual storytelling.",
    image: "/images/bottle-water.png",
    tags: ["Brand Identity", "Brand Strategy", "Breverage Branding"],
  },
];

export default WorkPage;
