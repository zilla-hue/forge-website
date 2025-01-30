import ProjectGrid from "./ProjectGrid";

const Portfolio = () => {
  return (
    <section id="work" className="py-20 md:py-28 lg:py-32 bg-[#171717]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent mb-4 md:mb-6">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and creative projects
            that showcase our expertise in digital transformation and brand
            evolution.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Portfolio;
