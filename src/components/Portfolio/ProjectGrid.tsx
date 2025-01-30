import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";
import { cn } from "@/lib/utils";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          className={cn(
            project.featured ? "sm:col-span-2 lg:col-span-2" : "",
            index === 0 ? "lg:row-span-2" : ""
          )}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
