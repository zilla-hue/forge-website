import ProjectGrid from './ProjectGrid';

const Portfolio = () => {
  return (
    <section id="work" className="py-24 bg-[#171717]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work
          </h2>
          <p className="text-lg text-gray-400">
            Explore our portfolio of innovative solutions and creative projects
            that showcase our expertise in digital transformation and brand evolution.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Portfolio;